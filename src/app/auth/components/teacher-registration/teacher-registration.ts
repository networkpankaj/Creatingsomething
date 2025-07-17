import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, RegisteredTeacher } from '../../services/local-storage.service';

// Fix: Define a proper schedule interface
interface ScheduleDay {
  [key: string]: string;
}

@Component({
  selector: 'app-teacher-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-registration.html',
  styleUrls: ['./teacher-registration.css']
})
export class TeacherRegistrationComponent implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 4;
  isSubmitting: boolean = false;

  // Add missing properties for agreements
  agreeToTerms: boolean = false;
  agreeToEmails: boolean = false;

  // Add this property
  showReviewModal: boolean = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '', // Primary subject
    subjects: [] as string[], // All subjects
    experience: 0,
    education: '',
    classes: [] as string[],
    location: '',
    profilePhoto: null as File | null,
    bio: '',
    // Fix: Use the proper type for schedule
    availableSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    } as ScheduleDay,

    // Payment information fields (keep these)
    hourlyRate: null as number | null,
    groupRate: null as number | null,
    paymentMethods: [] as string[],
    cancellationPolicy: '',
    customPolicyDetails: '',
    additionalNotes: '',
    
    // New grade level fields
    primaryGrades: '',
    elementaryGrades: '',
    middleGrades: '',
    highSchoolGrades: '',
    seniorGrades: '',
    
    // Payment preference fields
    rateType: '', // 'negotiable' or 'fixed'
    monthlyRate: null as number | null,
    
    // Teaching preferences
    teachingMode: '',
    maxStudents: ''
  };

  subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Geography',
    'Physics', 'Chemistry', 'Biology', 'Computer Science', 
    'Art', 'Music', 'Physical Education', 'Social Studies'
  ];

  classes = [
    'Pre-K', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3',
    'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
    'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  locations = [
    'North District', 'South District', 'East District', 'West District'
  ];

  timeSlots = [
    '8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'
  ];

  selectedClass: string = '';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

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

  // Validation Methods
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
    return !!(this.formData.firstName.trim() && 
              this.formData.lastName.trim() && 
              this.formData.email.trim() && 
              this.formData.phone.trim());
  }

  isStep2Valid(): boolean {
    return !!(this.formData.subject && 
              this.formData.subjects.length > 0 && 
              this.formData.experience >= 0 && 
              this.formData.education.trim());
  }

  isStep3Valid(): boolean {
    return !!(
      this.formData.classes.length > 0 && 
      this.formData.rateType && 
      (this.formData.rateType === 'negotiable' || 
       (this.formData.rateType === 'fixed' && this.formData.monthlyRate))
    );
  }

  // Update isStep4Valid to not require payment fields
  isStep4Valid(): boolean {
    return this.agreeToTerms; // Only require terms agreement
  }

  showValidationError(): void {
    alert('Please fill in all required fields before proceeding.');
  }

  // Subject Management
  toggleSubject(subject: string): void {
    const index = this.formData.subjects.indexOf(subject);
    if (index > -1) {
      this.formData.subjects.splice(index, 1);
    } else {
      this.formData.subjects.push(subject);
    }

    // If primary subject is not in subjects array, add it
    if (this.formData.subject && !this.formData.subjects.includes(this.formData.subject)) {
      this.formData.subjects.push(this.formData.subject);
    }
  }

  onPrimarySubjectChange(): void {
    // Add primary subject to subjects array if not already there
    if (this.formData.subject && !this.formData.subjects.includes(this.formData.subject)) {
      this.formData.subjects.push(this.formData.subject);
    }
  }

  // Class Management
  toggleClass(className: string): void {
    const index = this.formData.classes.indexOf(className);
    if (index > -1) {
      this.formData.classes.splice(index, 1);
    } else {
      this.formData.classes.push(className);
    }
  }

  addSelectedClass() {
    if (this.selectedClass && !this.formData.classes.includes(this.selectedClass)) {
      this.formData.classes.push(this.selectedClass);
      this.selectedClass = ''; // Reset dropdown
    }
  }

  removeClass(index: number) {
    this.formData.classes.splice(index, 1);
  }

  // Schedule Management - Updated methods
  getScheduleValue(day: string): string {
    const validDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (validDays.includes(day)) {
      return this.formData.availableSchedule[day as keyof ScheduleDay] || '';
    }
    return '';
  }

  setScheduleValue(day: string, value: string): void {
    const validDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (validDays.includes(day)) {
      this.formData.availableSchedule[day as keyof ScheduleDay] = value;
    }
  }

  // New method to handle schedule change events properly
  onScheduleChange(day: string, event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value !== undefined) {
      this.setScheduleValue(day, target.value);
    }
  }

  // File Upload
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.formData.profilePhoto = file;
    }
  }

  // Add missing method for step titles
  getStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Personal Information';
      case 2: return 'Professional Experience';
      case 3: return 'Classes & Preferences';
      case 4: return 'Schedule & Availability';
      default: return '';
    }
  }

  // New methods for grade level and payment preferences
  updateSelectedGrades(): void {
    this.formData.classes = [];
    
    const gradeSelections = [
      this.formData.primaryGrades,
      this.formData.elementaryGrades,
      this.formData.middleGrades,
      this.formData.highSchoolGrades,
      this.formData.seniorGrades
    ];
    
    gradeSelections.forEach(selection => {
      if (selection) {
        this.formData.classes.push(this.getGradeDisplayName(selection));
      }
    });
  }

  getGradeDisplayName(selection: string): string {
    const gradeNames: { [key: string]: string } = {
      'nursery': 'Nursery',
      'lkg': 'LKG',
      'ukg': 'UKG',
      'all-preschool': 'All Pre-School',
      'class-1': 'Class 1',
      'class-2': 'Class 2',
      'class-3': 'Class 3',
      'class-4': 'Class 4',
      'class-5': 'Class 5',
      'class-1-3': 'Classes 1-3',
      'class-4-5': 'Classes 4-5',
      'all-elementary': 'All Elementary (1-5)',
      'class-6': 'Class 6',
      'class-7': 'Class 7',
      'class-8': 'Class 8',
      'class-6-7': 'Classes 6-7',
      'class-7-8': 'Classes 7-8',
      'all-middle': 'All Middle School (6-8)',
      'class-9': 'Class 9',
      'class-10': 'Class 10',
      'class-9-10': 'Classes 9-10',
      'class-11': 'Class 11',
      'class-12': 'Class 12',
      'class-11-12': 'Classes 11-12'
    };
    return gradeNames[selection] || selection;
  }

  onRateTypeChange(): void {
    if (this.formData.rateType !== 'fixed') {
      this.formData.monthlyRate = null;
    }
  }

  calculateDailyRate(monthlyRate: number): number {
    return Math.round(monthlyRate / 25); // Assuming 25 working days per month
  }

  calculateHourlyRate(monthlyRate: number): number {
    return Math.round(monthlyRate / (25 * 4)); // Assuming 4 hours per day, 25 days per month
  }

  // Open review modal
  openReviewModal(): void {
    if (!this.agreeToTerms) {
      alert('Please agree to the terms and conditions first.');
      return;
    }
    this.showReviewModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Close review modal
  closeReviewModal(): void {
    this.showReviewModal = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Edit specific section
  editSection(step: number): void {
    this.closeReviewModal();
    this.currentStep = step;
  }

  // Get teaching mode display text
  getTeachingModeDisplay(mode: string): string {
    const modes: { [key: string]: string } = {
      'home-tuition': 'Home Tuition',
      'online': 'Online Classes',
      'both': 'Both (Home + Online)'
    };
    return modes[mode] || mode;
  }

  // Get current date formatted
  getCurrentDate(): string {
    return new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Calculate profile completion percentage
  getProfileCompletion(): number {
    let completedFields = 0;
    let totalFields = 0;

    // Personal Info (4 required fields)
    totalFields += 4;
    if (this.formData.firstName.trim()) completedFields++;
    if (this.formData.lastName.trim()) completedFields++;
    if (this.formData.email.trim()) completedFields++;
    if (this.formData.phone.trim()) completedFields++;

    // Professional Experience (4 required fields)
    totalFields += 4;
    if (this.formData.subject) completedFields++;
    if (this.formData.subjects.length > 0) completedFields++;
    if (this.formData.experience >= 0) completedFields++;
    if (this.formData.education.trim()) completedFields++;

    // Classes & Fee (2 required fields)
    totalFields += 2;
    if (this.formData.classes.length > 0) completedFields++;
    if (this.formData.rateType) completedFields++;

    // Optional fields add bonus completion
    if (this.formData.location) completedFields += 0.5;
    if (this.formData.bio.trim()) completedFields += 0.5;
    if (this.formData.profilePhoto) completedFields += 0.5;

    return Math.round((completedFields / totalFields) * 100);
  }

  // Confirm and submit registration
  async confirmSubmit(): Promise<void> {
    this.isSubmitting = true;

    try {
      console.log('Teacher Registration Data:', this.formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Prepare data for localStorage
      const teacherData: RegisteredTeacher = {
        id: '', // Will be generated by service
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        phone: this.formData.phone,
        subject: this.formData.subject,
        subjects: this.formData.subjects,
        experience: this.formData.experience,
        education: this.formData.education,
        classes: this.formData.classes,
        location: this.formData.location,
        profilePhoto: this.formData.profilePhoto,
        bio: this.formData.bio,
        availableSchedule: this.formData.availableSchedule,
        hourlyRate: this.formData.monthlyRate ?? 0, // Use monthly rate as hourly for now
        registrationDate: new Date().toISOString()
      };

      // Save to localStorage
      this.localStorageService.saveTeacherRegistration(teacherData);
      
      this.closeReviewModal();
      
      // Success message for teachers
      alert('🎉 Teacher registration completed successfully!\n\nYou can now view parent profiles and connect with families.');
      
      // Redirect to parent profiles
      this.router.navigate(['/auth/parent-profiles']);
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('❌ Registration failed. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }

  // Add this method to allow data download
  downloadRegistrationData(): void {
    try {
      const registrationData = {
        personalInfo: {
          name: `${this.formData.firstName} ${this.formData.lastName}`,
          email: this.formData.email,
          phone: this.formData.phone,
          location: this.formData.location,
          registrationDate: new Date().toISOString()
        },
        professional: {
          primarySubject: this.formData.subject,
          allSubjects: this.formData.subjects,
          experience: this.formData.experience,
          education: this.formData.education,
          bio: this.formData.bio
        },
        classes: {
          gradeLevels: this.formData.classes,
          rateType: this.formData.rateType,
          monthlyRate: this.formData.monthlyRate,
          teachingMode: this.formData.teachingMode,
          maxStudents: this.formData.maxStudents
        },
        payment: {
          hourlyRate: this.formData.hourlyRate,
          groupRate: this.formData.groupRate,
          paymentMethods: this.formData.paymentMethods,
          cancellationPolicy: this.formData.cancellationPolicy,
          customPolicyDetails: this.formData.customPolicyDetails,
          additionalNotes: this.formData.additionalNotes
        }
      };

      const jsonString = JSON.stringify(registrationData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `teacher-registration-${this.formData.firstName}-${this.formData.lastName}-${new Date().getTime()}.json`;
      link.click();
      window.URL.revokeObjectURL(url);
      
      alert('✅ Registration data downloaded successfully!');
    } catch (error) {
      console.error('Error downloading data:', error);
      alert('❌ Error downloading registration data. Please try again.');
    }
  }

  // Add this method to handle toggling payment methods
  togglePaymentMethod(method: string): void {
    if (!this.formData.paymentMethods) {
      this.formData.paymentMethods = [];
    }
    const index = this.formData.paymentMethods.indexOf(method);
    if (index > -1) {
      this.formData.paymentMethods.splice(index, 1);
    } else {
      this.formData.paymentMethods.push(method);
    }
  }

  // Update the original onSubmit method to use confirmSubmit
  async onSubmit(): Promise<void> {
    this.openReviewModal();
  }
}
