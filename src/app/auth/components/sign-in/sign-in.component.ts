import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Msg91Service } from '../../services/msg91.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit, OnDestroy {
  // Form data
  phoneNumber: string = '';
  otp: string = '';
  
  // UI states
  showOtpInput: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  otpSent: boolean = false;
  
  // Timer for resend OTP
  resendTimer: number = 0;
  resendInterval: any;
  
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private msg91Service: Msg91Service
  ) {}

  ngOnInit(): void {
    console.log('SignInComponent initialized');
  }

  ngOnDestroy(): void {
    if (this.resendInterval) {
      clearInterval(this.resendInterval);
    }
  }

  // Format phone number
  formatPhoneNumber(): void {
    let phone = this.phoneNumber.replace(/\D/g, '');
    if (phone.length > 10) {
      phone = phone.substring(0, 10);
    }
    this.phoneNumber = phone;
  }

  // Handle OTP input
  onOtpInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.otp = input.value.replace(/\D/g, '').substring(0, 6);
  }

  // Validate phone number
  isValidPhoneNumber(): boolean {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(this.phoneNumber);
  }

  // Send OTP
  sendOtp(): void {
    console.log('Send OTP called');
    if (!this.isValidPhoneNumber()) {
      this.errorMessage = 'Please enter a valid 10-digit phone number';
      return;
    }

    // For now, simulate OTP sending
    this.isLoading = true;
    this.errorMessage = '';
    
    setTimeout(() => {
      this.isLoading = false;
      this.showOtpInput = true;
      this.otpSent = true;
      this.successMessage = 'OTP sent successfully (Test Mode)';
    }, 1000);
  }

  // Verify OTP
  verifyOtp(): void {
    console.log('Verify OTP called');
    if (!this.otp || this.otp.length !== 6) {
      this.errorMessage = 'Please enter a valid 6-digit OTP';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Test OTP verification
    setTimeout(() => {
      this.isLoading = false;
      if (this.otp === '123456') {
        this.successMessage = 'Login successful!';
        setTimeout(() => {
          this.router.navigate(['/auth/parent-profiles']);
        }, 1000);
      } else {
        this.errorMessage = 'Invalid OTP. Use 123456 for testing.';
      }
    }, 1000);
  }

  // Navigate to sign up
  navigateToSignUp(): void {
    this.router.navigate(['/auth/sign-up']);
  }

  // Back to phone input
  backToPhoneInput(): void {
    this.showOtpInput = false;
    this.otpSent = false;
    this.otp = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  // Handle form submission
  onSubmit(): void {
    console.log('Form submitted');
    if (!this.showOtpInput) {
      this.sendOtp();
    } else {
      this.verifyOtp();
    }
  }
}

// Make sure to export as default
export default SignInComponent;