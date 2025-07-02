import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  async onSubmit(): Promise<void> {
    if (this.email && this.password) {
      this.isLoading = true;
      this.errorMessage = '';
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, accept any valid email/password
        if (this.email && this.password.length >= 6) {
          // Navigate to dashboard or appropriate page
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      } catch (error) {
        this.errorMessage = 'Sign in failed. Please try again.';
      } finally {
        this.isLoading = false;
      }
    }
  }
}