import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  features?: string[];
  popular?: boolean;
  available?: boolean;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.css']
})
export class ServiceCardComponent {
  @Input() serviceData: ServiceCardData = {
    id: '',
    title: '',
    description: '',
    icon: '',
    buttonText: 'Get Service',
    category: '',
    available: true
  };

  @Input() featured: boolean = false;
  @Input() compact: boolean = false;
  @Input() showPrice: boolean = false;
  @Input() showRating: boolean = false;
  @Input() showFeatures: boolean = false;
  @Input() loading: boolean = false;

  @Output() cardClick = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<string>();
  @Output() favoriteClick = new EventEmitter<string>();

  onCardClick(): void {
    if (this.serviceData.available && !this.loading) {
      this.cardClick.emit(this.serviceData.id);
    }
  }

  onButtonClick(event: Event): void {
    event.stopPropagation();
    if (this.serviceData.available && !this.loading) {
      this.buttonClick.emit(this.serviceData.id);
    }
  }

  onFavoriteClick(event: Event): void {
    event.stopPropagation();
    this.favoriteClick.emit(this.serviceData.id);
  }

  getStarArray(): number[] {
    const rating = this.serviceData.rating || 0;
    return Array(5).fill(0).map((_, index) => index < Math.floor(rating) ? 1 : 0);
  }

  getCardClasses(): string {
    let classes = 'service-card';
    
    if (this.featured) classes += ' featured';
    if (this.compact) classes += ' compact';
    if (this.serviceData.popular) classes += ' popular';
    if (!this.serviceData.available) classes += ' unavailable';
    if (this.loading) classes += ' loading';
    
    return classes;
  }

  getCategoryColor(): string {
    const categoryColors: { [key: string]: string } = {
      'education': '#3182ce',
      'home-services': '#38a169',
      'beauty-wellness': '#d69e2e',
      'tech-support': '#805ad5',
      'fitness-health': '#e53e3e',
      'repair-maintenance': '#dd6b20'
    };
    
    return categoryColors[this.serviceData.category] || '#718096';
  }
}
