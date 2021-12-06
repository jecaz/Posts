import { Injectable } from '@angular/core';
import { MockUser, User } from '../models/user.model';
import { ACTIVE_USERS, LOGGED_USER } from '../mockApi.data';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiConfig } from '../config/api-config';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfig,
    private endpointService: EndpointService
  ) {}

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
    const url = this.endpointService.buildUrl(
      this.apiConfig.backend.endpoints.users
    );
    return this.http
      .get<User[]>(url)
      .pipe(catchError((error) => throwError(error)));
  }

  getUser(id: number) {
    const url = this.endpointService.buildUrl(
      this.apiConfig.backend.endpoints.user,
      {
        urlParams: {
          id,
        },
      },
      true
    );
    return this.http
      .get<User>(url)
      .pipe(catchError((error) => throwError(error)));
  }
}
