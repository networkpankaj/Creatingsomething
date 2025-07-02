import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-registration',
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-registration.html',
  styleUrl: './teacher-registration.css'
})
export class TeacherRegistration {
  currentStep: number = 1;
  totalSteps: number = 4;
  isSubmitting: boolean = false;

  formData = {
    // Step 1: Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    profilePhoto: null as File | null,
    
    // Step 2: Professional Experience
    yearsOfExperience: '',
    currentOccupation: '',
    lastClassTaught: '',
    highestEducation: '',
    certifications: '',
    briefBio: '',
    
    // Step 3: Subject Expertise & Availability
    subjects: {
      mathematics: false,
      physics: false,
      chemistry: false,
      biology: false,
      english: false,
      history: false,
      geography: false,
      computerScience: false,
      art: false,
      music: false
    },
    otherSubjects: '',
    addedSubjects: [] as string[],
    gradeLevels: {
      elementary: false,
      middleSchool: false,
      highSchool: false,
      college: false
    },
    availability: {
      weekdays: {
        morning: false,
        afternoon: false,
        evening: false,
        night: false
      },
      weekends: {
        morning: false,
        afternoon: false,
        evening: false,
        night: false
      }
    },
    
    // Step 4: Payment Information
    hourlyRate: '',
    groupSessionRate: '',
    paymentMethods: {
      directDeposit: false,
      paypal: false,
      venmo: false,
      zelle: false,
      cash: false
    },
    cancellationPolicy: '',
    additionalNotes: '',
    agreeToTerms: false,
    agreeToEmails: false
  };

  constructor(private router: Router) {}

  // Add this getter method to fix the character count error
  get bioCharacterCount(): number {
    return this.formData.briefBio ? this.formData.briefBio.length : 0;
  }

  // Navigation Methods
  nextStep(): void {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      this.showValidationError();
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Step Validation
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.isStep1Valid();
      case 2:
        return this.isStep2Valid();
      case 3:
        return this.isStep3Valid();
      case 4:
        return this.isStep4Valid();
      default:
        return false;
    }
  }

  isStep1Valid(): boolean {
    return !!(
      this.formData.firstName?.trim() && 
      this.formData.lastName?.trim() && 
      this.formData.email?.trim() && 
      this.formData.phone?.trim()
    );
  }

  isStep2Valid(): boolean {
    return !!(
      this.formData.yearsOfExperience && 
      this.formData.currentOccupation?.trim() && 
      this.formData.highestEducation && 
      this.formData.briefBio?.trim()
    );
  }

  isStep3Valid(): boolean {
    const hasSubjects = Object.values(this.formData.subjects).some(val => val) || 
                       this.formData.addedSubjects.length > 0;
    const hasGrades = Object.values(this.formData.gradeLevels).some(val => val);
    const hasAvailability = Object.values(this.formData.availability.weekdays).some(val => val) ||
                           Object.values(this.formData.availability.weekends).some(val => val);
    return hasSubjects && hasGrades && hasAvailability;
  }

  isStep4Valid(): boolean {
    const hasPaymentMethod = Object.values(this.formData.paymentMethods).some(val => val);
    return !!(
      this.formData.hourlyRate && 
      hasPaymentMethod && 
      this.formData.cancellationPolicy &&
      this.formData.agreeToTerms
    );
  }

  showValidationError(): void {
    let message = '';
    switch (this.currentStep) {
      case 1:
        message = 'Please fill in all required personal information fields.';
        break;
      case 2:
        message = 'Please complete all required professional experience fields.';
        break;
      case 3:
        message = 'Please select at least one subject, grade level, and time slot.';
        break;
      case 4:
        message = 'Please complete payment information and agree to terms.';
        break;
    }
    alert(message);
  }

  // Get Step Title
  getStepTitle(): string {
    switch (this.currentStep) {
      case 1:
        return 'Personal Information';
      case 2:
        return 'Professional Experience';
      case 3:
        return 'Subject Expertise & Availability';
      case 4:
        return 'Payment Information';
      default:
        return '';
    }
  }

  // File Upload Handler
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      this.formData.profilePhoto = file;
      console.log('Profile photo selected:', file.name);
    }
  }

  // Add Other Subject
  addOtherSubject(): void {
    const subject = this.formData.otherSubjects?.trim();
    if (subject && !this.formData.addedSubjects.includes(subject)) {
      this.formData.addedSubjects.push(subject);
      this.formData.otherSubjects = '';
      console.log('Added subject:', subject);
    }
  }

  removeSubject(subject: string): void {
    this.formData.addedSubjects = this.formData.addedSubjects.filter(s => s !== subject);
  }

  // Form Submission - UPDATED TO REDIRECT TO PARENT-PROFILES
  async onSubmit(): Promise<void> {
    if (!this.formData.agreeToTerms) {
      alert('Please agree to the terms and conditions to continue.');
      return;
    }

    if (!this.isStep4Valid()) {
      this.showValidationError();
      return;
    }

    this.isSubmitting = true;

    try {
      console.log('Teacher Registration Data:', this.formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      alert('Registration completed successfully! Welcome to our teaching community. You can now view and connect with parents.');
      
      // Redirect to parent-profiles page instead of dashboard
      this.router.navigate(['/parent-profiles']);
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
