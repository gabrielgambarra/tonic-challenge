import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/providers/models/Login.model';
import { LoginService } from 'src/app/services/login.service';
import { Form } from 'src/app/utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Form<Login> {
  constructor(private route: Router, private loginService: LoginService) {
    super(Login);
  }

  override submitForm(): void {
    this.loginService.login(this.obj).subscribe(
      (res) => {
        localStorage.setItem('auth', JSON.stringify(res));
        this.route.navigate(['/']);
      },
      ({ error }) => {
        console.log(error);
      }
    );
  }
}
