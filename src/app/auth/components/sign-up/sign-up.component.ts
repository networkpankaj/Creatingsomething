import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private router: Router) {}

  navigateToSignIn(): void {
    console.log('Current URL:', this.router.url);
    console.log('Attempting to navigate to sign-in...');
    this.router.navigate(['/sign-in']).then(
      (success) => console.log('Navigation success:', success),
      (error) => console.log('Navigation error:', error)
    );
  }

  navigateToParentRegistration(): void {
    this.router.navigate(['/parent-registration']);
  }

  navigateToTeacherRegistration(): void {
    this.router.navigate(['/teacher-registration']);
  }
}