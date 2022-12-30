import { Injectable } from '@angular/core';
import { LoginResponse } from '../providers/models/LoginResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor() {}

  public isAuthenticated(): boolean {
    if (localStorage.getItem('auth')) {
      return true;
    }

    return false;
  }

  public login(userData: LoginResponse): void {
    localStorage.setItem('auth', JSON.stringify(userData.token));
  }

  public logout(): void {
    localStorage.removeItem('auth');
  }
}
