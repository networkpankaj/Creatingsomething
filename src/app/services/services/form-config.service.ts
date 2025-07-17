import { Injectable } from '@angular/core';
import { ServiceFormConfig } from '../../shared/models/form-field.model';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  
  getFormConfig(serviceType: string): ServiceFormConfig {
    switch (serviceType) {
      case 'teacher':
        return this.getTeacherFormConfig();
      case 'parent':
        return this.getParentFormConfig();
      case 'home-cleaning':
        return this.getHomeCleaningFormConfig();
      case 'ac-cleaning':
        return this.getHomeCleaningFormConfig();
      case 'beauty':
        return this.getBeautyFormConfig();
      case 'plumbing':
        return this.getPlumbingFormConfig();
      case 'electrical':
        return this.getElectricalFormConfig();
      default:
        return this.getDefaultFormConfig();
    }
  }

  private getParentFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'parent',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Student Information',
          fields: [
            { id: 'studentName', type: 'text', label: 'Student Name', placeholder: 'Enter student name', required: true },
            { id: 'studentGrade', type: 'select', label: 'Student Grade/Class', required: true, options: [
              { value: '1-5', label: 'Class 1-5' },
              { value: '6-8', label: 'Class 6-8' },
              { value: '9-10', label: 'Class 9-10' },
              { value: '11-12', label: 'Class 11-12' },
              { value: 'college', label: 'College Level' }
            ]},
            { id: 'subjectsNeeded', type: 'checkbox', label: 'Subjects Needed', required: true, options: [
              { value: 'mathematics', label: 'Mathematics' },
              { value: 'science', label: 'Science' },
              { value: 'english', label: 'English' },
              { value: 'hindi', label: 'Hindi' },
              { value: 'social-studies', label: 'Social Studies' },
              { value: 'physics', label: 'Physics' },
              { value: 'chemistry', label: 'Chemistry' },
              { value: 'biology', label: 'Biology' }
            ]},
            { id: 'teachingMode', type: 'select', label: 'Preferred Teaching Mode', required: true, options: [
              { value: 'online', label: 'Online Classes' },
              { value: 'home', label: 'Home Tuition' },
              { value: 'both', label: 'Both Options' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/hour)', required: true, options: [
              { value: '200-500', label: '₹200 - ₹500' },
              { value: '500-1000', label: '₹500 - ₹1000' },
              { value: '1000-2000', label: '₹1000 - ₹2000' },
              { value: '2000+', label: '₹2000+' }
            ]}
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        }
      ]
    };
  }

  private getTeacherFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'teacher',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Professional Information',
          fields: [
            { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: this.getExperienceOptions() },
            { id: 'qualification', type: 'select', label: 'Educational Qualification', required: true, options: [
              { value: 'graduate', label: 'Graduate' },
              { value: 'post-graduate', label: 'Post Graduate' },
              { value: 'phd', label: 'PhD' },
              { value: 'diploma', label: 'Diploma' }
            ]},
            { id: 'teachingMethod', type: 'select', label: 'Teaching Method', required: true, options: [
              { value: 'online', label: 'Online Only' },
              { value: 'offline', label: 'Home Visits' },
              { value: 'both', label: 'Both Online & Offline' }
            ]},
            { id: 'subjects', type: 'checkbox', label: 'Subjects You Teach', required: true, options: [
              { value: 'mathematics', label: 'Mathematics' },
              { value: 'science', label: 'Science' },
              { value: 'english', label: 'English' },
              { value: 'hindi', label: 'Hindi' },
              { value: 'social-studies', label: 'Social Studies' },
              { value: 'physics', label: 'Physics' },
              { value: 'chemistry', label: 'Chemistry' },
              { value: 'biology', label: 'Biology' }
            ]},
            { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '500', required: true },
            { id: 'availability', type: 'select', label: 'Availability', required: true, options: this.getAvailabilityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Student Information',
          fields: [
            { id: 'studentName', type: 'text', label: 'Student Name', placeholder: 'Enter student name', required: true },
            { id: 'studentGrade', type: 'select', label: 'Student Grade/Class', required: true, options: [
              { value: '1-5', label: 'Class 1-5' },
              { value: '6-8', label: 'Class 6-8' },
              { value: '9-10', label: 'Class 9-10' },
              { value: '11-12', label: 'Class 11-12' },
              { value: 'college', label: 'College Level' }
            ]},
            { id: 'subjectsNeeded', type: 'checkbox', label: 'Subjects Needed', required: true, options: [
              { value: 'mathematics', label: 'Mathematics' },
              { value: 'science', label: 'Science' },
              { value: 'english', label: 'English' },
              { value: 'hindi', label: 'Hindi' },
              { value: 'social-studies', label: 'Social Studies' },
              { value: 'physics', label: 'Physics' },
              { value: 'chemistry', label: 'Chemistry' },
              { value: 'biology', label: 'Biology' }
            ]},
            { id: 'teachingMode', type: 'select', label: 'Preferred Teaching Mode', required: true, options: [
              { value: 'online', label: 'Online Classes' },
              { value: 'home', label: 'Home Tuition' },
              { value: 'both', label: 'Both Options' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/hour)', required: true, options: [
              { value: '200-500', label: '₹200 - ₹500' },
              { value: '500-1000', label: '₹500 - ₹1000' },
              { value: '1000-2000', label: '₹1000 - ₹2000' },
              { value: '2000+', label: '₹2000+' }
            ]}
          ]
        }
      ]
    };
  }

  private getHomeCleaningFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'home-cleaning',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Service Information',
          fields: [
            { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: this.getExperienceOptions() },
            { id: 'serviceType', type: 'checkbox', label: 'Cleaning Services You Offer', required: true, options: [
              { value: 'regular', label: 'Regular Cleaning' },
              { value: 'deep', label: 'Deep Cleaning' },
              { value: 'kitchen', label: 'Kitchen Cleaning' },
              { value: 'bathroom', label: 'Bathroom Cleaning' },
              { value: 'carpet', label: 'Carpet Cleaning' },
              { value: 'window', label: 'Window Cleaning' }
            ]},
            { id: 'equipment', type: 'select', label: 'Equipment', required: true, options: [
              { value: 'own', label: 'I have my own equipment' },
              { value: 'customer', label: 'Customer provides equipment' },
              { value: 'both', label: 'Both options available' }
            ]},
            { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '300', required: true },
            { id: 'availability', type: 'select', label: 'Availability', required: true, options: this.getAvailabilityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Service Requirements',
          fields: [
            { id: 'homeType', type: 'select', label: 'Home Type', required: true, options: [
              { value: '1bhk', label: '1 BHK' },
              { value: '2bhk', label: '2 BHK' },
              { value: '3bhk', label: '3 BHK' },
              { value: '4bhk', label: '4+ BHK' },
              { value: 'villa', label: 'Villa/Independent House' }
            ]},
            { id: 'cleaningType', type: 'checkbox', label: 'Cleaning Services Needed', required: true, options: [
              { value: 'regular', label: 'Regular Cleaning' },
              { value: 'deep', label: 'Deep Cleaning' },
              { value: 'kitchen', label: 'Kitchen Cleaning' },
              { value: 'bathroom', label: 'Bathroom Cleaning' },
              { value: 'carpet', label: 'Carpet Cleaning' },
              { value: 'window', label: 'Window Cleaning' }
            ]},
            { id: 'frequency', type: 'select', label: 'Cleaning Frequency', required: true, options: [
              { value: 'daily', label: 'Daily' },
              { value: 'weekly', label: 'Weekly' },
              { value: 'bi-weekly', label: 'Bi-weekly' },
              { value: 'monthly', label: 'Monthly' },
              { value: 'one-time', label: 'One Time' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/hour)', required: true, options: [
              { value: '200-400', label: '₹200 - ₹400' },
              { value: '400-600', label: '₹400 - ₹600' },
              { value: '600-1000', label: '₹600 - ₹1000' },
              { value: '1000+', label: '₹1000+' }
            ]}
          ]
        }
      ]
    };
  }

  private getPlumbingFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'plumbing',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Professional Information',
          fields: [
            { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: this.getExperienceOptions() },
            { id: 'services', type: 'checkbox', label: 'Plumbing Services You Offer', required: true, options: [
              { value: 'leak-repair', label: 'Leak Repair' },
              { value: 'pipe-installation', label: 'Pipe Installation' },
              { value: 'bathroom-fitting', label: 'Bathroom Fitting' },
              { value: 'kitchen-fittings', label: 'Kitchen Fittings' },
              { value: 'water-heater', label: 'Water Heater Installation/Repair' }
            ]},
            { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '400', required: true },
            { id: 'availability', type: 'select', label: 'Availability', required: true, options: this.getAvailabilityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Service Requirements',
          fields: [
            { id: 'serviceNeeded', type: 'checkbox', label: 'Plumbing Services Needed', required: true, options: [
              { value: 'leak-repair', label: 'Leak Repair' },
              { value: 'pipe-installation', label: 'Pipe Installation' },
              { value: 'bathroom-fitting', label: 'Bathroom Fitting' },
              { value: 'kitchen-fittings', label: 'Kitchen Fittings' },
              { value: 'water-heater', label: 'Water Heater Installation/Repair' }
            ]},
            { id: 'urgency', type: 'select', label: 'Urgency', required: true, options: [
              { value: 'immediate', label: 'Immediate' },
              { value: 'within-24h', label: 'Within 24 Hours' },
              { value: 'flexible', label: 'Flexible' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/service)', required: true, options: [
              { value: '300-600', label: '₹300 - ₹600' },
              { value: '600-1000', label: '₹600 - ₹1000' },
              { value: '1000+', label: '₹1000+' }
            ]}
          ]
        }
      ]
    };
  }

  private getElectricalFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'electrical',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Professional Information',
          fields: [
            { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: this.getExperienceOptions() },
            { id: 'services', type: 'checkbox', label: 'Electrical Services You Offer', required: true, options: [
              { value: 'wiring', label: 'Wiring & Installation' },
              { value: 'repair', label: 'Repair & Maintenance' },
              { value: 'appliance', label: 'Appliance Installation' },
              { value: 'lighting', label: 'Lighting Solutions' }
            ]},
            { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '500', required: true },
            { id: 'availability', type: 'select', label: 'Availability', required: true, options: this.getAvailabilityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Service Requirements',
          fields: [
            { id: 'serviceNeeded', type: 'checkbox', label: 'Electrical Services Needed', required: true, options: [
              { value: 'wiring', label: 'Wiring & Installation' },
              { value: 'repair', label: 'Repair & Maintenance' },
              { value: 'appliance', label: 'Appliance Installation' },
              { value: 'lighting', label: 'Lighting Solutions' }
            ]},
            { id: 'urgency', type: 'select', label: 'Urgency', required: true, options: [
              { value: 'immediate', label: 'Immediate' },
              { value: 'within-24h', label: 'Within 24 Hours' },
              { value: 'flexible', label: 'Flexible' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/service)', required: true, options: [
              { value: '300-600', label: '₹300 - ₹600' },
              { value: '600-1000', label: '₹600 - ₹1000' },
              { value: '1000+', label: '₹1000+' }
            ]}
          ]
        }
      ]
    };
  }

  private getBeautyFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'beauty',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Professional Information',
          fields: [
            { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: this.getExperienceOptions() },
            { id: 'certification', type: 'select', label: 'Certification/Training', required: true, options: [
              { value: 'certified', label: 'Certified Beautician' },
              { value: 'diploma', label: 'Diploma in Beauty' },
              { value: 'experienced', label: 'Self-Trained Expert' },
              { value: 'learning', label: 'Learning & Growing' }
            ]},
            { id: 'services', type: 'checkbox', label: 'Services You Offer', required: true, options: [
              { value: 'haircut', label: 'Hair Cut & Styling' },
              { value: 'makeup', label: 'Makeup' },
              { value: 'facial', label: 'Facial' },
              { value: 'manicure', label: 'Manicure' },
              { value: 'pedicure', label: 'Pedicure' },
              { value: 'eyebrow', label: 'Eyebrow Threading' },
              { value: 'waxing', label: 'Waxing' },
              { value: 'massage', label: 'Head Massage' }
            ]},
            { id: 'serviceLocation', type: 'select', label: 'Service Location', required: true, options: [
              { value: 'home', label: 'At Customer Home' },
              { value: 'salon', label: 'At My Salon' },
              { value: 'both', label: 'Both Options' }
            ]},
            { id: 'availability', type: 'select', label: 'Availability', required: true, options: this.getAvailabilityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        },
        {
          title: 'Service Requirements',
          fields: [
            { id: 'servicesNeeded', type: 'checkbox', label: 'Services Needed', required: true, options: [
              { value: 'haircut', label: 'Hair Cut & Styling' },
              { value: 'makeup', label: 'Makeup' },
              { value: 'facial', label: 'Facial' },
              { value: 'manicure', label: 'Manicure' },
              { value: 'pedicure', label: 'Pedicure' },
              { value: 'eyebrow', label: 'Eyebrow Threading' },
              { value: 'waxing', label: 'Waxing' },
              { value: 'massage', label: 'Head Massage' }
            ]},
            { id: 'preferredLocation', type: 'select', label: 'Preferred Location', required: true, options: [
              { value: 'home', label: 'At My Home' },
              { value: 'salon', label: 'At Salon' },
              { value: 'both', label: 'Both Options' }
            ]},
            { id: 'frequency', type: 'select', label: 'Service Frequency', required: true, options: [
              { value: 'weekly', label: 'Weekly' },
              { value: 'bi-weekly', label: 'Bi-weekly' },
              { value: 'monthly', label: 'Monthly' },
              { value: 'occasional', label: 'Occasional' }
            ]},
            { id: 'budget', type: 'select', label: 'Budget Range (₹/service)', required: true, options: [
              { value: '500-1000', label: '₹500 - ₹1000' },
              { value: '1000-2000', label: '₹1000 - ₹2000' },
              { value: '2000-5000', label: '₹2000 - ₹5000' },
              { value: '5000+', label: '₹5000+' }
            ]}
          ]
        }
      ]
    };
  }

  private getDefaultFormConfig(): ServiceFormConfig {
    return {
      serviceType: 'default',
      provider: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        }
      ],
      consumer: [
        {
          title: 'Personal Information',
          fields: [
            { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
            { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
            { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
            { id: 'city', type: 'select', label: 'City', required: true, options: this.getCityOptions() }
          ]
        }
      ]
    };
  }

  private getCityOptions() {
    return [
      { value: 'delhi', label: 'New Delhi' },
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'bangalore', label: 'Bangalore' },
      { value: 'hyderabad', label: 'Hyderabad' },
      { value: 'pune', label: 'Pune' },
      { value: 'chennai', label: 'Chennai' },
      { value: 'kolkata', label: 'Kolkata' },
      { value: 'ahmedabad', label: 'Ahmedabad' },
      { value: 'jaipur', label: 'Jaipur' },
      { value: 'lucknow', label: 'Lucknow' }
    ];
  }

  private getExperienceOptions() {
    return [
      { value: '0-1', label: '0-1 years' },
      { value: '1-3', label: '1-3 years' },
      { value: '3-5', label: '3-5 years' },
      { value: '5-10', label: '5-10 years' },
      { value: '10+', label: '10+ years' }
    ];
  }

  private getAvailabilityOptions() {
    return [
      { value: 'full-time', label: 'Full Time' },
      { value: 'part-time', label: 'Part Time' },
      { value: 'weekends', label: 'Weekends Only' },
      { value: 'flexible', label: 'Flexible' }
    ];
  }
}