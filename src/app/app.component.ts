import { Component, OnInit } from '@angular/core';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tonic-challenge';
  showLogoutButton: boolean = false;

  constructor(private securityService: SecurityService) {
    this.securityService.showLogoutButtonChange.subscribe((value) => {
      this.showLogoutButton = value;
    });
  }

  ngOnInit(): void {
    this.showLogoutButton = this.securityService.isAuthenticated();
  }

  doLogout(): void {
    this.securityService.logout();
    this.showLogoutButton = false;
  }
}
