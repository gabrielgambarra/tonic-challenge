import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../providers/models/User.model';
import {
  UserListResponse,
  UserListData,
} from '../providers/models/UserListResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getAllUsers(page?: number): Observable<UserListResponse> {
    return this.http.get<UserListResponse>('users', {
      params: {
        page: page ? page.toString() : '1',
      },
    });
  }

  public deleteUserById(id: number): Observable<any> {
    return this.http.delete(`users/${id}`);
  }

  public updateUser(id: number, userInfo: UserListData): Observable<any> {
    return this.http.put(`users/${id}`, userInfo);
  }

  public getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`users/${id}`);
  }
}
