import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default redirect
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  
  // Auth routes
  {
    path: 'sign-in',
    loadComponent: () => import('./auth/components/sign-in/sign-in.component').then(c => c.SignInComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./auth/components/sign-up/sign-up.component').then(c => c.SignUpComponent)
  },
  {
    path: 'parent-registration',
    loadComponent: () => import('./auth/components/parent-registration/parent-registration').then(c => c.ParentRegistrationComponent)
  },
  {
    path: 'teacher-registration',
    loadComponent: () => import('./auth/components/teacher-registration/teacher-registration').then(c => c.TeacherRegistration)
  },
  {
    path: 'parent-profiles',
    loadComponent: () => import('./auth/components/parent-profiles/parent-profiles').then(c => c.ParentProfilesComponent)
  },
  {
    path: 'subject-teachers',
    loadComponent: () => import('./auth/components/subject-teachers/subject-teachers').then(c => c.SubjectTeachersComponent)
  },
  
  // Protected routes
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  
  // Wildcard route - should be last
  {
    path: '**',
    redirectTo: '/sign-in'
  }
];