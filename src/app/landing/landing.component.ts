import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PwaService } from '../auth/services/pwa.service';
import { computerFormConfig } from '../services/forms/computer-form.config';
import { fitnessFormConfig } from '../services/forms/fitness-form.config';
import { phoneRepairFormConfig } from '../services/forms/phone-repair-form.config';
import { spaFormConfig } from '../services/forms/spa-form.config';
import { yogaFormConfig } from '../services/forms/yoga-form.config';
import { ServiceModalComponent } from '../services/components/service-modal/service-modal';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ServiceModalComponent,
    RouterModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  showInstallButton = false;
  isInstalled = false;

  // Contact form data
  contactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    organization: '',
    message: '',
    newsletter: false
  };

  // Mobile menu state
  isMobileMenuOpen = false;

  features = [
    { key: 'computer', icon: '💻', title: 'Computer Services', description: 'Professional computer repair...', buttonText: 'Get Tech Help' },
    { key: 'fitness', icon: '🏋️‍♂️', title: 'Personal Trainer', description: 'Certified personal trainers...', buttonText: 'Get Trainer' },
    { key: 'phone-repair', icon: '📱', title: 'Phone Repair', description: 'Quick and reliable mobile phone repair...', buttonText: 'Repair Phone' },
    { key: 'spa', icon: '💆‍♀️', title: 'Spa & Massage', description: 'Relaxing spa treatments...', buttonText: 'Book Spa' },
    { key: 'yoga', icon: '🧘‍♀️', title: 'Yoga Instructor', description: 'Experienced yoga instructors...', buttonText: 'Book Yoga' },
    // ...add other features
  ];

  formConfigs: any = {
    computer: computerFormConfig,
    fitness: fitnessFormConfig,
    'phone-repair': phoneRepairFormConfig,
    spa: spaFormConfig,
    yoga: yogaFormConfig,
    // ...add other configs
  };

  showFormModal = false;
  selectedFormConfig: any = null;
  selectedFeatureTitle: string = '';

  // Service modal state
  // Service modal state
  showServiceModal = false;
  selectedService: any = null;
  constructor(
    private router: Router,
    private pwaService: PwaService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.checkPwaStatus();
  }

  private checkPwaStatus() {
    // Check if PWA is already installed
    this.isInstalled = this.pwaService.isInstalled();
    
    if (!this.isInstalled) {
      // Check if install prompt is available
      setTimeout(() => {
        this.showInstallButton = this.pwaService.canInstall() || this.isMobileDevice();
      }, 2000);
    }
  }

  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  async installPwa() {
    const installed = await this.pwaService.installPwa();
    if (installed) {
      this.showInstallButton = false;
      this.isInstalled = true;
      console.log('PWA installed successfully');
    }
  }

  // Navigation methods
  navigateToSignIn(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['/auth/sign-up']);
  }

  // Mobile menu toggle
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('nav-open');
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-menu') && !target.closest('.nav-toggle')) {
      this.closeMobileMenu();
    }
  }

  // Form Submission
  onSubmitContactForm() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.contactFormData);
      this.showSuccessMessage();
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.contactFormData.firstName &&
      this.contactFormData.lastName &&
      this.contactFormData.email &&
      this.contactFormData.subject &&
      this.contactFormData.message
    );
  }

  private showSuccessMessage() {
    alert('Thank you! Your message has been sent successfully.');
  }

  private resetForm() {
    this.contactFormData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      organization: '',
      message: '',
      newsletter: false
    };
  }

  // Feature card click handler
  onFeatureClick(serviceType: string): void {
    console.log(`Service clicked: ${serviceType}`);
    
    // You can add routing logic here later
    switch (serviceType) {
      // Education Services
      case 'teacher':
        console.log('Navigate to Teacher Services');
        // this.router.navigate(['/services/teacher']);
        break;
      case 'parent':
        console.log('Navigate to Parent Support');
        // this.router.navigate(['/services/parent']);
        break;
      
      // Home Services
      case 'ac-cleaning':
        console.log('Navigate to AC Cleaning');
        // this.router.navigate(['/services/ac-cleaning']);
        break;
      case 'home-cleaning':
        console.log('Navigate to Home Cleaning');
        // this.router.navigate(['/services/home-cleaning']);
        break;
      
      // Technical Services
      case 'plumbing':
        console.log('Navigate to Plumbing Services');
        // this.router.navigate(['/services/plumbing']);
        break;
      case 'electrical':
        console.log('Navigate to Electrical Services');
        // this.router.navigate(['/services/electrical']);
        break;
      
      // Beauty & Wellness
      case 'beauty':
        console.log('Navigate to Beauty Services');
        // this.router.navigate(['/services/beauty']);
        break;
      case 'spa':
        console.log('Navigate to Spa Services');
        // this.router.navigate(['/services/spa']);
        break;
      
      // Tech Services
      case 'phone-repair':
        console.log('Navigate to Phone Repair');
        // this.router.navigate(['/services/phone-repair']);
        break;
      case 'computer':
        console.log('Navigate to Computer Services');
        // this.router.navigate(['/services/computer']);
        break;
      
      // Fitness & Health
      case 'fitness':
        console.log('Navigate to Personal Trainer');
        // this.router.navigate(['/services/fitness']);
        break;
      case 'yoga':
        console.log('Navigate to Yoga Instructor');
        // this.router.navigate(['/services/yoga']);
        break;
      
      default:
        console.log('Unknown service');
    }
  }

  openFeatureForm(featureKey: string) {
  console.log('Opening form for:', featureKey);
  this.selectedService = {
    config: this.formConfigs[featureKey],
    title: this.features.find(f => f.key === featureKey)?.title || ''
  };
  this.showServiceModal = true;
}

  closeFormModal() {
    this.showFormModal = false;
    this.selectedFormConfig = null;
  }

  // Service modal methods
  openServiceModal(serviceId: string) {
    // You can map serviceId to icon/description as needed
    this.selectedService = {
      serviceId,
      serviceName: '', // or lookup name
      serviceIcon: '', // or lookup icon
      serviceDescription: '' // or lookup description
    };
    this.showServiceModal = true;
  }

  closeServiceModal() {
    this.showServiceModal = false;
    this.selectedService = null;
  }

  ngOnDestroy(): void {
    // Clean up body class when component is destroyed
    document.body.classList.remove('nav-open');
  }
}
