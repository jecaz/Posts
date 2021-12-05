import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Badge } from '../../../../../models/badge.model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/badge-article/badge/badge.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() badge: Badge;
}
