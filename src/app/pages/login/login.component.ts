import { Component, ChangeDetectorRef } from '@angular/core';
import { Login } from 'src/app/providers/models/Login.model';
import { LoginService } from 'src/app/services/login.service';
import { Form } from 'src/app/utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Form<Login> {
  constructor(private loginService: LoginService) {
    super(Login);
  }

  override submitForm(): void {
    this.loginService.login(this.obj).subscribe(
      (res) => {
        console.log(res);
      },
      ({ error }) => {
        console.log(error);
      }
    );
  }
}
