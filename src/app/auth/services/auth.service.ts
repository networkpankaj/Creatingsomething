import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('auth-token');
    const user = localStorage.getItem('auth-user');
    if (token && user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  signIn(email: string, password: string): Observable<AuthResponse> {
    return of({
      user: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: email
      },
      token: 'demo-jwt-token'
    }).pipe(
      tap(response => {
        localStorage.setItem('auth-token', response.token);
        localStorage.setItem('auth-user', JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  signUp(userData: any): Observable<AuthResponse> {
    return of({
      user: {
        id: '2',
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
      },
      token: 'demo-jwt-token'
    });
  }

  signOut(): void {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}