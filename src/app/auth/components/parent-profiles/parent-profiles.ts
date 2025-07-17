import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ParentProfileModalComponent } from '../parent-profile-modal/parent-profile-modal';
import { LocalStorageService, CurrentUser } from '../../services/local-storage.service';

// Add interface for Teacher
interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  // Add other teacher properties as needed
}

interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  location: string;
  rating: number;
  totalRatings: number;
  subjectNeeds: string[];
  students: Student[];
  priority: 'High Priority' | 'Medium Priority' | 'Low Priority';
  color: string;
  additionalRequirements?: string;
  preferredSchedule?: { [key: string]: string };
  previousTeacherFeedback?: { teacherName: string; rating: number; comment: string }[];
}

interface Student {
  name: string;
  grade: string;
  strengths?: string[];
  challenges?: string[];
}

@Component({
  selector: 'app-parent-profiles',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentProfileModalComponent],
  templateUrl: './parent-profiles.html',
  styleUrl: './parent-profiles.css'
})
export class ParentProfilesComponent implements OnInit {
  searchTerm: string = '';
  selectedSubjects: string[] = ['All'];
  selectedLocations: string[] = ['All Locations'];
  selectedParent: Parent | null = null;
  showModal: boolean = false;

  // User profile properties - Updated type
  currentUser: CurrentUser | null = null;
  showUserDropdown: boolean = false;

  subjects: string[] = [
    'All',
    'Mathematics',
    'Science',
    'English',
    'History',
    'Geography',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Art',
    'Music'
  ];

  locations: string[] = [
    'All Locations',
    'North District',
    'South District',
    'East District',
    'West District'
  ];

  parents: Parent[] = [];
  showOnlyInterestedParents: boolean = false;
  private _filteredParents: Parent[] = [];

  constructor(
    public localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadParents();
    this.loadCurrentUser();
    this.checkIfTeacherAndLoadInterestedParents();
  }

  checkIfTeacherAndLoadInterestedParents(): void {
    // If current user is a teacher, by default show only interested parents
    if (this.currentUser && this.localStorageService.isCurrentUserTeacher()) {
      // For teachers, default to showing only interested parents
      this.showOnlyInterestedParents = true;
      this.loadInterestedParents();
    }
  }

  loadInterestedParents(): void {
    if (this.currentUser && this.localStorageService.isCurrentUserTeacher()) {
      // Use the new method that returns converted profiles
      const interestedParents = this.localStorageService.getInterestedParentProfilesForTeacher(this.currentUser.id);
      console.log('Parents interested in this teacher:', interestedParents);
      
      // Update the base parents array based on filter
      this._filteredParents = interestedParents;
    }
  }

  toggleInterestedParentsFilter(): void {
    this.showOnlyInterestedParents = !this.showOnlyInterestedParents;
    
    if (this.showOnlyInterestedParents) {
      // Show only interested parents
      this.loadInterestedParents();
    } else {
      // Show all parents
      this._filteredParents = this.parents;
    }
  }

  loadCurrentUser(): void {
    // Try to load current teacher first, then current user
    this.currentUser = this.localStorageService.getCurrentTeacher() || 
                     this.localStorageService.getCurrentUser();
    
    console.log('Current user loaded:', this.currentUser);
  }

  // User profile methods
  getTeacherInitials(): string {
    if (!this.currentUser) return 'U';
    return `${this.currentUser.firstName.charAt(0)}${this.currentUser.lastName.charAt(0)}`.toUpperCase();
  }

  getTeacherName(): string {
    if (!this.currentUser) return 'User';
    return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
  }

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
  }

  closeUserDropdown(): void {
    this.showUserDropdown = false;
  }

  viewTeacherProfile(): void {
    this.closeUserDropdown();
    
    if (!this.currentUser) {
      alert('No user logged in');
      return;
    }

    // Check if current user is a teacher
    const isTeacher = this.localStorageService.isCurrentUserTeacher();
    const userType = isTeacher ? 'Teacher' : 'User';
    
    const profileInfo = `${userType} Profile:

Name: ${this.currentUser.firstName} ${this.currentUser.lastName}
Email: ${this.currentUser.email}
${isTeacher && 'subject' in this.currentUser ? `Subject: ${this.currentUser.subject}` : ''}
${this.currentUser.phone ? `Phone: ${this.currentUser.phone}` : ''}
${this.currentUser.location ? `Location: ${this.currentUser.location}` : ''}

(Complete profile functionality would be implemented here)`;

    alert(profileInfo);
  }

  viewSettings(): void {
    this.closeUserDropdown();
    alert('Settings functionality would be implemented here');
  }

  signOut(): void {
    // Clear both teacher and user sessions
    this.localStorageService.clearCurrentTeacher();
    this.localStorageService.clearCurrentUser();
    this.currentUser = null;
    this.showUserDropdown = false;
    
    alert('You have been signed out successfully!');
    this.router.navigate(['/auth/sign-in']);
  }

  goToSignIn(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  loadParents(): void {
    // Get ONLY the registered parents from localStorage (no sample data)
    const registeredParents = this.localStorageService.getRegisteredParents();
    
    this.parents = registeredParents.map(parent => 
      this.localStorageService.convertToParentProfile(parent)
    );
    
    // For teachers, start with empty array
    if (this.currentUser && this.localStorageService.isCurrentUserTeacher()) {
      this._filteredParents = [];
    } else {
      // For parents/students, show all parents
      this._filteredParents = this.parents;
    }
    
    console.log('Loaded parent profiles from registration:', this.parents);
    
    // If no parents found, show message
    if (this.parents.length === 0) {
      console.log('No registered parents found. Complete a registration first.');
    }
  }

  // Add method to get interested parents count for display
  getInterestedParentsCount(): number {
    if (this.currentUser && this.localStorageService.isCurrentUserTeacher()) {
      return this.localStorageService.getInterestedParentProfilesForTeacher(this.currentUser.id).length;
    }
    return 0;
  }

  // Add method to check if parent viewed profile
  hasParentViewedProfile(parentId: string): boolean {
    if (!this.currentUser || !this.localStorageService.isCurrentUserTeacher()) {
      return false;
    }
    
    const interestedParentIds = this.localStorageService.getParentsWhoViewedTeacher(this.currentUser.id);
    return interestedParentIds.includes(parentId);
  }

  // Refresh data (useful for testing)
  refreshData(): void {
    this.loadParents();
  }

  // Clear all data (for testing purposes)
  clearAllData(): void {
    if (confirm('Are you sure you want to clear all parent data? This cannot be undone.')) {
      this.localStorageService.clearAllParents();
      this.parents = [];
      alert('All parent data cleared!');
    }
  }

  // Export data
  exportData(): void {
    const data = this.localStorageService.exportData();
    console.log('Exported data:', data);
    
    // Create downloadable file
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'parent-data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Get statistics
  getStats(): void {
    const total = this.localStorageService.getParentsCount();
    const totalSubjects = new Set();
    this.parents.forEach(parent => {
      parent.subjectNeeds.forEach(subject => totalSubjects.add(subject));
    });
    
    const message = `
Statistics:
• Total registered parents: ${total}
• Total unique subjects: ${totalSubjects.size}
• High priority parents: ${this.parents.filter(p => p.priority === 'High Priority').length}
• Medium priority parents: ${this.parents.filter(p => p.priority === 'Medium Priority').length}
• Low priority parents: ${this.parents.filter(p => p.priority === 'Low Priority').length}
    `;
    
    alert(message);
  }

  toggleSubject(subject: string): void {
    if (subject === 'All') {
      this.selectedSubjects = ['All'];
    } else {
      const index = this.selectedSubjects.indexOf('All');
      if (index > -1) {
        this.selectedSubjects.splice(index, 1);
      }
      
      const subjectIndex = this.selectedSubjects.indexOf(subject);
      if (subjectIndex > -1) {
        this.selectedSubjects.splice(subjectIndex, 1);
      } else {
        this.selectedSubjects.push(subject);
      }
      
      if (this.selectedSubjects.length === 0) {
        this.selectedSubjects = ['All'];
      }
    }
  }

  toggleLocation(location: string): void {
    if (location === 'All Locations') {
      this.selectedLocations = ['All Locations'];
    } else {
      const index = this.selectedLocations.indexOf('All Locations');
      if (index > -1) {
        this.selectedLocations.splice(index, 1);
      }
      
      const locationIndex = this.selectedLocations.indexOf(location);
      if (locationIndex > -1) {
        this.selectedLocations.splice(locationIndex, 1);
      } else {
        this.selectedLocations.push(location);
      }
      
      if (this.selectedLocations.length === 0) {
        this.selectedLocations = ['All Locations'];
      }
    }
  }

  onSearchChange(): void {
    // Optional: Add debouncing here if needed
  }

  isSubjectSelected(subject: string): boolean {
    return this.selectedSubjects.includes(subject);
  }

  isLocationSelected(location: string): boolean {
    return this.selectedLocations.includes(location);
  }

  // Update the filteredParents getter to handle both search filters and interested parents filter
  get filteredParents(): Parent[] {
    // If user is a teacher and showing only interested parents is enabled
    if (this.currentUser && this.localStorageService.isCurrentUserTeacher() && this.showOnlyInterestedParents) {
      // Use the interested parents array (which might be empty for new teachers)
      return this._filteredParents.filter(parent => {
        const matchesSearch = this.searchTerm === '' || 
          parent.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          parent.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          parent.location.toLowerCase().includes(this.searchTerm.toLowerCase());

        const matchesSubject = this.selectedSubjects.includes('All') ||
          parent.subjectNeeds.some(subject => this.selectedSubjects.includes(subject));

        const matchesLocation = this.selectedLocations.includes('All Locations') ||
          this.selectedLocations.includes(parent.location);

        return matchesSearch && matchesSubject && matchesLocation;
      });
    } else {
      // For non-teachers or when showing all parents
      let baseParents = this.showOnlyInterestedParents ? this._filteredParents : this.parents;
      
      return baseParents.filter(parent => {
        const matchesSearch = this.searchTerm === '' || 
          parent.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          parent.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          parent.location.toLowerCase().includes(this.searchTerm.toLowerCase());

        const matchesSubject = this.selectedSubjects.includes('All') ||
          parent.subjectNeeds.some(subject => this.selectedSubjects.includes(subject));

        const matchesLocation = this.selectedLocations.includes('All Locations') ||
          this.selectedLocations.includes(parent.location);

        return matchesSearch && matchesSubject && matchesLocation;
      });
    }
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High Priority': return 'high-priority';
      case 'Medium Priority': return 'medium-priority';
      case 'Low Priority': return 'low-priority';
      default: return '';
    }
  }

  viewProfile(parentId: string): void {
    console.log('viewProfile called with ID:', parentId);
    
    // Find the parent by ID
    this.selectedParent = this.parents.find(parent => parent.id === parentId) || null;
    console.log('Selected parent:', this.selectedParent);
    
    if (this.selectedParent) {
      this.showModal = true;
      console.log('Modal should show:', this.showModal);
    } else {
      console.error('Parent not found with ID:', parentId);
      alert('Parent profile not found');
    }
  }

  closeModal(): void {
    console.log('Closing modal');
    this.showModal = false;
    this.selectedParent = null;
  }

  // Add method to handle contact from modal
  contactParent(parent: Parent): void {
    if (!this.currentUser) {
      alert('Please sign in to contact parents.');
      this.goToSignIn();
      return;
    }

    const message = `Hi ${parent.firstName},

I'm ${this.currentUser.firstName} ${this.currentUser.lastName}, a teacher interested in helping with your tutoring needs.

Your Requirements:
📚 Subjects: ${parent.subjectNeeds.join(', ')}
👥 Children: ${parent.students.map(s => `${s.name} (${s.grade})`).join(', ')}
📍 Location: ${parent.location}

My Details:
📧 Email: ${this.currentUser.email}
📞 Phone: ${this.currentUser.phone || 'Available on request'}
📍 Location: ${this.currentUser.location || 'Will discuss'}

Please let me know if you'd like to discuss further.

Best regards,
${this.currentUser.firstName} ${this.currentUser.lastName}`;

    alert(`Contact Message Prepared:

${message}

(In a real app, this would send an email or message to the parent)`);
  }
}
