import { Component } from '@angular/core';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tonic-challenge';

  constructor(private securityService: SecurityService) {}

  showLogoutButton: boolean = this.securityService.isAuthenticated();

  doLogout(): void {
    this.securityService.logout();
    this.showLogoutButton = false;
  }
}
