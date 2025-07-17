export interface RegistrationData {
  // Common fields
  fullName: string;
  email: string;
  phone: string;
  city: string;
  
  // Dynamic fields based on service
  [key: string]: any;
}

export interface RegistrationRequest {
  serviceType: string;
  userType: 'provider' | 'consumer';
  data: RegistrationData;
}