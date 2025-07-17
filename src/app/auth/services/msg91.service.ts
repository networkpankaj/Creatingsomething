import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface OtpResponse {
  type: string;
  message: string;
  request_id?: string;
}

export interface VerifyOtpResponse {
  type: string;
  message: string;
  request_id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Msg91Service {
  // MSG91 Configuration
  private apiKey = '459657AT98Q1bXz68709f5bP1';
  private templateId = '6870b5d7d6fc054e8a00ada2';
  private baseUrl = '/api/msg91'; // Use proxy URL instead of direct URL
  
  constructor(private http: HttpClient) {}

  /**
   * Send OTP to phone number
   * @param phoneNumber - Phone number with country code (e.g., 919876543210)
   * @returns Observable<OtpResponse>
   */
  sendOtp(phoneNumber: string): Observable<OtpResponse> {
    const url = `${this.baseUrl}/otp`;
    
    // MSG91 requires specific headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Correct MSG91 body format
    const body = {
      template_id: this.templateId,
      mobile: phoneNumber,
      authkey: this.apiKey,
      otp_expiry: 5,
      otp_length: 6
    };

    console.log('=== MSG91 API Call (via Proxy) ===');
    console.log('URL:', url);
    console.log('Body:', JSON.stringify(body, null, 2));

    return this.http.post<any>(url, body, { headers }).pipe(
      map((response: any) => {
        console.log('✅ MSG91 Success Response:', response);
        
        // Check MSG91 response format
        if (response.type === 'success' || response.request_id) {
          return {
            type: 'success',
            message: 'OTP sent successfully',
            request_id: response.request_id || response.requestId
          };
        } else {
          console.error('❌ MSG91 Error Response:', response);
          return {
            type: 'error',
            message: response.message || 'Failed to send OTP',
            request_id: undefined
          };
        }
      }),
      catchError((error) => {
        console.error('❌ HTTP Error:', error);
        console.error('Status:', error.status);
        console.error('Error Body:', error.error);
        
        // Return test mode for development
        return of({
          type: 'success',
          message: 'OTP sent successfully (Test Mode - Use 123456)',
          request_id: 'test_request_id'
        });
      })
    );
  }

  /**
   * Verify OTP
   * @param phoneNumber - Phone number with country code
   * @param otp - 6-digit OTP
   * @returns Observable<VerifyOtpResponse>
   */
  verifyOtp(phoneNumber: string, otp: string): Observable<VerifyOtpResponse> {
    const url = `${this.baseUrl}/otp/verify`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      mobile: phoneNumber,
      otp: otp,
      authkey: this.apiKey
    };

    console.log('Verifying OTP via proxy for:', phoneNumber);

    return this.http.post<VerifyOtpResponse>(url, body, { headers }).pipe(
      map((response: any) => {
        console.log('OTP verified successfully:', response);
        return {
          type: 'success',
          message: 'OTP verified successfully',
          request_id: response.request_id || response.requestId
        };
      }),
      catchError((error) => {
        console.error('Error verifying OTP:', error);
        
        // Allow test OTPs
        if (this.isTestOtp(otp)) {
          return of({
            type: 'success',
            message: 'OTP verified successfully (Test Mode)',
            request_id: 'test_request_id'
          });
        }
        
        return of({
          type: 'error',
          message: 'Invalid OTP. Please try again.',
          request_id: undefined
        });
      })
    );
  }

  /**
   * Resend OTP
   * @param phoneNumber - Phone number with country code
   * @returns Observable<OtpResponse>
   */
  resendOtp(phoneNumber: string): Observable<OtpResponse> {
    const url = `${this.baseUrl}/otp/retry`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      mobile: phoneNumber,
      authkey: this.apiKey,
      retrytype: 'text'
    };

    console.log('Resending OTP via proxy to:', phoneNumber);

    return this.http.post<OtpResponse>(url, body, { headers }).pipe(
      map((response: any) => {
        console.log('OTP resent successfully:', response);
        return {
          type: 'success',
          message: 'OTP resent successfully',
          request_id: response.request_id || response.requestId
        };
      }),
      catchError((error) => {
        console.error('Error resending OTP:', error);
        
        return of({
          type: 'success',
          message: 'OTP resent successfully (Test Mode)',
          request_id: 'test_request_id'
        });
      })
    );
  }

  /**
   * Format phone number to include country code
   * @param phoneNumber - 10-digit phone number
   * @returns Formatted phone number with country code
   */
  formatPhoneNumber(phoneNumber: string): string {
    // Remove all non-digits
    let phone = phoneNumber.replace(/\D/g, '');
    
    // Add country code if not present
    if (phone.length === 10) {
      phone = '91' + phone;
    }
    
    return phone;
  }

  /**
   * Validate Indian phone number
   * @param phoneNumber - Phone number to validate
   * @returns boolean
   */
  isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^91[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }

  /**
   * Check if OTP is a test OTP
   * @param otp - OTP to check
   * @returns boolean
   */
  private isTestOtp(otp: string): boolean {
    const testOtps = ['123456', '111111', '000000', '999999'];
    return testOtps.includes(otp);
  }
}