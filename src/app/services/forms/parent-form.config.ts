import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const parentFormConfig: ServiceFormConfig = {
  serviceType: 'parent',
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
        { id: 'experience', type: 'select', label: 'Years of Experience in Child Care', required: true, options: [
          { value: '0-1', label: '0-1 years' },
          { value: '1-3', label: '1-3 years' },
          { value: '3-5', label: '3-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { id: 'qualifications', type: 'checkbox', label: 'Qualifications & Certifications', required: true, options: [
          { value: 'child-psychology', label: 'Child Psychology' },
          { value: 'early-childhood', label: 'Early Childhood Education' },
          { value: 'first-aid', label: 'First Aid Certified' },
          { value: 'parenting-course', label: 'Parenting Course' },
          { value: 'counseling', label: 'Counseling Certification' },
          { value: 'education', label: 'Education Background' }
        ]},
        { id: 'services', type: 'checkbox', label: 'Services You Provide', required: true, options: [
          { value: 'parenting-guidance', label: 'Parenting Guidance' },
          { value: 'child-behavior', label: 'Child Behavior Management' },
          { value: 'homework-help', label: 'Homework Help' },
          { value: 'activity-planning', label: 'Activity Planning' },
          { value: 'nutrition-guidance', label: 'Nutrition Guidance' },
          { value: 'sleep-training', label: 'Sleep Training' },
          { value: 'developmental-support', label: 'Developmental Support' },
          { value: 'emergency-care', label: 'Emergency Care' }
        ]},
        { id: 'ageGroups', type: 'checkbox', label: 'Age Groups You Work With', required: true, options: [
          { value: '0-2', label: '0-2 years (Toddlers)' },
          { value: '3-5', label: '3-5 years (Preschool)' },
          { value: '6-10', label: '6-10 years (School Age)' },
          { value: '11-15', label: '11-15 years (Teens)' },
          { value: '16+', label: '16+ years (Young Adults)' }
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
      title: 'Child Information & Requirements',
      fields: [
        { id: 'childAge', type: 'select', label: 'Child Age Group', required: true, options: [
          { value: '0-2', label: '0-2 years (Toddler)' },
          { value: '3-5', label: '3-5 years (Preschool)' },
          { value: '6-10', label: '6-10 years (School Age)' },
          { value: '11-15', label: '11-15 years (Teen)' },
          { value: '16+', label: '16+ years (Young Adult)' }
        ]},
        { id: 'numberOfChildren', type: 'select', label: 'Number of Children', required: true, options: [
          { value: '1', label: '1 child' },
          { value: '2', label: '2 children' },
          { value: '3', label: '3 children' },
          { value: '4+', label: '4+ children' }
        ]},
        { id: 'supportNeeded', type: 'checkbox', label: 'Support Needed', required: true, options: [
          { value: 'parenting-guidance', label: 'Parenting Guidance' },
          { value: 'child-behavior', label: 'Child Behavior Management' },
          { value: 'homework-help', label: 'Homework Help' },
          { value: 'activity-planning', label: 'Activity Planning' },
          { value: 'nutrition-guidance', label: 'Nutrition Guidance' },
          { value: 'sleep-training', label: 'Sleep Training' },
          { value: 'developmental-support', label: 'Developmental Support' },
          { value: 'emergency-care', label: 'Emergency Care' }
        ]},
        { id: 'specificConcerns', type: 'textarea', label: 'Specific Concerns or Requirements', placeholder: 'Please describe any specific concerns or requirements...', required: false },
        { id: 'frequency', type: 'select', label: 'Support Frequency', required: true, options: [
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'bi-weekly', label: 'Bi-weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'as-needed', label: 'As Needed' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/hour)', required: true, options: [
          { value: '300-500', label: '₹300 - ₹500' },
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000+', label: '₹2000+' }
        ]}
      ]
    }
  ]
};