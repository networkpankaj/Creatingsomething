import { Injectable } from '@angular/core';

export interface RegisteredParent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  profilePhoto: File | null;
  students: {
    name: string;
    grade: string;
    age: number | null;
    subjects: string[];
    challenges: string;
  }[];
  subjectNeeds: string[];
  additionalRequirements: string;
  preferredSchedule: { [key: string]: string };
  registrationDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly PARENTS_KEY = 'registered_parents';

  constructor() {}

  // Save parent registration data
  saveParentRegistration(parentData: RegisteredParent): void {
    try {
      const existingParents = this.getRegisteredParents();
      parentData.id = this.generateId();
      parentData.registrationDate = new Date().toISOString();
      
      existingParents.push(parentData);
      localStorage.setItem(this.PARENTS_KEY, JSON.stringify(existingParents));
      
      console.log('Parent registration saved:', parentData);
    } catch (error) {
      console.error('Error saving parent registration:', error);
    }
  }

  // Get all registered parents
  getRegisteredParents(): RegisteredParent[] {
    try {
      const parents = localStorage.getItem(this.PARENTS_KEY);
      return parents ? JSON.parse(parents) : [];
    } catch (error) {
      console.error('Error getting registered parents:', error);
      return [];
    }
  }

  // Convert registered parent to parent profile format
  convertToParentProfile(registeredParent: RegisteredParent): any {
    const initials = `${registeredParent.firstName.charAt(0)}${registeredParent.lastName.charAt(0)}`.toUpperCase();
    
    // Generate random rating and color for demo
    const rating = (4.0 + Math.random() * 1.0);
    const colors = ['#667eea', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6', '#06b6d4', '#ec4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Determine priority based on number of subjects and students
    let priority: 'High Priority' | 'Medium Priority' | 'Low Priority' = 'Medium Priority';
    if (registeredParent.subjectNeeds.length >= 3 || registeredParent.students.length >= 2) {
      priority = 'High Priority';
    } else if (registeredParent.subjectNeeds.length <= 1) {
      priority = 'Low Priority';
    }

    return {
      id: registeredParent.id,
      firstName: registeredParent.firstName,
      lastName: registeredParent.lastName,
      email: registeredParent.email,
      phone: registeredParent.phone,
      initials: initials,
      location: registeredParent.location,
      rating: Math.round(rating * 10) / 10,
      totalRatings: Math.floor(Math.random() * 10) + 1,
      subjectNeeds: registeredParent.subjectNeeds,
      students: registeredParent.students.map(student => ({
        name: student.name,
        grade: student.grade,
        age: student.age,
        strengths: student.subjects, // This comes from registration
        challenges: student.challenges ? [student.challenges] : []
      })),
      priority: priority,
      color: color,
      additionalRequirements: registeredParent.additionalRequirements,
      preferredSchedule: registeredParent.preferredSchedule,
      registrationDate: registeredParent.registrationDate,
      profilePhoto: registeredParent.profilePhoto,
      // Remove fake teacher feedback since we want real data only
      previousTeacherFeedback: []
    };
  }

  // Get parent by ID
  getParentById(id: string): RegisteredParent | null {
    const parents = this.getRegisteredParents();
    return parents.find(parent => parent.id === id) || null;
  }

  // Update parent data
  updateParent(id: string, updatedData: Partial<RegisteredParent>): boolean {
    try {
      const parents = this.getRegisteredParents();
      const index = parents.findIndex(parent => parent.id === id);
      
      if (index !== -1) {
        parents[index] = { ...parents[index], ...updatedData };
        localStorage.setItem(this.PARENTS_KEY, JSON.stringify(parents));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating parent:', error);
      return false;
    }
  }

  // Delete parent
  deleteParent(id: string): boolean {
    try {
      const parents = this.getRegisteredParents();
      const filteredParents = parents.filter(parent => parent.id !== id);
      
      localStorage.setItem(this.PARENTS_KEY, JSON.stringify(filteredParents));
      return true;
    } catch (error) {
      console.error('Error deleting parent:', error);
      return false;
    }
  }

  // Clear all data (for testing)
  clearAllParents(): void {
    localStorage.removeItem(this.PARENTS_KEY);
    console.log('All parent data cleared from localStorage');
  }

  // Get total count
  getParentsCount(): number {
    return this.getRegisteredParents().length;
  }

  // Search parents
  searchParents(searchTerm: string): RegisteredParent[] {
    const parents = this.getRegisteredParents();
    const term = searchTerm.toLowerCase();
    
    return parents.filter(parent => 
      parent.firstName.toLowerCase().includes(term) ||
      parent.lastName.toLowerCase().includes(term) ||
      parent.email.toLowerCase().includes(term) ||
      parent.location.toLowerCase().includes(term)
    );
  }

  // Filter by location
  getParentsByLocation(location: string): RegisteredParent[] {
    const parents = this.getRegisteredParents();
    return parents.filter(parent => parent.location === location);
  }

  // Filter by subject needs
  getParentsBySubject(subject: string): RegisteredParent[] {
    const parents = this.getRegisteredParents();
    return parents.filter(parent => parent.subjectNeeds.includes(subject));
  }

  // Check if localStorage is available
  isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }

  // Export data (for backup)
  exportData(): string {
    const parents = this.getRegisteredParents();
    return JSON.stringify(parents, null, 2);
  }

  // Import data (for restore)
  importData(jsonData: string): boolean {
    try {
      const parents = JSON.parse(jsonData);
      localStorage.setItem(this.PARENTS_KEY, JSON.stringify(parents));
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Generate unique ID
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}