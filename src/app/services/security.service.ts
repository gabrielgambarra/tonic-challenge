import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../providers/models/LoginResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private route: Router) {}

  public isAuthenticated(): boolean {
    if (localStorage.getItem('auth')) {
      return true;
    }

    return false;
  }

  public login(userData: LoginResponse): void {
    localStorage.setItem('auth', JSON.stringify(userData.token));
    this.route.navigate(['/']);
  }

  public logout(): void {
    localStorage.removeItem('auth');
    this.route.navigate(['/']);
  }
}
