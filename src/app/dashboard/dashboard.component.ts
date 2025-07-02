import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Welcome to Dashboard!</h1>
      <p>You are successfully logged in.</p>
      <button (click)="logout()" class="logout-btn">Logout</button>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      text-align: center;
    }
    .logout-btn {
      padding: 0.5rem 1rem;
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.signOut();
    this.router.navigate(['/sign-in']);
  }
}