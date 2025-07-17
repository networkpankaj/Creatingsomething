import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Make sure this is imported
import { LocalStorageService, RegisteredParent } from '../../services/local-storage.service';

@Component({
  selector: 'app-parent-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parent-registration.html',
  styleUrls: ['./parent-registration.css']
})
export class ParentRegistrationComponent implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 4;
  isSubmitting: boolean = false;

  formData = {
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profilePhoto: null as File | null, // Add this line
    
    // Step 2: Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    location: '', // Add this missing property
    customCity: '', // Add this for custom city input
    
    // Step 3: Student Information
    students: [
      {
        name: '',
        grade: '',
        age: null as number | null,
        subjects: [] as string[],
        challenges: '',
        previousMarks: '' // Add this
      }
    ],
    
    // Step 4: Services & Payment
    services: [] as string[],
    paymentMethod: '',
    billingFrequency: 'monthly',
    
    // Additional fields
    subjectNeeds: [] as string[],
    additionalRequirements: '',
    preferredSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    } as { [key: string]: string }
  };

  // Available options
  subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Geography',
    'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Art', 'Music'
  ];

  grades = [
    '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade',
    '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade',
    '11th Grade', '12th Grade'
  ];

  locations = [
    'North District', 'South District', 'East District', 'West District'
  ];

  timeSlots = [
    '8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'
  ];

  showReviewModal: boolean = false;

  constructor(
    private router: Router, // Make sure Router is injected
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  // Helper method for schedule access
  getScheduleValue(day: string): string {
    return this.formData.preferredSchedule[day] || '';
  }

  setScheduleValue(day: string, value: string): void {
    this.formData.preferredSchedule[day] = value;
  }

  // Navigation Methods
  nextStep(): void {
    if (this.currentStep === 1 && !this.isStep1Valid()) {
      alert('Please fill in all required fields');
      return;
    }
    if (this.currentStep === 2 && !this.isStep2Valid()) {
      alert('Please fill in all address fields correctly');
      return;
    }
    if (this.currentStep === 3 && !this.isStep3Valid()) {
      alert('Please add at least one student with complete information');
      return;
    }
    
    if (this.currentStep < this.totalSteps) {
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
    const cityValid = this.formData.city === 'Other' ? 
      !!(this.formData.customCity && this.formData.customCity.trim()) : 
      !!this.formData.city;
    
    return !!(
      this.formData.address && 
      cityValid &&
      this.formData.state && 
      this.formData.zipCode &&
      /^[0-9]{6}$/.test(this.formData.zipCode) // Validate 6-digit PIN
    );
  }

  isStep3Valid(): boolean {
    return this.formData.students.every(student => 
      student.name?.trim() && 
      student.grade && 
      student.subjects.length > 0 &&
      student.age !== null && student.age > 0 // Add age validation if needed
    );
  }

  isStep4Valid(): boolean {
    return this.formData.services.length > 0;
  }

  showValidationError(): void {
    let message = '';
    switch (this.currentStep) {
      case 1:
        message = 'Please fill in all required personal information fields.';
        break;
      case 2:
        message = 'Please complete all address information.';
        break;
      case 3:
        message = 'Please complete all student information.';
        break;
      case 4:
        message = 'Please select at least one service.';
        break;
    }
    alert(message);
  }

  // Student Management
  addStudent(): void {
    this.formData.students.push({
      name: '',
      grade: '',
      age: 0,
      subjects: [],
      challenges: '',
      previousMarks: '' // Add this
    });
  }

  removeStudent(index: number): void {
    if (this.formData.students.length > 1) {
      this.formData.students.splice(index, 1);
    }
  }

  // Subject Management
  toggleSubjectNeed(subject: string): void {
    const index = this.formData.subjectNeeds.indexOf(subject);
    if (index > -1) {
      this.formData.subjectNeeds.splice(index, 1);
    } else {
      this.formData.subjectNeeds.push(subject);
    }
  }

  toggleStudentSubject(studentIndex: number, subject: string): void {
    const student = this.formData.students[studentIndex];
    const index = student.subjects.indexOf(subject);
    if (index > -1) {
      student.subjects.splice(index, 1);
    } else {
      student.subjects.push(subject);
    }
  }

  // Service Management
  toggleService(service: string): void {
    const index = this.formData.services.indexOf(service);
    if (index > -1) {
      this.formData.services.splice(index, 1);
    } else {
      this.formData.services.push(service);
    }
  }

  // Open review modal instead of direct submission
  onSubmit(): void {
    if (!this.isStep4Valid()) {
      this.showValidationError();
      return;
    }
    
    // Open review modal instead of submitting directly
    this.showReviewModal = true;
  }
  
  // Close review modal
  closeReviewModal(): void {
    this.showReviewModal = false;
  }
  
  // Edit specific section - goes back to that step
  editSection(stepNumber: number): void {
    this.currentStep = stepNumber;
    this.showReviewModal = false;
  }
  
  // Get service display names
  getServiceDisplayName(service: string): string {
    const serviceNames: { [key: string]: string } = {
      'tutoring': 'Tutoring',
      'homework': 'Homework Help',
      'test-prep': 'Test Preparation',
      'summer': 'Summer Programs'
    };
    return serviceNames[service] || service;
  }
  
  // Final submission after review confirmation
  async confirmAndSubmit(): Promise<void> {
    this.isSubmitting = true;

    try {
      console.log('Parent Registration Data:', this.formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const location = this.formData.location || 
                      `${this.formData.city}, ${this.formData.state}` || 
                      'Location not specified';
      
      const parentData: RegisteredParent = {
        id: '',
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        phone: this.formData.phone,
        location: location,
        students: this.formData.students,
        subjectNeeds: this.formData.subjectNeeds,
        additionalRequirements: this.formData.additionalRequirements,
        preferredSchedule: this.formData.preferredSchedule,
        profilePhoto: this.formData.profilePhoto,
        registrationDate: new Date().toISOString()
      };

      this.localStorageService.saveParentRegistration(parentData);
      
      // Close modal
      this.showReviewModal = false;
      
      alert('🎉 Parent registration completed successfully!\n\nYou can now browse and connect with qualified teachers.');
      
      this.router.navigate(['/auth/subject-teachers']);
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('❌ Registration failed. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
  
  // Utility Methods
  getStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Personal Information';
      case 2: return 'Address Information';
      case 3: return 'Children Information';
      case 4: return 'Services & Payment';
      default: return '';
    }
  }

  // Add this method to handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Validate file type (only images)
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      this.formData.profilePhoto = file;
      console.log('Profile photo selected:', file.name);
    }
  }

  // Check if subject is selected for student
  isStudentSubjectSelected(studentIndex: number, subject: string): boolean {
    return this.formData.students[studentIndex].subjects.includes(subject);
  }

  // Check if subject need is selected
  isSubjectNeedSelected(subject: string): boolean {
    return this.formData.subjectNeeds.includes(subject);
  }

  // Add this method to your component class
  downloadRegistrationData(): void {
    const dataStr = JSON.stringify(this.formData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registration-data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

// Component में student interface/model में add करें
export interface Student {
  name: string;
  grade: string;
  age: number;
  subjects: string[];
  challenges: string;
  previousMarks?: string; // Optional field
}
