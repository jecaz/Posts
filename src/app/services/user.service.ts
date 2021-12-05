import { Injectable } from '@angular/core';
import { MockUser, User } from '../models/user.model';
import { ACTIVE_USERS, LOGGED_USER } from '../mockApi.data';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

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
      .get<User[]>(this.apiUrl + '/users')
      .pipe(catchError((error) => throwError(error)));
  }
}
