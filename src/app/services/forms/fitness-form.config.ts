import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const fitnessFormConfig: ServiceFormConfig = {
  serviceType: 'fitness',
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
        { id: 'experience', type: 'select', label: 'Years of Training Experience', required: true, options: [
          { value: '0-1', label: '0-1 years' },
          { value: '1-3', label: '1-3 years' },
          { value: '3-5', label: '3-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { id: 'certifications', type: 'checkbox', label: 'Certifications & Qualifications', required: true, options: [
          { value: 'certified-trainer', label: 'Certified Personal Trainer' },
          { value: 'fitness-degree', label: 'Fitness/Exercise Science Degree' },
          { value: 'nutrition-certified', label: 'Nutrition Certified' },
          { value: 'first-aid', label: 'First Aid Certified' },
          { value: 'sports-medicine', label: 'Sports Medicine' },
          { value: 'specialized-training', label: 'Specialized Training Course' },
          { value: 'self-trained', label: 'Self-Trained Expert' }
        ]},
        { id: 'specialization', type: 'checkbox', label: 'Training Specializations', required: true, options: [
          { value: 'weight-loss', label: 'Weight Loss' },
          { value: 'muscle-building', label: 'Muscle Building' },
          { value: 'strength-training', label: 'Strength Training' },
          { value: 'cardio-fitness', label: 'Cardio Fitness' },
          { value: 'functional-training', label: 'Functional Training' },
          { value: 'sports-specific', label: 'Sports Specific Training' },
          { value: 'rehabilitation', label: 'Rehabilitation Fitness' },
          { value: 'senior-fitness', label: 'Senior Fitness' },
          { value: 'youth-fitness', label: 'Youth Fitness' },
          { value: 'prenatal-fitness', label: 'Prenatal Fitness' }
        ]},
        { id: 'trainingTypes', type: 'checkbox', label: 'Training Types You Offer', required: true, options: [
          { value: 'personal-training', label: 'One-on-One Personal Training' },
          { value: 'group-training', label: 'Group Training' },
          { value: 'online-training', label: 'Online Training' },
          { value: 'home-training', label: 'Home Training' },
          { value: 'gym-training', label: 'Gym Training' },
          { value: 'outdoor-training', label: 'Outdoor Training' }
        ]},
        { id: 'equipment', type: 'select', label: 'Equipment Availability', required: true, options: [
          { value: 'full-equipment', label: 'I have full equipment' },
          { value: 'basic-equipment', label: 'Basic equipment available' },
          { value: 'bodyweight', label: 'Bodyweight training only' },
          { value: 'client-equipment', label: 'Use client equipment' },
          { value: 'gym-access', label: 'Gym access required' }
        ]},
        { id: 'ageGroups', type: 'checkbox', label: 'Age Groups You Train', required: true, options: [
          { value: 'teens', label: 'Teens (13-18)' },
          { value: 'young-adults', label: 'Young Adults (19-30)' },
          { value: 'adults', label: 'Adults (31-50)' },
          { value: 'seniors', label: 'Seniors (50+)' },
          { value: 'all-ages', label: 'All Age Groups' }
        ]},
        { id: 'sessionDuration', type: 'select', label: 'Session Duration Options', required: true, options: [
          { value: '30-min', label: '30 minutes' },
          { value: '45-min', label: '45 minutes' },
          { value: '60-min', label: '60 minutes' },
          { value: '90-min', label: '90 minutes' },
          { value: 'flexible', label: 'Flexible Duration' }
        ]},
        { id: 'sessionRate', type: 'number', label: 'Session Rate (₹/hour)', placeholder: '800', required: true },
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
      title: 'Fitness Information',
      fields: [
        { id: 'age', type: 'select', label: 'Age Group', required: true, options: [
          { value: 'teens', label: 'Teens (13-18)' },
          { value: 'young-adults', label: 'Young Adults (19-30)' },
          { value: 'adults', label: 'Adults (31-50)' },
          { value: 'seniors', label: 'Seniors (50+)' }
        ]},
        { id: 'gender', type: 'select', label: 'Gender', required: true, options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
          { value: 'prefer-not-to-say', label: 'Prefer not to say' }
        ]},
        { id: 'fitnessLevel', type: 'select', label: 'Current Fitness Level', required: true, options: [
          { value: 'beginner', label: 'Beginner' },
          { value: 'intermediate', label: 'Intermediate' },
          { value: 'advanced', label: 'Advanced' },
          { value: 'athlete', label: 'Athlete Level' }
        ]},
        { id: 'fitnessGoals', type: 'checkbox', label: 'Fitness Goals', required: true, options: [
          { value: 'weight-loss', label: 'Weight Loss' },
          { value: 'muscle-building', label: 'Muscle Building' },
          { value: 'strength-training', label: 'Strength Training' },
          { value: 'cardio-fitness', label: 'Cardio Fitness' },
          { value: 'flexibility', label: 'Flexibility & Mobility' },
          { value: 'sports-performance', label: 'Sports Performance' },
          { value: 'rehabilitation', label: 'Rehabilitation' },
          { value: 'general-fitness', label: 'General Fitness' },
          { value: 'stress-relief', label: 'Stress Relief' }
        ]},
        { id: 'healthConditions', type: 'checkbox', label: 'Health Conditions (if any)', required: false, options: [
          { value: 'none', label: 'None' },
          { value: 'back-pain', label: 'Back Pain' },
          { value: 'knee-problems', label: 'Knee Problems' },
          { value: 'heart-condition', label: 'Heart Condition' },
          { value: 'diabetes', label: 'Diabetes' },
          { value: 'blood-pressure', label: 'Blood Pressure' },
          { value: 'arthritis', label: 'Arthritis' },
          { value: 'other', label: 'Other (specify in notes)' }
        ]},
        { id: 'preferredTraining', type: 'select', label: 'Preferred Training Type', required: true, options: [
          { value: 'personal-training', label: 'One-on-One Personal Training' },
          { value: 'group-training', label: 'Group Training' },
          { value: 'online-training', label: 'Online Training' },
          { value: 'home-training', label: 'Home Training' },
          { value: 'gym-training', label: 'Gym Training' },
          { value: 'outdoor-training', label: 'Outdoor Training' }
        ]},
        { id: 'sessionFrequency', type: 'select', label: 'Session Frequency', required: true, options: [
          { value: 'daily', label: 'Daily' },
          { value: '5-days-week', label: '5 days a week' },
          { value: '3-days-week', label: '3 days a week' },
          { value: 'alternate-days', label: 'Alternate days' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'sessionDuration', type: 'select', label: 'Preferred Session Duration', required: true, options: [
          { value: '30-min', label: '30 minutes' },
          { value: '45-min', label: '45 minutes' },
          { value: '60-min', label: '60 minutes' },
          { value: '90-min', label: '90 minutes' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'preferredTime', type: 'select', label: 'Preferred Time', required: true, options: [
          { value: 'early-morning', label: 'Early Morning (5-8 AM)' },
          { value: 'morning', label: 'Morning (8-12 PM)' },
          { value: 'afternoon', label: 'Afternoon (12-5 PM)' },
          { value: 'evening', label: 'Evening (5-8 PM)' },
          { value: 'night', label: 'Night (8-11 PM)' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'trainerGender', type: 'select', label: 'Trainer Gender Preference', required: true, options: [
          { value: 'male', label: 'Male Trainer' },
          { value: 'female', label: 'Female Trainer' },
          { value: 'no-preference', label: 'No Preference' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/session)', required: true, options: [
          { value: '300-500', label: '₹300 - ₹500' },
          { value: '500-800', label: '₹500 - ₹800' },
          { value: '800-1200', label: '₹800 - ₹1200' },
          { value: '1200-2000', label: '₹1200 - ₹2000' },
          { value: '2000+', label: '₹2000+' }
        ]},
        { id: 'additionalNotes', type: 'textarea', label: 'Additional Notes', placeholder: 'Any specific requirements, injuries, or preferences...', required: false }
      ]
    }
  ]
};