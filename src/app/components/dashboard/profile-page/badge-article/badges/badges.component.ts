import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Badge } from '../../../../../models/badge.model';
import { BadgeService } from '../../../../../services/badge.service';

@Component({
  selector: 'badges',
  templateUrl: './badges.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/badge-article/badges/badges.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService) {}

  ngOnInit() {
    this.badges = this.badgeService.getBadges();
  }
}
