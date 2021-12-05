import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MockUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../styles/dashboard/dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('backToTop') sectionNeedToScroll: ElementRef;
  users: MockUser[];
  currentUser: MockUser;

  constructor(private userService: UserService, public router: Router) {}

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
    this.users = this.userService.getActiveUsers();
  }

  public goToSection() {
    this.sectionNeedToScroll.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  goToPage(url?: string) {
    this.router.navigate([url]);
  }
}
