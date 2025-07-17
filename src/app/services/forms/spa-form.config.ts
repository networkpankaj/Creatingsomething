import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const spaFormConfig: ServiceFormConfig = {
  serviceType: 'spa',
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
        { id: 'certifications', type: 'checkbox', label: 'Certifications & Training', required: true, options: [
          { value: 'massage-therapy', label: 'Massage Therapy Certified' },
          { value: 'spa-therapy', label: 'Spa Therapy Certified' },
          { value: 'aromatherapy', label: 'Aromatherapy Certified' },
          { value: 'reflexology', label: 'Reflexology Certified' },
          { value: 'ayurvedic', label: 'Ayurvedic Massage' },
          { value: 'thai-massage', label: 'Thai Massage' },
          { value: 'deep-tissue', label: 'Deep Tissue Massage' },
          { value: 'physiotherapy', label: 'Physiotherapy Background' },
          { value: 'self-trained', label: 'Self-Trained Expert' }
        ]},
        { id: 'specializations', type: 'checkbox', label: 'Specializations', required: true, options: [
          { value: 'relaxation', label: 'Relaxation Massage' },
          { value: 'therapeutic', label: 'Therapeutic Massage' },
          { value: 'sports-massage', label: 'Sports Massage' },
          { value: 'prenatal', label: 'Prenatal Massage' },
          { value: 'couple-massage', label: 'Couple Massage' },
          { value: 'hot-stone', label: 'Hot Stone Massage' },
          { value: 'body-scrub', label: 'Body Scrub & Exfoliation' },
          { value: 'facial-massage', label: 'Facial Massage' },
          { value: 'head-massage', label: 'Head & Scalp Massage' },
          { value: 'foot-massage', label: 'Foot Massage' }
        ]},
        { id: 'services', type: 'checkbox', label: 'Services You Provide', required: true, options: [
          { value: 'full-body-massage', label: 'Full Body Massage' },
          { value: 'partial-massage', label: 'Partial Body Massage' },
          { value: 'facial-treatment', label: 'Facial Treatments' },
          { value: 'body-wrap', label: 'Body Wrap' },
          { value: 'scrub-treatment', label: 'Scrub Treatments' },
          { value: 'aromatherapy-session', label: 'Aromatherapy Sessions' },
          { value: 'meditation-guidance', label: 'Meditation Guidance' },
          { value: 'wellness-consultation', label: 'Wellness Consultation' }
        ]},
        { id: 'clientGender', type: 'select', label: 'Client Gender Preference', required: true, options: [
          { value: 'male-only', label: 'Male Clients Only' },
          { value: 'female-only', label: 'Female Clients Only' },
          { value: 'both', label: 'Both Male & Female' },
          { value: 'same-gender', label: 'Same Gender Only' }
        ]},
        { id: 'serviceLocation', type: 'select', label: 'Service Location', required: true, options: [
          { value: 'home', label: 'At Client Home' },
          { value: 'spa-center', label: 'At My Spa/Center' },
          { value: 'both', label: 'Both Options' },
          { value: 'hotel', label: 'Hotel Services' }
        ]},
        { id: 'equipment', type: 'select', label: 'Equipment & Supplies', required: true, options: [
          { value: 'full-setup', label: 'I provide all equipment' },
          { value: 'portable-setup', label: 'Portable setup available' },
          { value: 'oils-only', label: 'Oils & supplies only' },
          { value: 'client-provides', label: 'Client provides setup' }
        ]},
        { id: 'sessionDuration', type: 'checkbox', label: 'Session Duration Options', required: true, options: [
          { value: '30-min', label: '30 minutes' },
          { value: '60-min', label: '60 minutes' },
          { value: '90-min', label: '90 minutes' },
          { value: '120-min', label: '120 minutes' },
          { value: 'custom', label: 'Custom Duration' }
        ]},
        { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '1500', required: true },
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
        { id: 'gender', type: 'select', label: 'Gender', required: true, options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
          { value: 'prefer-not-to-say', label: 'Prefer not to say' }
        ]},
        { id: 'age', type: 'select', label: 'Age Group', required: true, options: [
          { value: '18-25', label: '18-25 years' },
          { value: '26-35', label: '26-35 years' },
          { value: '36-45', label: '36-45 years' },
          { value: '46-55', label: '46-55 years' },
          { value: '55+', label: '55+ years' }
        ]},
        { id: 'therapistGender', type: 'select', label: 'Therapist Gender Preference', required: true, options: [
          { value: 'male', label: 'Male Therapist' },
          { value: 'female', label: 'Female Therapist' },
          { value: 'same-gender', label: 'Same Gender' },
          { value: 'no-preference', label: 'No Preference' }
        ]},
        { id: 'serviceType', type: 'select', label: 'Primary Service Type', required: true, options: [
          { value: 'relaxation', label: 'Relaxation & Stress Relief' },
          { value: 'therapeutic', label: 'Therapeutic/Medical' },
          { value: 'beauty-wellness', label: 'Beauty & Wellness' },
          { value: 'couples', label: 'Couples Session' },
          { value: 'special-occasion', label: 'Special Occasion' }
        ]},
        { id: 'servicesNeeded', type: 'checkbox', label: 'Services Needed', required: true, options: [
          { value: 'full-body-massage', label: 'Full Body Massage' },
          { value: 'partial-massage', label: 'Partial Body Massage' },
          { value: 'facial-treatment', label: 'Facial Treatments' },
          { value: 'body-wrap', label: 'Body Wrap' },
          { value: 'scrub-treatment', label: 'Scrub Treatments' },
          { value: 'aromatherapy-session', label: 'Aromatherapy Sessions' },
          { value: 'meditation-guidance', label: 'Meditation Guidance' },
          { value: 'wellness-consultation', label: 'Wellness Consultation' }
        ]},
        { id: 'massageType', type: 'checkbox', label: 'Massage Type Preference', required: true, options: [
          { value: 'swedish', label: 'Swedish Massage' },
          { value: 'deep-tissue', label: 'Deep Tissue' },
          { value: 'hot-stone', label: 'Hot Stone' },
          { value: 'aromatherapy', label: 'Aromatherapy' },
          { value: 'thai', label: 'Thai Massage' },
          { value: 'ayurvedic', label: 'Ayurvedic' },
          { value: 'reflexology', label: 'Reflexology' },
          { value: 'sports', label: 'Sports Massage' },
          { value: 'prenatal', label: 'Prenatal Massage' }
        ]},
        { id: 'healthConditions', type: 'checkbox', label: 'Health Conditions (if any)', required: false, options: [
          { value: 'none', label: 'None' },
          { value: 'back-pain', label: 'Back Pain' },
          { value: 'neck-pain', label: 'Neck Pain' },
          { value: 'muscle-tension', label: 'Muscle Tension' },
          { value: 'arthritis', label: 'Arthritis' },
          { value: 'sports-injury', label: 'Sports Injury' },
          { value: 'pregnancy', label: 'Pregnancy' },
          { value: 'high-blood-pressure', label: 'High Blood Pressure' },
          { value: 'diabetes', label: 'Diabetes' },
          { value: 'other', label: 'Other (specify in notes)' }
        ]},
        { id: 'allergies', type: 'checkbox', label: 'Allergies/Sensitivities', required: false, options: [
          { value: 'none', label: 'None' },
          { value: 'essential-oils', label: 'Essential Oils' },
          { value: 'nuts', label: 'Nuts/Nut Oils' },
          { value: 'fragrance', label: 'Fragrances' },
          { value: 'latex', label: 'Latex' },
          { value: 'other', label: 'Other (specify in notes)' }
        ]},
        { id: 'sessionDuration', type: 'select', label: 'Preferred Session Duration', required: true, options: [
          { value: '30-min', label: '30 minutes' },
          { value: '60-min', label: '60 minutes' },
          { value: '90-min', label: '90 minutes' },
          { value: '120-min', label: '120 minutes' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'frequency', type: 'select', label: 'Service Frequency', required: true, options: [
          { value: 'one-time', label: 'One Time' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'bi-weekly', label: 'Bi-weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'occasional', label: 'Occasional' }
        ]},
        { id: 'preferredTime', type: 'select', label: 'Preferred Time', required: true, options: [
          { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
          { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
          { value: 'evening', label: 'Evening (5 PM - 9 PM)' },
          { value: 'weekend', label: 'Weekend Only' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'serviceLocation', type: 'select', label: 'Preferred Service Location', required: true, options: [
          { value: 'home', label: 'At My Home' },
          { value: 'spa-center', label: 'At Spa/Center' },
          { value: 'hotel', label: 'At Hotel' },
          { value: 'any', label: 'Any Location' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/session)', required: true, options: [
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000-3000', label: '₹2000 - ₹3000' },
          { value: '3000-5000', label: '₹3000 - ₹5000' },
          { value: '5000-8000', label: '₹5000 - ₹8000' },
          { value: '8000+', label: '₹8000+' }
        ]},
        { id: 'specialRequests', type: 'textarea', label: 'Special Requests/Notes', placeholder: 'Any specific requirements, preferences, or areas of focus...', required: false }
      ]
    }
  ]
};