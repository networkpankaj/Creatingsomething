import { ServiceFormConfig } from '../../shared/models/form-field.model';

export const teacherFormConfig: ServiceFormConfig = {
  serviceType: 'teacher',
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
        { id: 'qualification', type: 'select', label: 'Educational Qualification', required: true, options: [
          { value: 'graduate', label: 'Graduate' },
          { value: 'post-graduate', label: 'Post Graduate' },
          { value: 'phd', label: 'PhD' },
          { value: 'diploma', label: 'Diploma' },
          { value: 'bed', label: 'B.Ed' },
          { value: 'med', label: 'M.Ed' }
        ]},
        { id: 'teachingMethod', type: 'select', label: 'Teaching Method', required: true, options: [
          { value: 'online', label: 'Online Only' },
          { value: 'offline', label: 'Home Visits' },
          { value: 'both', label: 'Both Online & Offline' }
        ]},
        { id: 'subjects', type: 'checkbox', label: 'Subjects You Teach', required: true, options: [
          { value: 'mathematics', label: 'Mathematics' },
          { value: 'science', label: 'Science' },
          { value: 'english', label: 'English' },
          { value: 'hindi', label: 'Hindi' },
          { value: 'social-studies', label: 'Social Studies' },
          { value: 'physics', label: 'Physics' },
          { value: 'chemistry', label: 'Chemistry' },
          { value: 'biology', label: 'Biology' },
          { value: 'computer', label: 'Computer Science' },
          { value: 'economics', label: 'Economics' }
        ]},
        { id: 'gradeLevel', type: 'checkbox', label: 'Grade Levels You Teach', required: true, options: [
          { value: '1-5', label: 'Class 1-5' },
          { value: '6-8', label: 'Class 6-8' },
          { value: '9-10', label: 'Class 9-10' },
          { value: '11-12', label: 'Class 11-12' },
          { value: 'college', label: 'College Level' }
        ]},
        { id: 'hourlyRate', type: 'number', label: 'Hourly Rate (₹)', placeholder: '500', required: true },
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
      title: 'Student Information',
      fields: [
        { id: 'studentName', type: 'text', label: 'Student Name', placeholder: 'Enter student name', required: true },
        { id: 'studentGrade', type: 'select', label: 'Student Grade/Class', required: true, options: [
          { value: '1-5', label: 'Class 1-5' },
          { value: '6-8', label: 'Class 6-8' },
          { value: '9-10', label: 'Class 9-10' },
          { value: '11-12', label: 'Class 11-12' },
          { value: 'college', label: 'College Level' }
        ]},
        { id: 'subjectsNeeded', type: 'checkbox', label: 'Subjects Needed', required: true, options: [
          { value: 'mathematics', label: 'Mathematics' },
          { value: 'science', label: 'Science' },
          { value: 'english', label: 'English' },
          { value: 'hindi', label: 'Hindi' },
          { value: 'social-studies', label: 'Social Studies' },
          { value: 'physics', label: 'Physics' },
          { value: 'chemistry', label: 'Chemistry' },
          { value: 'biology', label: 'Biology' },
          { value: 'computer', label: 'Computer Science' },
          { value: 'economics', label: 'Economics' }
        ]},
        { id: 'teachingMode', type: 'select', label: 'Preferred Teaching Mode', required: true, options: [
          { value: 'online', label: 'Online Classes' },
          { value: 'home', label: 'Home Tuition' },
          { value: 'both', label: 'Both Options' }
        ]},
        { id: 'sessionFrequency', type: 'select', label: 'Session Frequency', required: true, options: [
          { value: 'daily', label: 'Daily' },
          { value: 'alternate', label: 'Alternate Days' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'bi-weekly', label: 'Bi-weekly' }
        ]},
        { id: 'budget', type: 'select', label: 'Budget Range (₹/hour)', required: true, options: [
          { value: '200-500', label: '₹200 - ₹500' },
          { value: '500-1000', label: '₹500 - ₹1000' },
          { value: '1000-2000', label: '₹1000 - ₹2000' },
          { value: '2000+', label: '₹2000+' }
        ]}
      ]
    }
  ]
};