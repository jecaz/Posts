import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MockUser } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    '../../../../styles/dashboard/profile-page/profile-page.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  currentUser: MockUser;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
  }
}
