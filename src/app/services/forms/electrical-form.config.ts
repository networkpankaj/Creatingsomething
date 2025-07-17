import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const electricalFormConfig: ServiceFormConfig = {
  serviceType: 'electrical',
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
        { id: 'license', type: 'select', label: 'License/Certification', required: true, options: [
          { value: 'licensed', label: 'Licensed Electrician' },
          { value: 'certified', label: 'Certified Technician' },
          { value: 'experienced', label: 'Experienced (No License)' },
          { value: 'apprentice', label: 'Apprentice' }
        ]},
        { id: 'services', type: 'checkbox', label: 'Electrical Services You Provide', required: true, options: [
          { value: 'wiring', label: 'House Wiring' },
          { value: 'fan-installation', label: 'Fan Installation' },
          { value: 'light-fitting', label: 'Light Fitting' },
          { value: 'switch-repair', label: 'Switch/Socket Repair' },
          { value: 'mcb-repair', label: 'MCB/Fuse Repair' },
          { value: 'appliance-repair', label: 'Appliance Repair' },
          { value: 'emergency', label: 'Emergency Services' },
          { value: 'maintenance', label: 'Electrical Maintenance' }
        ]},
        { id: 'specialization', type: 'select', label: 'Specialization', required: true, options: [
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial' },
          { value: 'industrial', label: 'Industrial' },
          { value: 'all', label: 'All Types' }
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
          { value: 'no-power', label: 'No Power/Electricity' },
          { value: 'short-circuit', label: 'Short Circuit' },
          { value: 'appliance-issue', label: 'Appliance Not Working' },
          { value: 'installation', label: 'New Installation' },
          { value: 'maintenance', label: 'Maintenance' },
          { value: 'upgrade', label: 'Electrical Upgrade' }
        ]},
        { id: 'servicesNeeded', type: 'checkbox', label: 'Services Needed', required: true, options: [
          { value: 'wiring', label: 'House Wiring' },
          { value: 'fan-installation', label: 'Fan Installation' },
          { value: 'light-fitting', label: 'Light Fitting' },
          { value: 'switch-repair', label: 'Switch/Socket Repair' },
          { value: 'mcb-repair', label: 'MCB/Fuse Repair' },
          { value: 'appliance-repair', label: 'Appliance Repair' },
          { value: 'emergency', label: 'Emergency Services' },
          { value: 'maintenance', label: 'Electrical Maintenance' }
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
          { value: '1000-3000', label: '₹1000 - ₹3000' },
          { value: '3000-5000', label: '₹3000 - ₹5000' },
          { value: '5000+', label: '₹5000+' }
        ]}
      ]
    }
  ]
};