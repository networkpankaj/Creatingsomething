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

export interface RegisteredTeacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string; // Primary subject
  subjects: string[]; // All subjects they can teach
  experience: number;
  education: string;
  classes: string[]; // Classes/levels they teach
  location: string;
  profilePhoto: File | null;
  bio: string;
  availableSchedule: { [key: string]: string };
  hourlyRate: number;
  registrationDate: string;
}

// Union type for current user
export type CurrentUser = RegisteredParent | RegisteredTeacher;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly PARENTS_KEY = 'registered_parents';
  private readonly TEACHERS_KEY = 'registered_teachers';
  private readonly CURRENT_USER_KEY = 'currentUser';
  private readonly CURRENT_TEACHER_KEY = 'currentTeacher';

  constructor() {}

  // Helper method to check if user is a teacher
  private isTeacher(user: any): user is RegisteredTeacher {
    return user && 'subject' in user && 'experience' in user;
  }

  // Helper method to check if user is a parent
  private isParent(user: any): user is RegisteredParent {
    return user && 'students' in user && 'subjectNeeds' in user;
  }

  // Save parent registration data
  saveParentRegistration(parentData: RegisteredParent): string {
    const id = this.generateId();
    const parentWithId = { ...parentData, id, registrationDate: new Date().toISOString() };
    
    const existingParents = this.getRegisteredParents();
    existingParents.push(parentWithId);
    
    localStorage.setItem(this.PARENTS_KEY, JSON.stringify(existingParents));
    
    // Set as current logged-in user
    this.setCurrentUser(parentWithId);
    
    console.log('Parent registration saved with ID:', id);
    return id;
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
    
    // Ensure subjectNeeds is always an array
    const subjectNeeds = registeredParent.subjectNeeds || [];
    const students = registeredParent.students || [];
    
    // Determine priority based on number of subjects and students
    let priority: 'High Priority' | 'Medium Priority' | 'Low Priority' = 'Medium Priority';
    if (subjectNeeds.length >= 3 || students.length >= 2) {
      priority = 'High Priority';
    } else if (subjectNeeds.length <= 1) {
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
      subjectNeeds: subjectNeeds,
      students: students.map(student => ({
        name: student.name,
        grade: student.grade,
        age: student.age,
        strengths: student.subjects || [],
        challenges: student.challenges 
          ? (Array.isArray(student.challenges) 
            ? student.challenges 
            : [student.challenges]) 
          : []
      })),
      priority: priority,
      color: color,
      additionalRequirements: registeredParent.additionalRequirements,
      preferredSchedule: registeredParent.preferredSchedule,
      registrationDate: registeredParent.registrationDate,
      profilePhoto: registeredParent.profilePhoto,
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

  // Save teacher registration data
  saveTeacherRegistration(teacherData: RegisteredTeacher): void {
    try {
      const existingTeachers = this.getRegisteredTeachers();
      teacherData.id = this.generateId();
      teacherData.registrationDate = new Date().toISOString();
      
      existingTeachers.push(teacherData);
      localStorage.setItem(this.TEACHERS_KEY, JSON.stringify(existingTeachers));
      
      // Set as current teacher
      this.setCurrentTeacher(teacherData);
      
      console.log('Teacher registration saved:', teacherData);
    } catch (error) {
      console.error('Error saving teacher registration:', error);
    }
  }

  // Get all registered teachers
  getRegisteredTeachers(): RegisteredTeacher[] {
    try {
      const teachers = localStorage.getItem(this.TEACHERS_KEY);
      return teachers ? JSON.parse(teachers) : [];
    } catch (error) {
      console.error('Error getting registered teachers:', error);
      return [];
    }
  }

  // Convert registered teacher to teacher profile format
  convertToTeacherProfile(registeredTeacher: RegisteredTeacher): any {
    const initials = `${registeredTeacher.firstName.charAt(0)}${registeredTeacher.lastName.charAt(0)}`.toUpperCase();
    
    // Generate random rating for demo (in real app, this would come from reviews)
    const rating = (4.0 + Math.random() * 1.0);
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#ec4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Determine if top rated (experience > 10 years or rating > 4.7)
    const isTopRated = registeredTeacher.experience >= 10 || rating >= 4.7;

    return {
      id: registeredTeacher.id,
      firstName: registeredTeacher.firstName,
      lastName: registeredTeacher.lastName,
      email: registeredTeacher.email,
      phone: registeredTeacher.phone,
      initials: initials,
      subject: registeredTeacher.subject,
      subjects: registeredTeacher.subjects,
      rating: Math.round(rating * 10) / 10,
      totalRatings: Math.floor(Math.random() * 20) + 5,
      experience: registeredTeacher.experience,
      education: registeredTeacher.education,
      classes: registeredTeacher.classes,
      location: registeredTeacher.location,
      bio: registeredTeacher.bio,
      availableSchedule: registeredTeacher.availableSchedule,
      hourlyRate: registeredTeacher.hourlyRate,
      isTopRated: isTopRated,
      color: color,
      registrationDate: registeredTeacher.registrationDate
    };
  }

  // Get teachers by subject
  getTeachersBySubject(subject: string): RegisteredTeacher[] {
    const teachers = this.getRegisteredTeachers();
    return teachers.filter(teacher => 
      teacher.subject === subject || teacher.subjects.includes(subject)
    );
  }

  // Clear all teacher data
  clearAllTeachers(): void {
    localStorage.removeItem(this.TEACHERS_KEY);
    console.log('All teacher data cleared from localStorage');
  }

  // Get teachers count
  getTeachersCount(): number {
    return this.getRegisteredTeachers().length;
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

  // Get current logged-in user (could be parent or teacher)
  getCurrentUser(): CurrentUser | null {
    try {
      const currentUserStr = localStorage.getItem(this.CURRENT_USER_KEY);
      if (currentUserStr) {
        return JSON.parse(currentUserStr);
      }
      
      // Fallback: get most recent parent
      const parents = this.getRegisteredParents();
      return parents.length > 0 ? parents[parents.length - 1] : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Set current user (when logging in)
  setCurrentUser(user: CurrentUser): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  // Clear current user (when logging out)
  clearCurrentUser(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    localStorage.removeItem(this.CURRENT_TEACHER_KEY);
  }

  // Get current teacher specifically
  getCurrentTeacher(): RegisteredTeacher | null {
    try {
      // First check if there's a specific current teacher
      const currentTeacherStr = localStorage.getItem(this.CURRENT_TEACHER_KEY);
      if (currentTeacherStr) {
        return JSON.parse(currentTeacherStr);
      }
      
      // Check if current user is a teacher
      const currentUser = this.getCurrentUser();
      if (currentUser && this.isTeacher(currentUser)) {
        return currentUser;
      }
      
      // Fallback: get most recent teacher
      const teachers = this.getRegisteredTeachers();
      return teachers.length > 0 ? teachers[teachers.length - 1] : null;
    } catch (error) {
      console.error('Error getting current teacher:', error);
      return null;
    }
  }

  // Set current teacher
  setCurrentTeacher(teacher: RegisteredTeacher): void {
    localStorage.setItem(this.CURRENT_TEACHER_KEY, JSON.stringify(teacher));
    // Also set as current user
    this.setCurrentUser(teacher);
  }

  // Clear current teacher
  clearCurrentTeacher(): void {
    localStorage.removeItem(this.CURRENT_TEACHER_KEY);
    // Also clear current user if it's a teacher
    const currentUser = this.getCurrentUser();
    if (currentUser && this.isTeacher(currentUser)) {
      this.clearCurrentUser();
    }
  }

  // Get current parent specifically
  getCurrentParent(): RegisteredParent | null {
    try {
      const currentUser = this.getCurrentUser();
      if (currentUser && this.isParent(currentUser)) {
        return currentUser;
      }
      
      // Fallback: get most recent parent
      const parents = this.getRegisteredParents();
      return parents.length > 0 ? parents[parents.length - 1] : null;
    } catch (error) {
      console.error('Error getting current parent:', error);
      return null;
    }
  }

  // Check if current user is a teacher
  isCurrentUserTeacher(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser ? this.isTeacher(currentUser) : false;
  }

  // Check if current user is a parent
  isCurrentUserParent(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser ? this.isParent(currentUser) : false;
  }

  // Generate unique ID
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // Add these methods for profile view tracking
  trackProfileView(teacherId: string, parentId: string): void {
    const views = this.getProfileViews();
    const viewKey = `${teacherId}-${parentId}`;
    
    if (!views[viewKey]) {
      views[viewKey] = {
        teacherId,
        parentId,
        viewedAt: new Date().toISOString(),
        viewCount: 1
      };
    } else {
      views[viewKey].viewCount++;
      views[viewKey].lastViewedAt = new Date().toISOString();
    }
    
    localStorage.setItem('profileViews', JSON.stringify(views));
  }

  getProfileViews(): any {
    const views = localStorage.getItem('profileViews');
    return views ? JSON.parse(views) : {};
  }

  getParentsWhoViewedTeacher(teacherId: string): string[] {
    const views = this.getProfileViews();
    const parentIds: string[] = [];
    
    Object.keys(views).forEach(key => {
      if (views[key].teacherId === teacherId) {
        parentIds.push(views[key].parentId);
      }
    });
    
    return parentIds;
  }

  getInterestedParentsForTeacher(teacherId: string): RegisteredParent[] {
    const parentIds = this.getParentsWhoViewedTeacher(teacherId);
    const allParents = this.getRegisteredParents();
    
    return allParents.filter(parent => parentIds.includes(parent.id));
  }

  // Add this new method that returns converted Parent profiles
  getInterestedParentProfilesForTeacher(teacherId: string): any[] {
    const parentIds = this.getParentsWhoViewedTeacher(teacherId);
    const allParents = this.getRegisteredParents();
    
    // Filter interested parents and convert to Parent profiles
    const interestedParents = allParents.filter(parent => parentIds.includes(parent.id));
    return interestedParents.map(parent => this.convertToParentProfile(parent));
  }
}