import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { PlayItem } from '../../../../../models/play-item.model';

@Component({
  selector: 'app-play-item',
  templateUrl: './play-item.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/playlist-article/play-item/play-item.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayItemComponent {
  @Input() playitem: PlayItem;
}
