import { Injectable } from '@angular/core';
import { MockUser } from '../models/user.model';
import { ACTIVE_USERS, LOGGED_USER } from '../api.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getLoggedUser(): MockUser {
    return LOGGED_USER;
  }

  getActiveUsers(): MockUser[] {
    return ACTIVE_USERS;
  }

  getUserById(id: number): MockUser {
    return ACTIVE_USERS.filter((user) => user.id === id)[0];
  }
}
