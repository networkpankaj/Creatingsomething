import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router) {}

  navigateToSignIn(): void {
    console.log('Navigating to sign-in...');
    this.router.navigate(['/auth/sign-in']).then(
      (success) => console.log('Navigation success:', success),
      (error) => console.log('Navigation error:', error)
    );
  }

  navigateToParentRegistration(): void {
    console.log('Navigating to parent registration...');
    this.router.navigate(['/auth/parent-registration']).then(
      (success) => console.log('Parent registration navigation success:', success),
      (error) => console.error('Parent registration navigation error:', error)
    );
  }

  navigateToTeacherRegistration(): void {
    console.log('Navigating to teacher registration...');
    this.router.navigate(['/auth/teacher-registration']).then(
      (success) => console.log('Teacher registration navigation success:', success),
      (error) => console.error('Teacher registration navigation error:', error)
    );
  }
}