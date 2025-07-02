import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
    
    // Step 3: Student Information
    students: [
      {
        name: '',
        grade: '',
        age: null as number | null,
        subjects: [] as string[],
        challenges: ''
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

  constructor(
    private router: Router,
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
    return !!(this.formData.address?.trim());
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
      age: null,
      subjects: [],
      challenges: ''
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

  // Form Submission
  async onSubmit(): Promise<void> {
    if (!this.isStep4Valid()) {
      this.showValidationError();
      return;
    }

    this.isSubmitting = true;

    try {
      console.log('Parent Registration Data:', this.formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Collect all unique subjects from students
      const allSubjects = new Set<string>();
      this.formData.students.forEach(student => {
        student.subjects.forEach(subject => allSubjects.add(subject));
      });
      
      // Prepare data for localStorage
      const parentData: RegisteredParent = {
        id: '', // Will be generated by service
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        phone: this.formData.phone,
        location: this.formData.address, // Using address as location
        profilePhoto: this.formData.profilePhoto,
        students: this.formData.students.map(student => ({
          name: student.name,
          grade: student.grade,
          age: student.age || 0, // Convert null to 0 or use a default age
          subjects: student.subjects,
          challenges: student.challenges || '' // Ensure it's a string
        })),
        subjectNeeds: Array.from(allSubjects), // Convert subjects from students
        additionalRequirements: this.formData.additionalRequirements,
        preferredSchedule: this.formData.preferredSchedule,
        registrationDate: new Date().toISOString() // Add current date
      };

      // Save to localStorage
      this.localStorageService.saveParentRegistration(parentData);
      
      // Show success message
      alert('Registration completed successfully! Welcome to our education community.');
      
      // Redirect to parent-profiles page
      this.router.navigate(['/parent-profiles']);
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
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
}
