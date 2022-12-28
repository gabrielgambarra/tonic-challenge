import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Register } from '../providers/models/Register.model';
import { RegisterResponse } from '../providers/models/RegisterResponse.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public register(registerForm: Register): Observable<RegisterResponse> {
    return this.http.post('register', registerForm);
  }
}
