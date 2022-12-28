import { Component } from '@angular/core';
import { Register } from 'src/app/providers/models/Register.model';
import { RegisterService } from 'src/app/services/register.service';
import { Form } from 'src/app/utils/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends Form<Register> {
  errorMessage = '';
  constructor(private registerService: RegisterService) {
    super(Register);
  }

  override submitForm(): void {
    this.errorMessage = '';
    this.registerService.register(this.obj).subscribe(
      (res) => {
        console.log(res);
      },
      ({ error }) => {
        this.errorMessage = error.error;
        console.log(error);
      }
    );
  }
}
