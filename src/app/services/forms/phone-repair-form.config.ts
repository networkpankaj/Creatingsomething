import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const phoneRepairFormConfig: ServiceFormConfig = {
  serviceType: 'phone-repair',
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
          { value: 'mobile-technician', label: 'Mobile Technician Certified' },
          { value: 'electronics-degree', label: 'Electronics Degree/Diploma' },
          { value: 'manufacturer-trained', label: 'Manufacturer Trained' },
          { value: 'repair-course', label: 'Mobile Repair Course' },
          { value: 'self-taught', label: 'Self-Taught Expert' },
          { value: 'micro-soldering', label: 'Micro Soldering Certified' }
        ]},
        { id: 'phoneTypes', type: 'checkbox', label: 'Phone Types You Repair', required: true, options: [
          { value: 'android', label: 'Android Phones' },
          { value: 'iphone', label: 'iPhone' },
          { value: 'basic-phones', label: 'Basic/Feature Phones' },
          { value: 'tablets', label: 'Tablets' },
          { value: 'smartwatches', label: 'Smartwatches' },
          { value: 'all-devices', label: 'All Mobile Devices' }
        ]},
        { id: 'brands', type: 'checkbox', label: 'Brands You Specialize In', required: true, options: [
          { value: 'apple', label: 'Apple' },
          { value: 'samsung', label: 'Samsung' },
          { value: 'xiaomi', label: 'Xiaomi' },
          { value: 'oneplus', label: 'OnePlus' },
          { value: 'oppo', label: 'Oppo' },
          { value: 'vivo', label: 'Vivo' },
          { value: 'realme', label: 'Realme' },
          { value: 'huawei', label: 'Huawei' },
          { value: 'nokia', label: 'Nokia' },
          { value: 'all-brands', label: 'All Brands' }
        ]},
        { id: 'repairTypes', type: 'checkbox', label: 'Repair Services You Provide', required: true, options: [
          { value: 'screen-replacement', label: 'Screen Replacement' },
          { value: 'battery-replacement', label: 'Battery Replacement' },
          { value: 'charging-port', label: 'Charging Port Repair' },
          { value: 'speaker-repair', label: 'Speaker Repair' },
          { value: 'camera-repair', label: 'Camera Repair' },
          { value: 'water-damage', label: 'Water Damage Repair' },
          { value: 'software-issues', label: 'Software Issues' },
          { value: 'unlocking', label: 'Phone Unlocking' },
          { value: 'motherboard-repair', label: 'Motherboard Repair' },
          { value: 'data-recovery', label: 'Data Recovery' }
        ]},
        { id: 'partsAvailability', type: 'select', label: 'Parts Availability', required: true, options: [
          { value: 'stock-available', label: 'I have parts in stock' },
          { value: 'quick-sourcing', label: 'Can source parts quickly' },
          { value: 'customer-provides', label: 'Customer provides parts' },
          { value: 'order-basis', label: 'Order parts as needed' }
        ]},
        { id: 'serviceLocation', type: 'select', label: 'Service Location', required: true, options: [
          { value: 'shop', label: 'At My Shop' },
          { value: 'home-service', label: 'Home Service' },
          { value: 'pickup-delivery', label: 'Pickup & Delivery' },
          { value: 'all-options', label: 'All Options Available' }
        ]},
        { id: 'warranty', type: 'select', label: 'Warranty on Repairs', required: true, options: [
          { value: '1-month', label: '1 Month Warranty' },
          { value: '3-months', label: '3 Months Warranty' },
          { value: '6-months', label: '6 Months Warranty' },
          { value: '1-year', label: '1 Year Warranty' },
          { value: 'no-warranty', label: 'No Warranty' }
        ]},
        { id: 'emergencyService', type: 'select', label: 'Emergency Service', required: true, options: [
          { value: 'same-day', label: 'Same Day Repair' },
          { value: 'express-service', label: 'Express Service (2-4 hours)' },
          { value: 'standard', label: 'Standard Service (1-2 days)' },
          { value: 'no-rush', label: 'No Rush Service' }
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
      title: 'Device Information',
      fields: [
        { id: 'deviceType', type: 'select', label: 'Device Type', required: true, options: [
          { value: 'smartphone', label: 'Smartphone' },
          { value: 'basic-phone', label: 'Basic/Feature Phone' },
          { value: 'tablet', label: 'Tablet' },
          { value: 'smartwatch', label: 'Smartwatch' },
          { value: 'other', label: 'Other' }
        ]},
        { id: 'deviceBrand', type: 'select', label: 'Device Brand', required: true, options: [
          { value: 'apple', label: 'Apple' },
          { value: 'samsung', label: 'Samsung' },
          { value: 'xiaomi', label: 'Xiaomi' },
          { value: 'oneplus', label: 'OnePlus' },
          { value: 'oppo', label: 'Oppo' },
          { value: 'vivo', label: 'Vivo' },
          { value: 'realme', label: 'Realme' },
          { value: 'huawei', label: 'Huawei' },
          { value: 'nokia', label: 'Nokia' },
          { value: 'motorola', label: 'Motorola' },
          { value: 'other', label: 'Other' }
        ]},
        { id: 'deviceModel', type: 'text', label: 'Device Model', placeholder: 'e.g., iPhone 13, Galaxy S21, Redmi Note 10', required: true },
        { id: 'deviceAge', type: 'select', label: 'Device Age', required: true, options: [
          { value: '0-6-months', label: '0-6 months' },
          { value: '6-12-months', label: '6-12 months' },
          { value: '1-2-years', label: '1-2 years' },
          { value: '2-3-years', label: '2-3 years' },
          { value: '3-years-plus', label: '3+ years' }
        ]},
        { id: 'warrantyStatus', type: 'select', label: 'Warranty Status', required: true, options: [
          { value: 'under-warranty', label: 'Under Warranty' },
          { value: 'expired-warranty', label: 'Warranty Expired' },
          { value: 'not-sure', label: 'Not Sure' },
          { value: 'no-warranty', label: 'No Warranty' }
        ]}
      ]
    },
    {
      title: 'Problem Details',
      fields: [
        { id: 'problemType', type: 'select', label: 'Main Problem', required: true, options: [
          { value: 'broken-screen', label: 'Broken/Cracked Screen' },
          { value: 'battery-issue', label: 'Battery Issues' },
          { value: 'charging-problem', label: 'Charging Problems' },
          { value: 'speaker-issue', label: 'Speaker/Audio Issues' },
          { value: 'camera-issue', label: 'Camera Problems' },
          { value: 'water-damage', label: 'Water Damage' },
          { value: 'software-issue', label: 'Software Issues' },
          { value: 'network-issue', label: 'Network/Signal Issues' },
          { value: 'overheating', label: 'Overheating' },
          { value: 'physical-damage', label: 'Physical Damage' },
          { value: 'other', label: 'Other Issue' }
        ]},
        { id: 'repairServices', type: 'checkbox', label: 'Repair Services Needed', required: true, options: [
          { value: 'screen-replacement', label: 'Screen Replacement' },
          { value: 'battery-replacement', label: 'Battery Replacement' },
          { value: 'charging-port', label: 'Charging Port Repair' },
          { value: 'speaker-repair', label: 'Speaker Repair' },
          { value: 'camera-repair', label: 'Camera Repair' },
          { value: 'water-damage', label: 'Water Damage Repair' },
          { value: 'software-fix', label: 'Software Issues Fix' },
          { value: 'unlocking', label: 'Phone Unlocking' },
          { value: 'motherboard-repair', label: 'Motherboard Repair' },
          { value: 'data-recovery', label: 'Data Recovery' },
          { value: 'diagnostic', label: 'Diagnostic Only' }
        ]},
        { id: 'problemDescription', type: 'textarea', label: 'Problem Description', placeholder: 'Please describe the problem in detail...', required: true },
        { id: 'urgency', type: 'select', label: 'Repair Urgency', required: true, options: [
          { value: 'emergency', label: 'Emergency (Same Day)' },
          { value: 'urgent', label: 'Urgent (Within 2 Days)' },
          { value: 'normal', label: 'Normal (Within a Week)' },
          { value: 'flexible', label: 'Flexible Timing' }
        ]},
        { id: 'servicePreference', type: 'select', label: 'Service Preference', required: true, options: [
          { value: 'drop-off', label: 'Drop at Repair Shop' },
          { value: 'pickup-delivery', label: 'Pickup & Delivery' },
          { value: 'home-service', label: 'Home Service' },
          { value: 'any', label: 'Any Option' }
        ]},
        { id: 'dataBackup', type: 'select', label: 'Data Backup Status', required: true, options: [
          { value: 'backed-up', label: 'Data is Backed Up' },
          { value: 'need-backup', label: 'Need Data Backup' },
          { value: 'no-important-data', label: 'No Important Data' },
          { value: 'data-recovery-needed', label: 'Data Recovery Needed' }
        ]},
        { id: 'previousRepairs', type: 'select', label: 'Previous Repairs', required: true, options: [
          { value: 'never-repaired', label: 'Never Repaired' },
          { value: 'repaired-once', label: 'Repaired Once' },
          { value: 'multiple-repairs', label: 'Multiple Repairs' },
          { value: 'recent-repair', label: 'Recent Repair (Same Issue)' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹)', required: true, options: [
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000-5000', label: '₹2000 - ₹5000' },
          { value: '5000-10000', label: '₹5000 - ₹10000' },
          { value: '10000+', label: '₹10000+' },
          { value: 'depends-on-issue', label: 'Depends on Issue' }
        ]},
        { id: 'warrantyPreference', type: 'select', label: 'Warranty Preference', required: true, options: [
          { value: 'must-have', label: 'Must Have Warranty' },
          { value: 'preferred', label: 'Preferred but Not Essential' },
          { value: 'not-important', label: 'Not Important' }
        ]}
      ]
    }
  ]
};