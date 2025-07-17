import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const beautyFormConfig: ServiceFormConfig = {
  serviceType: 'beauty',
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