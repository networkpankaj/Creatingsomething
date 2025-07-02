import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
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
  registrationDate?: string;
}

interface Student {
  name: string;
  grade: string;
  age?: number | null;
  strengths?: string[];
  challenges?: string[];
}

@Component({
  selector: 'app-parent-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-profile-modal.html',
  styleUrl: './parent-profile-modal.css'
})
export class ParentProfileModalComponent {
  @Input() parent: Parent | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // Fix: Use onClose method instead of calling closeModal directly
  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not available';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High Priority':
        return 'priority-high';
      case 'Medium Priority':
        return 'priority-medium';
      case 'Low Priority':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  }

  contactParent(): void {
    if (!this.parent) return;
    
    // You can implement email or call functionality here
    const message = `Contact ${this.parent.firstName} ${this.parent.lastName}:\nEmail: ${this.parent.email || 'Not provided'}\nPhone: ${this.parent.phone || 'Not provided'}`;
    alert(message);
  }

  // Fix: Add proper type checking for schedule values
  getDaysWithSchedule(): { day: string, time: string }[] {
    const dayNames = {
      monday: 'Monday',
      tuesday: 'Tuesday', 
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    };

    const result: { day: string, time: string }[] = [];
    
    if (this.parent?.preferredSchedule) {
      Object.entries(this.parent.preferredSchedule).forEach(([day, time]) => {
        // Fix: Ensure time is a string and has content
        if (time && typeof time === 'string' && time.trim()) {
          result.push({
            day: dayNames[day as keyof typeof dayNames] || day,
            time: time
          });
        }
      });
    }
    
    return result;
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }
}