import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../providers/models/Login.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../providers/models/LoginResponse.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(login: Login): Observable<LoginResponse> {
    return this.http.post('login', login);
  }
}
