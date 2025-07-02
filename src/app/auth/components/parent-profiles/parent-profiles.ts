import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentProfileModalComponent } from '../parent-profile-modal/parent-profile-modal';
import { LocalStorageService } from '../../services/local-storage.service';

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

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadParentProfiles();
  }

  loadParentProfiles(): void {
    // Get ONLY the registered parents from localStorage (no sample data)
    const registeredParents = this.localStorageService.getRegisteredParents();
    
    this.parents = registeredParents.map(parent => 
      this.localStorageService.convertToParentProfile(parent)
    );
    
    console.log('Loaded parent profiles from registration:', this.parents);
    
    // If no parents found, show message
    if (this.parents.length === 0) {
      console.log('No registered parents found. Complete a registration first.');
    }
  }

  // Refresh data (useful for testing)
  refreshData(): void {
    this.loadParentProfiles(); // Fixed: use the correct method name
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

  isSubjectSelected(subject: string): boolean {
    return this.selectedSubjects.includes(subject);
  }

  isLocationSelected(location: string): boolean {
    return this.selectedLocations.includes(location);
  }

  get filteredParents(): Parent[] {
    return this.parents.filter(parent => {
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
    this.selectedParent = this.parents.find(parent => parent.id === parentId) || null;
    console.log('Selected parent:', this.selectedParent);
    this.showModal = true;
    console.log('Modal should show:', this.showModal);
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedParent = null;
  }

  // Add method to handle empty state
  goToRegistration(): void {
    // Navigate to registration page
    window.location.href = '/auth/parent-registration';
  }

  // Add method to reload data
  reloadData(): void {
    this.loadParentProfiles();
    alert('Data reloaded from localStorage!');
  }
}
