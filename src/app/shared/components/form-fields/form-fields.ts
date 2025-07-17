import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.html',
  styleUrls: ['./form-fields.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FormFields {
  @Input() field: any;
  @Input() value: any;
  @Input() isInvalid: boolean = false;
  @Input() errorMessage: string = '';
  @Output() valueChange = new EventEmitter<any>();

  showPassword: boolean = false;

  onInputChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

  onSelectChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

  onRadioChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

  onCheckboxChange(event: any) {
    const optionValue = event.target.value;
    let newValue = Array.isArray(this.value) ? [...this.value] : [];
    if (event.target.checked) {
      if (!newValue.includes(optionValue)) {
        newValue.push(optionValue);
      }
    } else {
      newValue = newValue.filter((v: any) => v !== optionValue);
    }
    this.valueChange.emit(newValue);
  }

  isChecked(optionValue: any): boolean {
    return Array.isArray(this.value) && this.value.includes(optionValue);
  }

  hasAnyCheckboxSelected(): boolean {
    return Array.isArray(this.value) && this.value.length > 0;
  }

  onFileChange(event: any) {
    this.valueChange.emit(event.target.files);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isValidFieldType(): boolean {
    const supportedTypes = [
      'text', 'email', 'tel', 'number', 'textarea', 'select', 'radio', 'checkbox',
      'password', 'date', 'time', 'file', 'range', 'color', 'url'
    ];
    return supportedTypes.includes(this.field?.type);
  }
}
