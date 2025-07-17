import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private deferredPrompt: any;
  private isInstalledSubject = new BehaviorSubject<boolean>(false);
  public isInstalled$ = this.isInstalledSubject.asObservable();

  constructor() {
    this.initializePWA();
  }

  private initializePWA(): void {
    // Check if app is already installed
    if (this.isStandalone()) {
      this.isInstalledSubject.next(true);
    }

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      console.log('PWA install prompt available');
    });

    // Listen for appinstalled event
    window.addEventListener('appinstalled', () => {
      this.isInstalledSubject.next(true);
      this.deferredPrompt = null;
      console.log('PWA installed successfully');
    });
  }

  private isStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any).standalone === true;
  }

  canInstall(): boolean {
    return !!this.deferredPrompt;
  }

  isInstalled(): boolean {
    return this.isInstalledSubject.value;
  }

  async installPwa(): Promise<boolean> {
    if (!this.deferredPrompt) {
      console.log('No install prompt available');
      return false;
    }

    try {
      this.deferredPrompt.prompt();
      const choiceResult = await this.deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA install prompt');
        this.deferredPrompt = null;
        return true;
      } else {
        console.log('User dismissed the PWA install prompt');
        return false;
      }
    } catch (error) {
      console.error('Error during PWA installation:', error);
      return false;
    }
  }

  // Get install prompt for manual handling
  getInstallPrompt(): any {
    return this.deferredPrompt;
  }

  // Clear the install prompt
  clearInstallPrompt(): void {
    this.deferredPrompt = null;
  }
}