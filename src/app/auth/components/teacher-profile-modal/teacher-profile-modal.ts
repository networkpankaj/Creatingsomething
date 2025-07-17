import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService, CurrentUser } from '../../services/local-storage.service';

interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  initials: string;
  color: string;
  rating: number;
  totalRatings: number;
  experience: number;
  hourlyRate: number;
  availability?: string;
  bio?: string;
  education?: Array<{
    degree: string;
    school: string;
    year: string;
  }> | string; // Allow both string and array
  specializations?: string[];
  teachingApproach?: string;
  location?: string;
  studentsHelped?: number;
  isTopRated?: boolean;
  // Registration data fields
  qualification?: string;
  university?: string;
  graduationYear?: string;
  teachingExperience?: number;
  subjectsToTeach?: string[];
  preferredMode?: string;
  aboutMe?: string;
  expertise?: string[];
  charges?: number;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

@Component({
  selector: 'app-teacher-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-profile-modal.html',
  styleUrl: './teacher-profile-modal.css'
})
export class TeacherProfileModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Input() teacher: Teacher | null = null;
  
  @Output() close = new EventEmitter<void>();
  @Output() contact = new EventEmitter<Teacher>();

  teacherData: any = null;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Track that current user viewed this teacher's profile
    if (this.teacher) {
      this.trackProfileView();
    }
  }

  ngOnChanges() {
    // Update teacher data when teacher input changes
    if (this.teacher) {
      this.prepareTeacherData();
    }
  }

  trackProfileView(): void {
    const currentUser = this.localStorageService.getCurrentUser();
    
    // Only track if current user is a parent
    if (currentUser && this.localStorageService.isCurrentUserParent() && this.teacher) {
      this.localStorageService.trackProfileView(this.teacher.id, currentUser.id);
      console.log(`Parent ${currentUser.firstName} viewed teacher ${this.teacher.firstName}'s profile`);
    }
  }

  private prepareTeacherData() {
    if (!this.teacher) return;

    // Use actual teacher registration data
    this.teacherData = {
      ...this.teacher,
      // Bio from registration or default
      bio: this.teacher.aboutMe || this.teacher.bio || `Experienced ${this.teacher.subject} teacher dedicated to helping students achieve their academic goals.`,
      
      // Specializations from registration
      specializations: this.teacher.expertise || this.teacher.subjectsToTeach || this.teacher.specializations || [this.teacher.subject],
      
      // Teaching approach from registration
      teachingApproach: this.teacher.teachingApproach || `I believe in creating a supportive learning environment tailored to each student's needs. My ${this.teacher.experience || this.teacher.teachingExperience || 5}+ years of experience helps me adapt to different learning styles.`,
      
      // Availability
      availability: this.teacher.preferredMode || this.teacher.availability || 'Online & Offline',
      
      // Students helped (use existing or calculate based on experience)
      studentsHelped: this.teacher.studentsHelped || ((this.teacher.experience || this.teacher.teachingExperience || 5) * 15),
      
      // Education from registration - FIX: Handle both string and array formats
      education: this.getFormattedEducation(),
      
      // Location from registration
      location: this.getFullAddress(),
      
      // Phone from registration
      phone: this.teacher.phone,
      
      // Hourly rate from registration
      hourlyRate: this.teacher.charges || this.teacher.hourlyRate || 500,
      
      // Experience from registration
      experience: this.teacher.teachingExperience || this.teacher.experience || 5
    };
  }

  // Simplified method to handle education formatting
  private getFormattedEducation(): Array<{ degree: string; school: string; year: string }> {
    // If teacher already has education array, use it
    if (this.teacher?.education && Array.isArray(this.teacher.education)) {
      return this.teacher.education;
    }
    
    // If teacher has education string from registration, show it as-is
    if (this.teacher?.education && typeof this.teacher.education === 'string') {
      return [
        {
          degree: this.teacher.education,
          school: '',
          year: ''
        }
      ];
    }
    
    // If teacher has qualification from registration
    if (this.teacher?.qualification) {
      return [
        {
          degree: this.teacher.qualification,
          school: '',
          year: ''
        }
      ];
    }
    
    // Default fallback
    return [
      {
        degree: `Master's in ${this.teacher?.subject || 'Education'}`,
        school: '',
        year: ''
      }
    ];
  }

  private getFullAddress(): string {
    if (!this.teacher) return 'Available Online';
    
    const addressParts = [
      this.teacher.address,
      this.teacher.city,
      this.teacher.state,
      this.teacher.pincode
    ].filter(part => part && part.trim() !== '');
    
    if (addressParts.length > 0) {
      return addressParts.join(', ');
    }
    
    return this.teacher.location || 'Available Online';
  }

  closeModal(): void {
    this.close.emit();
  }

  contactTeacher(): void {
    if (this.teacher) {
      this.contact.emit(this.teacher);
    }
  }

  onBackgroundClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }

  getTeacherData() {
    return this.teacherData;
  }

  // Helper method to format subjects list
  getSubjectsList(): string[] {
    if (this.teacherData?.specializations && Array.isArray(this.teacherData.specializations)) {
      return this.teacherData.specializations;
    }
    return [this.teacher?.subject || 'General'];
  }

  // Helper method to check if teacher has complete profile
  hasCompleteProfile(): boolean {
    return !!(this.teacher?.aboutMe || this.teacher?.bio) && 
           !!(this.teacher?.qualification || this.teacher?.education) &&
           !!(this.teacher?.phone);
  }
}