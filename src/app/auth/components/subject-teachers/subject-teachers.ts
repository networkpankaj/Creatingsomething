import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, RegisteredParent, CurrentUser } from '../../services/local-storage.service';
import { TeacherProfileModalComponent } from '../teacher-profile-modal/teacher-profile-modal';

@Component({
  selector: 'app-subject-teachers',
  standalone: true,
  imports: [CommonModule, FormsModule, TeacherProfileModalComponent],
  templateUrl: './subject-teachers.html',
  styleUrls: ['./subject-teachers.css']
})
export class SubjectTeachersComponent implements OnInit {
  teachers: any[] = [];
  filteredTeachers: any[] = [];
  subjects: string[] = ['All', 'Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Languages'];
  selectedSubject: string = 'All';
  searchTerm: string = '';

  // User profile properties - Updated to handle both types
  currentUser: CurrentUser | null = null; // Changed from RegisteredParent to CurrentUser
  showUserDropdown: boolean = false;

  // Add these properties
  selectedTeacher: any = null;
  showTeacherModal: boolean = false;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loadTeachers();
    this.loadCurrentUser();
  }

  loadTeachers(): void {
    // Get registered teachers from localStorage only
    const registeredTeachers = this.localStorageService.getRegisteredTeachers();
    this.teachers = registeredTeachers.map(teacher => 
      this.localStorageService.convertToTeacherProfile(teacher)
    );

    console.log('Loaded teachers from localStorage:', this.teachers);
    this.filteredTeachers = [...this.teachers];
  }

  loadCurrentUser(): void {
    // Load current user (could be parent or teacher)
    this.currentUser = this.localStorageService.getCurrentUser();
    console.log('Current user loaded:', this.currentUser);
  }

  filterBySubject(subject: string): void {
    this.selectedSubject = subject;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.teachers];

    // Filter by subject
    if (this.selectedSubject !== 'All') {
      filtered = filtered.filter(teacher => 
        teacher.subject === this.selectedSubject || 
        teacher.subjects.includes(this.selectedSubject)
      );
    }

    // Filter by search term
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(teacher =>
        teacher.firstName.toLowerCase().includes(searchLower) ||
        teacher.lastName.toLowerCase().includes(searchLower) ||
        teacher.subject.toLowerCase().includes(searchLower) ||
        teacher.bio.toLowerCase().includes(searchLower)
      );
    }

    this.filteredTeachers = filtered;
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }

  // User profile methods - Updated to handle both types safely
  getUserInitials(): string {
    if (!this.currentUser) return 'U';
    return `${this.currentUser.firstName.charAt(0)}${this.currentUser.lastName.charAt(0)}`.toUpperCase();
  }

  getUserName(): string {
    if (!this.currentUser) return 'User';
    return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
  }

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
  }

  closeUserDropdown(): void {
    this.showUserDropdown = false;
  }

  signOut(): void {
    // Clear user session
    this.localStorageService.clearCurrentUser();
    this.currentUser = null;
    this.showUserDropdown = false;
    
    // Show confirmation
    alert('You have been signed out successfully!');
    
    // Redirect to sign-in page
    this.router.navigate(['/auth/sign-in']);
  }

  // Navigate to parent profiles (parent viewing their profile)
  viewParentProfile(): void {
    this.closeUserDropdown();
    
    if (!this.currentUser) {
      alert('No user logged in');
      return;
    }

    // Check if current user is a parent
    if (this.localStorageService.isCurrentUserParent()) {
      // Safe to cast as parent
      const parent = this.currentUser as RegisteredParent;
      
      const profileInfo = `Parent Profile:

Name: ${parent.firstName} ${parent.lastName}
Email: ${parent.email}
Phone: ${parent.phone || 'Not provided'}
Location: ${parent.location || 'Not provided'}

Children: ${this.getParentChildren(parent)}
Subject Needs: ${this.getParentSubjects(parent)}`;

      alert(profileInfo);
    } else {
      // It's a teacher
      const profileInfo = `Teacher Profile:

Name: ${this.currentUser.firstName} ${this.currentUser.lastName}
Email: ${this.currentUser.email}
Phone: ${this.currentUser.phone || 'Not provided'}
Location: ${this.currentUser.location || 'Not provided'}

(Teacher profile details would be shown here)`;

      alert(profileInfo);
    }
    
    // Uncomment this when you have a proper parent profile page
    // this.router.navigate(['/auth/parent-profiles']);
  }

  // Helper methods - Updated to handle type safety
  getParentChildren(parent: RegisteredParent): string {
    if (!parent.students || parent.students.length === 0) {
      return 'No children added';
    }
    return parent.students.map(student => `${student.name} (${student.grade})`).join(', ');
  }

  getParentSubjects(parent: RegisteredParent): string {
    if (!parent.subjectNeeds || parent.subjectNeeds.length === 0) {
      return 'No subjects specified';
    }
    return parent.subjectNeeds.join(', ');
  }

  // Add these methods
  viewTeacherProfile(teacher: any): void {
    console.log('viewTeacherProfile called with:', teacher);
    this.selectedTeacher = teacher;
    this.showTeacherModal = true;
  }

  closeTeacherModal(): void {
    console.log('Closing teacher modal');
    this.showTeacherModal = false;
    this.selectedTeacher = null;
  }

  contactTeacher(teacher: any): void {
    if (!this.currentUser) {
      alert('Please sign in to contact teachers.');
      this.goToSignIn();
      return;
    }

    const message = `Hi ${teacher.firstName},

I'm ${this.currentUser.firstName} ${this.currentUser.lastName}, and I'm interested in your tutoring services.

Your Details:
📚 Subject: ${teacher.subject}
💰 Rate: $${teacher.hourlyRate}/hour
⭐ Rating: ${teacher.rating}/5

My Details:
📧 Email: ${this.currentUser.email}
📞 Phone: ${this.currentUser.phone || 'Available on request'}

Please let me know your availability for tutoring sessions.

Best regards,
${this.currentUser.firstName} ${this.currentUser.lastName}`;

    alert(`Contact Message Prepared:

${message}

(In a real app, this would send an email or message to the teacher)`);
    
    this.closeTeacherModal();
  }

  // Navigation methods
  becomeTeacher(): void {
    this.router.navigate(['/auth/teacher-registration']);
  }

  goToParentProfiles(): void {
    this.router.navigate(['/auth/parent-profiles']);
  }

  goToSignIn(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  // Clear filters
  clearFilters(): void {
    this.selectedSubject = 'All';
    this.searchTerm = '';
    this.applyFilters();
  }

  // View settings
  viewSettings(): void {
    this.closeUserDropdown();
    alert('Settings functionality would be implemented here');
  }
}