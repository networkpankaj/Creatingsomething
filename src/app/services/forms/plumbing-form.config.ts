import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const plumbingFormConfig: ServiceFormConfig = {
  serviceType: 'plumbing',
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
      title: 'Professional Information',
      fields: [
        { id: 'experience', type: 'select', label: 'Years of Experience', required: true, options: [
          { value: '0-1', label: '0-1 years' },
          { value: '1-3', label: '1-3 years' },
          { value: '3-5', label: '3-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { id: 'services', type: 'checkbox', label: 'Plumbing Services You Provide', required: true, options: [
          { value: 'pipe-repair', label: 'Pipe Repair' },
          { value: 'tap-repair', label: 'Tap Repair' },
          { value: 'toilet-repair', label: 'Toilet Repair' },
          { value: 'drain-cleaning', label: 'Drain Cleaning' },
          { value: 'water-heater', label: 'Water Heater Services' },
          { value: 'bathroom-fitting', label: 'Bathroom Fitting' },
          { value: 'kitchen-plumbing', label: 'Kitchen Plumbing' },
          { value: 'emergency', label: 'Emergency Services' }
        ]},
        { id: 'tools', type: 'select', label: 'Tools & Equipment', required: true, options: [
          { value: 'own', label: 'I have my own tools' },
          { value: 'basic', label: 'Basic tools only' },
          { value: 'customer', label: 'Customer provides tools' },
          { value: 'professional', label: 'Professional grade tools' }
        ]},
        { id: 'emergencyService', type: 'select', label: 'Emergency Service Availability', required: true, options: [
          { value: 'yes', label: 'Yes, 24/7 available' },
          { value: 'limited', label: 'Limited hours' },
          { value: 'no', label: 'No emergency service' }
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
        { id: 'problemType', type: 'select', label: 'Problem Type', required: true, options: [
          { value: 'leakage', label: 'Water Leakage' },
          { value: 'blockage', label: 'Drain Blockage' },
          { value: 'tap-issue', label: 'Tap Issues' },
          { value: 'toilet-issue', label: 'Toilet Problems' },
          { value: 'installation', label: 'New Installation' },
          { value: 'maintenance', label: 'Maintenance' }
        ]},
        { id: 'servicesNeeded', type: 'checkbox', label: 'Services Needed', required: true, options: [
          { value: 'pipe-repair', label: 'Pipe Repair' },
          { value: 'tap-repair', label: 'Tap Repair' },
          { value: 'toilet-repair', label: 'Toilet Repair' },
          { value: 'drain-cleaning', label: 'Drain Cleaning' },
          { value: 'water-heater', label: 'Water Heater Services' },
          { value: 'bathroom-fitting', label: 'Bathroom Fitting' },
          { value: 'kitchen-plumbing', label: 'Kitchen Plumbing' },
          { value: 'emergency', label: 'Emergency Services' }
        ]},
        { id: 'urgency', type: 'select', label: 'Service Urgency', required: true, options: [
          { value: 'emergency', label: 'Emergency (Immediate)' },
          { value: 'urgent', label: 'Urgent (Same Day)' },
          { value: 'normal', label: 'Normal (Within 2 Days)' },
          { value: 'flexible', label: 'Flexible Timing' }
        ]},
        { id: 'propertyType', type: 'select', label: 'Property Type', required: true, options: [
          { value: 'apartment', label: 'Apartment' },
          { value: 'house', label: 'Independent House' },
          { value: 'office', label: 'Office' },
          { value: 'shop', label: 'Shop/Commercial' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹)', required: true, options: [
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000-5000', label: '₹2000 - ₹5000' },
          { value: '5000+', label: '₹5000+' }
        ]}
      ]
    }
  ]
};