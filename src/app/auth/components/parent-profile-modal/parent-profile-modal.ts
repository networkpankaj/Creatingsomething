import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-profile-modal.html',
  styleUrl: './parent-profile-modal.css'
})
export class ParentProfileModalComponent {
  @Input() show: boolean = false;
  @Input() parent: any = null;
  
  @Output() close = new EventEmitter<void>();
  @Output() contact = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }

  contactParent(): void {
    if (this.parent) {
      this.contact.emit(this.parent);
    }
  }

  onBackgroundClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return 'priority-urgent';
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  }

  // Get full address from parent registration data
  getFullAddress(): string {
    if (!this.parent) return 'Location not specified';
    
    // Check for registration address fields
    const addressParts = [
      this.parent.address,
      this.parent.city,
      this.parent.state,
      this.parent.pincode
    ].filter(part => part && part.trim() !== '');
    
    if (addressParts.length > 0) {
      return addressParts.join(', ');
    }
    
    // Fallback to location field
    return this.parent.location || 'Location not specified';
  }
}