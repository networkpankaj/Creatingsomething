import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  subject: string;
  rating: number;
  totalRatings: number;
  experience: number;
  classes: string[];
  isTopRated?: boolean;
  avatar?: string;
  color: string;
}

@Component({
  selector: 'app-subject-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-teachers.html',
  styleUrl: './subject-teachers.css'
})
export class SubjectTeachersComponent implements OnInit {
  selectedSubject: string = 'Mathematics';
  
  subjects: string[] = [
    'Mathematics',
    'Science',
    'English',
    'History',
    'Art'
  ];

  teachers: Teacher[] = [
    {
      id: '1',
      firstName: 'Robert',
      lastName: 'Chen',
      initials: 'RC',
      subject: 'Mathematics',
      rating: 4.8,
      totalRatings: 5,
      experience: 15,
      classes: ['Algebra', 'Calculus', 'Statistics'],
      isTopRated: true,
      color: '#6366f1'
    },
    {
      id: '2',
      firstName: 'Emily',
      lastName: 'Watson',
      initials: 'EW',
      subject: 'Mathematics',
      rating: 4.6,
      totalRatings: 5,
      experience: 12,
      classes: ['Geometry', 'Trigonometry'],
      color: '#10b981'
    },
    {
      id: '3',
      firstName: 'David',
      lastName: 'Park',
      initials: 'DP',
      subject: 'Mathematics',
      rating: 4.5,
      totalRatings: 5,
      experience: 8,
      classes: ['Pre-Algebra', 'Basic Math'],
      color: '#f59e0b'
    },
    {
      id: '4',
      firstName: 'Sarah',
      lastName: 'Johnson',
      initials: 'SJ',
      subject: 'Science',
      rating: 4.9,
      totalRatings: 5,
      experience: 10,
      classes: ['Physics', 'Chemistry'],
      isTopRated: true,
      color: '#8b5cf6'
    },
    {
      id: '5',
      firstName: 'Michael',
      lastName: 'Brown',
      initials: 'MB',
      subject: 'English',
      rating: 4.7,
      totalRatings: 5,
      experience: 12,
      classes: ['Literature', 'Writing'],
      color: '#ef4444'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  selectSubject(subject: string): void {
    this.selectedSubject = subject;
  }

  get filteredTeachers(): Teacher[] {
    return this.teachers.filter(teacher => teacher.subject === this.selectedSubject);
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }

  getExperienceText(years: number): string {
    return years === 1 ? '1 year' : `${years} years`;
  }

  getClassesText(classes: string[]): string {
    if (classes.length <= 2) {
      return classes.join(', ');
    }
    return `${classes.slice(0, 2).join(', ')}...`;
  }

  viewProfile(teacherId: string): void {
    console.log('Viewing profile for teacher:', teacherId);
  }
}