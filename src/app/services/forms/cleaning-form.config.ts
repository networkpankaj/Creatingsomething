import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const acCleaningFormConfig: ServiceFormConfig = {
  serviceType: 'ac-cleaning',
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
        { id: 'acTypes', type: 'checkbox', label: 'AC Types You Service', required: true, options: [
          { value: 'split', label: 'Split AC' },
          { value: 'window', label: 'Window AC' },
          { value: 'central', label: 'Central AC' },
          { value: 'cassette', label: 'Cassette AC' },
          { value: 'tower', label: 'Tower AC' },
          { value: 'portable', label: 'Portable AC' }
        ]},
        { id: 'services', type: 'checkbox', label: 'Services You Provide', required: true, options: [
          { value: 'cleaning', label: 'AC Cleaning' },
          { value: 'gas-refilling', label: 'Gas Refilling' },
          { value: 'installation', label: 'Installation' },
          { value: 'uninstallation', label: 'Uninstallation' },
          { value: 'repair', label: 'Repair & Maintenance' },
          { value: 'inspection', label: 'Inspection' }
        ]},
        { id: 'certification', type: 'select', label: 'Certification', required: true, options: [
          { value: 'certified', label: 'Certified Technician' },
          { value: 'experienced', label: 'Experienced (No Certification)' },
          { value: 'training', label: 'Under Training' },
          { value: 'company-trained', label: 'Company Trained' }
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
        { id: 'acCount', type: 'select', label: 'Number of ACs', required: true, options: [
          { value: '1', label: '1 AC' },
          { value: '2', label: '2 ACs' },
          { value: '3', label: '3 ACs' },
          { value: '4', label: '4 ACs' },
          { value: '5+', label: '5+ ACs' }
        ]},
        { id: 'acType', type: 'checkbox', label: 'AC Types', required: true, options: [
          { value: 'split', label: 'Split AC' },
          { value: 'window', label: 'Window AC' },
          { value: 'central', label: 'Central AC' },
          { value: 'cassette', label: 'Cassette AC' },
          { value: 'tower', label: 'Tower AC' },
          { value: 'portable', label: 'Portable AC' }
        ]},
        { id: 'serviceType', type: 'checkbox', label: 'Services Needed', required: true, options: [
          { value: 'cleaning', label: 'AC Cleaning' },
          { value: 'gas-refilling', label: 'Gas Refilling' },
          { value: 'installation', label: 'Installation' },
          { value: 'uninstallation', label: 'Uninstallation' },
          { value: 'repair', label: 'Repair & Maintenance' },
          { value: 'inspection', label: 'Inspection' }
        ]},
        { id: 'urgency', type: 'select', label: 'Service Urgency', required: true, options: [
          { value: 'immediate', label: 'Immediate (Same Day)' },
          { value: 'urgent', label: 'Urgent (Within 2 Days)' },
          { value: 'normal', label: 'Normal (Within a Week)' },
          { value: 'flexible', label: 'Flexible Timing' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/AC)', required: true, options: [
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000-3000', label: '₹2000 - ₹3000' },
          { value: '3000+', label: '₹3000+' }
        ]}
      ]
    }
  ]
};