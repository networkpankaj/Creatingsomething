import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormFields } from '../../../shared/components/form-fields/form-fields';
import { computerFormConfig } from '../../forms/computer-form.config';
import { fitnessFormConfig } from '../../forms/fitness-form.config';
import { phoneRepairFormConfig } from '../../forms/phone-repair-form.config';
import { spaFormConfig } from '../../forms/spa-form.config';
import { yogaFormConfig } from '../../forms/yoga-form.config';

@Component({
  selector: 'app-service-form-page',
  standalone: true,
  imports: [CommonModule, FormFields],
  template: `
    <div class="service-form-page">
      <h2>{{ title }}</h2>
      <div class="service-meta">
        <span class="service-icon">{{ serviceIcon }}</span>
        <p class="service-description">{{ description }}</p>
      </div>
      <form *ngIf="formConfig">
        <ng-container *ngFor="let section of formConfig.consumer">
          <h4>{{ section.title }}</h4>
          <ng-container *ngFor="let field of section.fields">
            <app-form-fields
              [field]="field"
              [(value)]="field.value"
              [isInvalid]="false">
            </app-form-fields>
          </ng-container>
        </ng-container>
        <button type="submit">Submit</button>
      </form>
    </div>
  `
})
export class ServiceFormPageComponent {
  formConfig: any = null;
  title = '';
  serviceIcon = '';
  description = '';
  step = 1; // You can set this dynamically
  progress = 25; // Example: 25% for step 1, 50% for step 2, etc.

  private formConfigs: any = {
    computer: computerFormConfig,
    fitness: fitnessFormConfig,
    'phone-repair': phoneRepairFormConfig,
    spa: spaFormConfig,
    yoga: yogaFormConfig
  };

  private meta: any = {
    computer: {
      title: 'Computer Services',
      icon: '💻',
      description: 'Professional computer repair and tech support.'
    },
    fitness: {
      title: 'Personal Trainer',
      icon: '🏋️‍♂️',
      description: 'Certified personal trainers for your fitness goals.'
    },
    'phone-repair': {
      title: 'Phone Repair',
      icon: '📱',
      description: 'Quick and reliable mobile phone repair.'
    },
    spa: {
      title: 'Spa & Massage',
      icon: '💆‍♀️',
      description: 'Relaxing spa treatments and massage services.'
    },
    yoga: {
      title: 'Yoga Instructor',
      icon: '🧘‍♀️',
      description: 'Experienced yoga instructors for all levels.'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const key = params.get('serviceKey') || '';
      this.formConfig = this.formConfigs[key];
      this.title = this.meta[key]?.title || '';
      this.serviceIcon = this.meta[key]?.icon || '';
      this.description = this.meta[key]?.description || '';
    });
  }
}
