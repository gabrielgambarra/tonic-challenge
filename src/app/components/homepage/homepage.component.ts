import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {}

  ngOnInit() {
    if (this.securityService.isAuthenticated()) {
      this.router.navigate(['/list']);
      return;
    }

    this.router.navigate(['/login']);
  }
}
