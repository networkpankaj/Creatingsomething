import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormConfigService } from '../../services/form-config.service';
import { FormField, FormSection } from '../../../shared/models/form-field.model';
import { RegistrationRequest } from '../../../shared/models/registration.model';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
  providers: [FormConfigService]
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() serviceType: string = '';
  @Input() userType: 'provider' | 'consumer' = 'consumer';
  @Output() formSubmit = new EventEmitter<RegistrationRequest>();
  @Output() formCancel = new EventEmitter<void>();

  dynamicForm: FormGroup;
  formSections: FormSection[] = [];
  isSubmitting = false;
  checkboxValues: { [key: string]: string[] } = {};

  constructor(
    private fb: FormBuilder,
    private formConfigService: FormConfigService
  ) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit() {
    this.loadFormConfig();
  }

  ngOnDestroy() {
    // Clean up subscriptions if any
  }

  private loadFormConfig() {
    const config = this.formConfigService.getFormConfig(this.serviceType);
    this.formSections = this.userType === 'provider' ? config.provider : config.consumer;
    this.buildForm();
  }

  private buildForm() {
    const formControls: { [key: string]: any } = {};
    
    this.formSections.forEach(section => {
      section.fields.forEach(field => {
        if (field.type === 'checkbox') {
          this.checkboxValues[field.id] = [];
          formControls[field.id] = this.fb.array([]);
        } else {
          const validators = [];
          if (field.required) {
            validators.push(Validators.required);
          }
          if (field.validation?.minLength) {
            validators.push(Validators.minLength(field.validation.minLength));
          }
          if (field.validation?.maxLength) {
            validators.push(Validators.maxLength(field.validation.maxLength));
          }
          if (field.validation?.pattern) {
            validators.push(Validators.pattern(field.validation.pattern));
          }
          if (field.type === 'email') {
            validators.push(Validators.email);
          }
          
          formControls[field.id] = ['', validators];
        }
      });
    });

    this.dynamicForm = this.fb.group(formControls);
  }

  getFormSubtitle(): string {
    const serviceNames: { [key: string]: string } = {
      'teacher': 'Teacher Services',
      'parent': 'Parent Support',
      'home-cleaning': 'Home Cleaning',
      'ac-cleaning': 'AC Cleaning',
      'beauty': 'Beauty Services',
      'plumbing': 'Plumbing Services',
      'electrical': 'Electrical Services',
      'spa': 'Spa & Massage',
      'phone-repair': 'Phone Repair',
      'computer': 'Computer Services',
      'fitness': 'Personal Trainer',
      'yoga': 'Yoga Instructor'
    };
    
    const serviceName = serviceNames[this.serviceType] || this.serviceType;
    return this.userType === 'provider' 
      ? `Become a ${serviceName} provider` 
      : `Book ${serviceName}`;
  }

  getFieldClass(field: FormField): string {
    let className = 'form-field';
    if (field.type === 'checkbox') {
      className += ' checkbox-field';
    }
    if (field.type === 'textarea') {
      className += ' textarea-field';
    }
    return className;
  }

  isFieldInvalid(fieldId: string): boolean {
    const field = this.dynamicForm.get(fieldId);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getFieldErrorMessage(fieldId: string): string {
    const field = this.dynamicForm.get(fieldId);
    if (field?.errors) {
      if (field.errors['required']) {
        return 'This field is required';
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `Minimum length is ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        return `Maximum length is ${field.errors['maxlength'].requiredLength} characters`;
      }
      if (field.errors['pattern']) {
        return 'Please enter a valid format';
      }
    }
    return '';
  }

  onCheckboxChange(fieldId: string, value: string, event: any) {
    if (!this.checkboxValues[fieldId]) {
      this.checkboxValues[fieldId] = [];
    }

    if (event.target.checked) {
      this.checkboxValues[fieldId].push(value);
    } else {
      const index = this.checkboxValues[fieldId].indexOf(value);
      if (index > -1) {
        this.checkboxValues[fieldId].splice(index, 1);
      }
    }

    // Update form control
    const formArray = this.dynamicForm.get(fieldId) as FormArray;
    if (formArray) {
      formArray.clear();
      this.checkboxValues[fieldId].forEach(val => {
        formArray.push(this.fb.control(val));
      });
    }
  }

  isCheckboxChecked(fieldId: string, value: string): boolean {
    return this.checkboxValues[fieldId]?.includes(value) || false;
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      this.isSubmitting = true;
      
      const formData = this.dynamicForm.value;
      
      // Add checkbox values to form data
      Object.keys(this.checkboxValues).forEach(key => {
        formData[key] = this.checkboxValues[key];
      });

      const registrationRequest: RegistrationRequest = {
        serviceType: this.serviceType,
        userType: this.userType,
        data: formData
      };

      this.formSubmit.emit(registrationRequest);
      
      // Reset submitting state after a delay
      setTimeout(() => {
        this.isSubmitting = false;
      }, 1000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.dynamicForm.controls).forEach(key => {
        this.dynamicForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.formCancel.emit();
  }
}