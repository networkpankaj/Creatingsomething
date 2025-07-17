import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFields } from '../../../shared/components/form-fields/form-fields';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule, FormFields],
  templateUrl: './service-modal.html',
  styleUrl: './service-modal.css'
})
export class ServiceModalComponent {
  @Input() isOpen: boolean = false;
  @Input() serviceData: any = null;
  @Output() modalClose = new EventEmitter<void>();
}
