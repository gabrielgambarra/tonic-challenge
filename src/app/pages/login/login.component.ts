import { Component } from '@angular/core';
import { Login } from 'src/app/providers/models/Login.model';
import { LoginService } from 'src/app/services/login.service';
import { SecurityService } from 'src/app/services/security.service';
import { Form } from 'src/app/utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Form<Login> {
  loginError!: string;

  constructor(
    private loginService: LoginService,
    private securityService: SecurityService
  ) {
    super(Login);
  }

  override submitForm(): void {
    this.loginError = '';
    this.loginService.login(this.obj).subscribe(
      (res) => {
        this.securityService.login(res);
      },
      ({ error }) => {
        console.log(error);
        this.loginError = error.error;
      }
    );
  }
}
