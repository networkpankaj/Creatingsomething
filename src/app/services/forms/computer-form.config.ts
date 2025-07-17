import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const computerFormConfig: ServiceFormConfig = {
  serviceType: 'computer',
  provider: [
    {
      title: 'Personal Information',
      fields: [
        { id: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name', required: true },
        { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
        { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
        { id: 'city', type: 'select', label: 'City', required: true, options: [
          { value: 'delhi', label: 'New Delhi' },
          { value: 'mumbai', label: 'Mumbai' },
          { value: 'bangalore', label: 'Bangalore' },
          { value: 'hyderabad', label: 'Hyderabad' },
          { value: 'pune', label: 'Pune' },
          { value: 'chennai', label: 'Chennai' }
        ]}
      ]
    },
    {
      title: 'Technical Information',
      fields: [
        { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: [
          { value: '0-1', label: '0-1 years' },
          { value: '1-3', label: '1-3 years' },
          { value: '3-5', label: '3-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { id: 'qualifications', type: 'checkbox', label: 'Qualifications & Certifications', required: true, options: [
          { value: 'cs-degree', label: 'Computer Science Degree' },
          { value: 'it-diploma', label: 'IT Diploma' },
          { value: 'hardware-certified', label: 'Hardware Certified' },
          { value: 'software-certified', label: 'Software Certified' },
          { value: 'network-certified', label: 'Network Certified' },
          { value: 'self-taught', label: 'Self-Taught Expert' }
        ]},
        { id: 'specialization', type: 'checkbox', label: 'Specialization Areas', required: true, options: [
          { value: 'hardware-repair', label: 'Hardware Repair' },
          { value: 'software-support', label: 'Software Support' },
          { value: 'virus-removal', label: 'Virus Removal' },
          { value: 'data-recovery', label: 'Data Recovery' },
          { value: 'network-setup', label: 'Network Setup' },
          { value: 'os-installation', label: 'OS Installation' },
          { value: 'laptop-repair', label: 'Laptop Repair' },
          { value: 'desktop-assembly', label: 'Desktop Assembly' }
        ]},
        { id: 'operatingSystems', type: 'checkbox', label: 'Operating Systems You Support', required: true, options: [
          { value: 'windows', label: 'Windows' },
          { value: 'macos', label: 'macOS' },
          { value: 'linux', label: 'Linux' },
          { value: 'android', label: 'Android' },
          { value: 'ios', label: 'iOS' }
        ]},
        { id: 'serviceLocation', type: 'select', label: 'Service Location', required: true, options: [
          { value: 'home', label: 'At Customer Location' },
          { value: 'workshop', label: 'At My Workshop' },
          { value: 'both', label: 'Both Options' },
          { value: 'remote', label: 'Remote Support Only' }
        ]},
        { id: 'emergencyService', type: 'select', label: 'Emergency Service Availability', required: true, options: [
          { value: 'yes', label: 'Yes, 24/7 available' },
          { value: 'limited', label: 'Limited hours' },
          { value: 'no', label: 'No emergency service' }
        ]},
        { id: 'pricing', type: 'select', label: 'Pricing Model', required: true, options: [
          { value: 'hourly', label: 'Hourly Rate' },
          { value: 'fixed', label: 'Fixed Price per Service' },
          { value: 'diagnostic', label: 'Diagnostic + Repair' },
          { value: 'negotiable', label: 'Negotiable' }
        ]},
        { id: 'availability', type: 'select', label: 'Availability', required: true, options: [
          { value: 'full-time', label: 'Full Time' },
          { value: 'part-time', label: 'Part Time' },
          { value: 'weekends', label: 'Weekends Only' },
          { value: 'flexible', label: 'Flexible' }
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
        { id: 'city', type: 'select', label: 'City', required: true, options: [
          { value: 'delhi', label: 'New Delhi' },
          { value: 'mumbai', label: 'Mumbai' },
          { value: 'bangalore', label: 'Bangalore' },
          { value: 'hyderabad', label: 'Hyderabad' },
          { value: 'pune', label: 'Pune' },
          { value: 'chennai', label: 'Chennai' }
        ]}
      ]
    },
    {
      title: 'Service Requirements',
      fields: [
        { id: 'deviceType', type: 'select', label: 'Device Type', required: true, options: [
          { value: 'desktop', label: 'Desktop Computer' },
          { value: 'laptop', label: 'Laptop' },
          { value: 'tablet', label: 'Tablet' },
          { value: 'server', label: 'Server' },
          { value: 'multiple', label: 'Multiple Devices' }
        ]},
        { id: 'deviceBrand', type: 'select', label: 'Device Brand', required: true, options: [
          { value: 'hp', label: 'HP' },
          { value: 'dell', label: 'Dell' },
          { value: 'lenovo', label: 'Lenovo' },
          { value: 'acer', label: 'Acer' },
          { value: 'asus', label: 'ASUS' },
          { value: 'apple', label: 'Apple' },
          { value: 'custom', label: 'Custom Built' },
          { value: 'other', label: 'Other' }
        ]},
        { id: 'operatingSystem', type: 'select', label: 'Operating System', required: true, options: [
          { value: 'windows10', label: 'Windows 10' },
          { value: 'windows11', label: 'Windows 11' },
          { value: 'macos', label: 'macOS' },
          { value: 'linux', label: 'Linux' },
          { value: 'not-sure', label: 'Not Sure' }
        ]},
        { id: 'problemType', type: 'select', label: 'Problem Type', required: true, options: [
          { value: 'not-starting', label: 'Computer Not Starting' },
          { value: 'slow-performance', label: 'Slow Performance' },
          { value: 'virus-malware', label: 'Virus/Malware' },
          { value: 'hardware-issue', label: 'Hardware Issue' },
          { value: 'software-issue', label: 'Software Issue' },
          { value: 'network-issue', label: 'Network/Internet Issue' },
          { value: 'data-recovery', label: 'Data Recovery' },
          { value: 'setup-installation', label: 'Setup/Installation' }
        ]},
        { id: 'servicesNeeded', type: 'checkbox', label: 'Services Needed', required: true, options: [
          { value: 'hardware-repair', label: 'Hardware Repair' },
          { value: 'software-support', label: 'Software Support' },
          { value: 'virus-removal', label: 'Virus Removal' },
          { value: 'data-recovery', label: 'Data Recovery' },
          { value: 'network-setup', label: 'Network Setup' },
          { value: 'os-installation', label: 'OS Installation' },
          { value: 'performance-optimization', label: 'Performance Optimization' },
          { value: 'backup-setup', label: 'Backup Setup' },
          { value: 'software-installation', label: 'Software Installation' },
          { value: 'troubleshooting', label: 'General Troubleshooting' }
        ]},
        { id: 'urgency', type: 'select', label: 'Service Urgency', required: true, options: [
          { value: 'emergency', label: 'Emergency (Immediate)' },
          { value: 'urgent', label: 'Urgent (Same Day)' },
          { value: 'normal', label: 'Normal (Within 2 Days)' },
          { value: 'flexible', label: 'Flexible Timing' }
        ]},
        { id: 'preferredService', type: 'select', label: 'Preferred Service Type', required: true, options: [
          { value: 'on-site', label: 'On-site Visit' },
          { value: 'pickup-delivery', label: 'Pickup & Delivery' },
          { value: 'remote', label: 'Remote Support' },
          { value: 'workshop', label: 'Drop at Workshop' }
        ]},
        { id: 'dataBackup', type: 'select', label: 'Data Backup Status', required: true, options: [
          { value: 'backed-up', label: 'Data is Backed Up' },
          { value: 'need-backup', label: 'Need Data Backup' },
          { value: 'no-important-data', label: 'No Important Data' },
          { value: 'data-recovery-needed', label: 'Data Recovery Needed' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹)', required: true, options: [
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-3000', label: '₹1000 - ₹3000' },
          { value: '3000-5000', label: '₹3000 - ₹5000' },
          { value: '5000-10000', label: '₹5000 - ₹10000' },
          { value: '10000+', label: '₹10000+' }
        ]},
        { id: 'additionalInfo', type: 'textarea', label: 'Additional Information', placeholder: 'Please describe the problem in detail, error messages, when it started, etc.', required: false }
      ]
    }
  ]
};