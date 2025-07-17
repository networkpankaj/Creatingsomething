import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const yogaFormConfig: ServiceFormConfig = {
  serviceType: 'yoga',
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
        { id: 'experience', type: 'select', label: 'Years of Teaching Experience', required: true, options: [
          { value: '0-1', label: '0-1 years' },
          { value: '1-3', label: '1-3 years' },
          { value: '3-5', label: '3-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { id: 'practiceExperience', type: 'select', label: 'Years of Personal Practice', required: true, options: [
          { value: '1-2', label: '1-2 years' },
          { value: '2-5', label: '2-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10-15', label: '10-15 years' },
          { value: '15+', label: '15+ years' }
        ]},
        { id: 'certifications', type: 'checkbox', label: 'Certifications & Training', required: true, options: [
          { value: 'ryt-200', label: 'RYT 200 (Registered Yoga Teacher)' },
          { value: 'ryt-500', label: 'RYT 500 (Advanced Certification)' },
          { value: 'prenatal-yoga', label: 'Prenatal Yoga Certified' },
          { value: 'kids-yoga', label: 'Kids Yoga Certified' },
          { value: 'senior-yoga', label: 'Senior Yoga Certified' },
          { value: 'therapeutic-yoga', label: 'Therapeutic Yoga' },
          { value: 'meditation-teacher', label: 'Meditation Teacher' },
          { value: 'ayurveda-training', label: 'Ayurveda Training' },
          { value: 'traditional-guru', label: 'Traditional Guru Training' },
          { value: 'self-practiced', label: 'Self-Practiced Expert' }
        ]},
        { id: 'yogaStyles', type: 'checkbox', label: 'Yoga Styles You Teach', required: true, options: [
          { value: 'hatha', label: 'Hatha Yoga' },
          { value: 'vinyasa', label: 'Vinyasa Flow' },
          { value: 'ashtanga', label: 'Ashtanga Yoga' },
          { value: 'bikram', label: 'Bikram/Hot Yoga' },
          { value: 'yin', label: 'Yin Yoga' },
          { value: 'kundalini', label: 'Kundalini Yoga' },
          { value: 'iyengar', label: 'Iyengar Yoga' },
          { value: 'restorative', label: 'Restorative Yoga' },
          { value: 'power-yoga', label: 'Power Yoga' },
          { value: 'prenatal', label: 'Prenatal Yoga' },
          { value: 'kids-yoga', label: 'Kids Yoga' },
          { value: 'chair-yoga', label: 'Chair Yoga' }
        ]},
        { id: 'specializations', type: 'checkbox', label: 'Specializations', required: true, options: [
          { value: 'beginners', label: 'Beginner Friendly' },
          { value: 'advanced', label: 'Advanced Practice' },
          { value: 'therapeutic', label: 'Therapeutic/Healing' },
          { value: 'weight-loss', label: 'Weight Loss Focus' },
          { value: 'stress-relief', label: 'Stress Relief' },
          { value: 'flexibility', label: 'Flexibility Enhancement' },
          { value: 'strength-building', label: 'Strength Building' },
          { value: 'meditation', label: 'Meditation & Mindfulness' },
          { value: 'pranayama', label: 'Pranayama (Breathing)' },
          { value: 'spiritual', label: 'Spiritual Development' }
        ]},
        { id: 'classTypes', type: 'checkbox', label: 'Class Types You Offer', required: true, options: [
          { value: 'individual', label: 'Individual Sessions' },
          { value: 'group', label: 'Group Classes' },
          { value: 'online', label: 'Online Classes' },
          { value: 'workshops', label: 'Workshops & Retreats' },
          { value: 'corporate', label: 'Corporate Sessions' },
          { value: 'family', label: 'Family Yoga' }
        ]},
        { id: 'ageGroups', type: 'checkbox', label: 'Age Groups You Teach', required: true, options: [
          { value: 'kids', label: 'Kids (5-12)' },
          { value: 'teens', label: 'Teens (13-18)' },
          { value: 'adults', label: 'Adults (19-50)' },
          { value: 'seniors', label: 'Seniors (50+)' },
          { value: 'all-ages', label: 'All Age Groups' }
        ]},
        { id: 'sessionLocation', type: 'select', label: 'Session Location', required: true, options: [
          { value: 'home', label: 'At Client Home' },
          { value: 'studio', label: 'At My Studio' },
          { value: 'outdoor', label: 'Outdoor Sessions' },
          { value: 'online', label: 'Online Sessions' },
          { value: 'all-locations', label: 'All Options Available' }
        ]},
        { id: 'equipment', type: 'select', label: 'Equipment Provided', required: true, options: [
          { value: 'full-equipment', label: 'I provide all equipment' },
          { value: 'basic-props', label: 'Basic props provided' },
          { value: 'mats-only', label: 'Yoga mats only' },
          { value: 'client-equipment', label: 'Client provides equipment' }
        ]},
        { id: 'sessionDuration', type: 'checkbox', label: 'Session Duration Options', required: true, options: [
          { value: '30-min', label: '30 minutes' },
          { value: '45-min', label: '45 minutes' },
          { value: '60-min', label: '60 minutes' },
          { value: '90-min', label: '90 minutes' },
          { value: '120-min', label: '120 minutes (Workshop)' }
        ]},
        { id: 'languages', type: 'checkbox', label: 'Languages You Teach In', required: true, options: [
          { value: 'english', label: 'English' },
          { value: 'hindi', label: 'Hindi' },
          { value: 'sanskrit', label: 'Sanskrit' },
          { value: 'tamil', label: 'Tamil' },
          { value: 'bengali', label: 'Bengali' },
          { value: 'marathi', label: 'Marathi' },
          { value: 'other', label: 'Other' }
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
      title: 'Yoga Requirements',
      fields: [
        { id: 'age', type: 'select', label: 'Age Group', required: true, options: [
          { value: 'kids', label: 'Kids (5-12)' },
          { value: 'teens', label: 'Teens (13-18)' },
          { value: 'adults', label: 'Adults (19-50)' },
          { value: 'seniors', label: 'Seniors (50+)' }
        ]},
        { id: 'gender', type: 'select', label: 'Gender', required: true, options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
          { value: 'prefer-not-to-say', label: 'Prefer not to say' }
        ]},
        { id: 'experienceLevel', type: 'select', label: 'Yoga Experience Level', required: true, options: [
          { value: 'complete-beginner', label: 'Complete Beginner' },
          { value: 'beginner', label: 'Beginner (0-6 months)' },
          { value: 'intermediate', label: 'Intermediate (6 months - 2 years)' },
          { value: 'advanced', label: 'Advanced (2+ years)' },
          { value: 'expert', label: 'Expert Practitioner' }
        ]},
        { id: 'yogaGoals', type: 'checkbox', label: 'Yoga Goals', required: true, options: [
          { value: 'flexibility', label: 'Improve Flexibility' },
          { value: 'strength', label: 'Build Strength' },
          { value: 'stress-relief', label: 'Stress Relief' },
          { value: 'weight-loss', label: 'Weight Loss' },
          { value: 'meditation', label: 'Meditation & Mindfulness' },
          { value: 'spiritual-growth', label: 'Spiritual Growth' },
          { value: 'pain-relief', label: 'Pain Relief' },
          { value: 'better-sleep', label: 'Better Sleep' },
          { value: 'energy-boost', label: 'Energy Boost' },
          { value: 'general-wellness', label: 'General Wellness' }
        ]},
        { id: 'preferredStyles', type: 'checkbox', label: 'Preferred Yoga Styles', required: true, options: [
          { value: 'hatha', label: 'Hatha Yoga (Gentle)' },
          { value: 'vinyasa', label: 'Vinyasa Flow (Dynamic)' },
          { value: 'ashtanga', label: 'Ashtanga (Traditional)' },
          { value: 'bikram', label: 'Bikram/Hot Yoga' },
          { value: 'yin', label: 'Yin Yoga (Restorative)' },
          { value: 'kundalini', label: 'Kundalini (Spiritual)' },
          { value: 'power-yoga', label: 'Power Yoga (Intense)' },
          { value: 'restorative', label: 'Restorative Yoga' },
          { value: 'not-sure', label: 'Not Sure / Need Guidance' }
        ]},
        { id: 'healthConditions', type: 'checkbox', label: 'Health Conditions/Injuries', required: false, options: [
          { value: 'none', label: 'None' },
          { value: 'back-pain', label: 'Back Pain' },
          { value: 'neck-pain', label: 'Neck Pain' },
          { value: 'knee-problems', label: 'Knee Problems' },
          { value: 'wrist-issues', label: 'Wrist Issues' },
          { value: 'shoulder-pain', label: 'Shoulder Pain' },
          { value: 'high-blood-pressure', label: 'High Blood Pressure' },
          { value: 'diabetes', label: 'Diabetes' },
          { value: 'heart-condition', label: 'Heart Condition' },
          { value: 'pregnancy', label: 'Pregnancy' },
          { value: 'arthritis', label: 'Arthritis' },
          { value: 'other', label: 'Other (specify in notes)' }
        ]},
        { id: 'fitnessLevel', type: 'select', label: 'Overall Fitness Level', required: true, options: [
          { value: 'low', label: 'Low Fitness' },
          { value: 'moderate', label: 'Moderate Fitness' },
          { value: 'good', label: 'Good Fitness' },
          { value: 'excellent', label: 'Excellent Fitness' }
        ]},
        { id: 'classType', type: 'select', label: 'Preferred Class Type', required: true, options: [
          { value: 'individual', label: 'Individual Sessions' },
          { value: 'small-group', label: 'Small Group (2-5 people)' },
          { value: 'group', label: 'Group Classes' },
          { value: 'online', label: 'Online Classes' },
          { value: 'family', label: 'Family Yoga' }
        ]},
        { id: 'sessionFrequency', type: 'select', label: 'Session Frequency', required: true, options: [
          { value: 'daily', label: 'Daily' },
          { value: 'alternate-days', label: 'Alternate Days' },
          { value: '3-times-week', label: '3 times a week' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'bi-weekly', label: 'Bi-weekly' },
          { value: 'monthly', label: 'Monthly' },
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
          { value: 'early-morning', label: 'Early Morning (5-7 AM)' },
          { value: 'morning', label: 'Morning (7-10 AM)' },
          { value: 'late-morning', label: 'Late Morning (10-12 PM)' },
          { value: 'afternoon', label: 'Afternoon (12-5 PM)' },
          { value: 'evening', label: 'Evening (5-8 PM)' },
          { value: 'night', label: 'Night (8-10 PM)' },
          { value: 'flexible', label: 'Flexible' }
        ]},
        { id: 'sessionLocation', type: 'select', label: 'Preferred Session Location', required: true, options: [
          { value: 'home', label: 'At My Home' },
          { value: 'studio', label: 'At Yoga Studio' },
          { value: 'outdoor', label: 'Outdoor (Park/Beach)' },
          { value: 'online', label: 'Online Sessions' },
          { value: 'any', label: 'Any Location' }
        ]},
        { id: 'instructorGender', type: 'select', label: 'Instructor Gender Preference', required: true, options: [
          { value: 'male', label: 'Male Instructor' },
          { value: 'female', label: 'Female Instructor' },
          { value: 'no-preference', label: 'No Preference' }
        ]},
        { id: 'languagePreference', type: 'select', label: 'Language Preference', required: true, options: [
          { value: 'english', label: 'English' },
          { value: 'hindi', label: 'Hindi' },
          { value: 'sanskrit', label: 'Sanskrit' },
          { value: 'tamil', label: 'Tamil' },
          { value: 'bengali', label: 'Bengali' },
          { value: 'marathi', label: 'Marathi' },
          { value: 'mixed', label: 'Mixed Languages' },
          { value: 'no-preference', label: 'No Preference' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/session)', required: true, options: [
          { value: '300-500', label: '₹300 - ₹500' },
          { value: '500-800', label: '₹500 - ₹800' },
          { value: '800-1200', label: '₹800 - ₹1200' },
          { value: '1200-2000', label: '₹1200 - ₹2000' },
          { value: '2000+', label: '₹2000+' }
        ]},
        { id: 'additionalRequirements', type: 'textarea', label: 'Additional Requirements/Notes', placeholder: 'Any specific requirements, injuries to be mindful of, or preferences...', required: false }
      ]
    }
  ]
};