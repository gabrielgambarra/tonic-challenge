import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginResponse } from '../providers/models/LoginResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  showLogoutButtonChange: Subject<boolean> = new Subject<boolean>();
  showLogoutButton: boolean = false;

  constructor(private route: Router) {
    this.showLogoutButtonChange.subscribe((value) => {
      this.showLogoutButton = value;
    });
  }

  public isAuthenticated() {
    if (localStorage.getItem('auth')) {
      return true;
    }

    return false;
  }

  public login(userData: LoginResponse): void {
    localStorage.setItem('auth', String(userData.token));
    this.showLogoutButton = true;
    this.showLogoutButtonChange.next(this.showLogoutButton);
    this.route.navigate(['/']);
  }

  public logout(): void {
    localStorage.removeItem('auth');
    this.route.navigate(['/']);
  }
}
