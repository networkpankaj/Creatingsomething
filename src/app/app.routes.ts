import { Routes } from '@angular/router';
// Update the import path below to the correct location of ServiceFormPageComponent
// Example: import { ServiceFormPageComponent } from './services/service-form-page/service-form-page.component';
import { ServiceFormPageComponent } from './services/pages/service-form-page/service-form-page';

export const routes: Routes = [
  // Landing page as default
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
  },
  
  // Authentication routes
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./auth/components/sign-in/sign-in.component').then(m => m.SignInComponent)
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./auth/components/sign-up/sign-up.component').then(m => m.SignUpComponent)
      },
      {
        path: 'parent-profiles',
        loadComponent: () => import('./auth/components/parent-profiles/parent-profiles').then(m => m.ParentProfilesComponent)
      },
      {
        path: 'subject-teachers',
        loadComponent: () => import('./auth/components/subject-teachers/subject-teachers').then(m => m.SubjectTeachersComponent)
      },
      {
        path: 'teacher-registration',
        loadComponent: () => import('./auth/components/teacher-registration/teacher-registration').then(m => m.TeacherRegistrationComponent)
      },
      {
        path: 'parent-registration',
        loadComponent: () => import('./auth/components/parent-registration/parent-registration').then(m => m.ParentRegistrationComponent)
      }
    ]
  },
  {
    path: 'service/:serviceKey',
    component: ServiceFormPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];