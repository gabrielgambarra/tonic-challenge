import { Injectable } from '@angular/core';

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

  public logout(): void {
    localStorage.removeItem('auth');
  }
}
