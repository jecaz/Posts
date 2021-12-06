import { Injectable } from '@angular/core';
import { MockUser, User } from '../models/user.model';
import { ACTIVE_USERS, LOGGED_USER } from '../mockApi.data';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiConfig } from '../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private apiConfig: ApiConfig) {}

  getLoggedUser(): MockUser {
    return LOGGED_USER;
  }

  getActiveUsers(): MockUser[] {
    return ACTIVE_USERS;
  }

  getUserById(id: number): MockUser {
    return ACTIVE_USERS.filter((user) => user.id === id)[0];
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(
        this.apiConfig.backend.endpoints.baseUrl +
          this.apiConfig.backend.endpoints.users
      )
      .pipe(catchError((error) => throwError(error)));
  }

  getUser(userId: number) {
    return this.http
      .get<User>(
        `${this.apiConfig.backend.endpoints.baseUrl}${this.apiConfig.backend.endpoints.users}/${userId}`
      )
      .pipe(catchError((error) => throwError(error)));
  }
}
