import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PlayItem } from '../../../../../models/play-item.model';
import { PlaylistService } from '../../../../../services/playlist.service';

@Component({
  selector: 'play-items',
  templateUrl: './play-items.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/playlist-article/play-items/play-items.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayItemsComponent implements OnInit {
  playlist: PlayItem[];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.playlist = this.playlistService.getPlaylist();
  }
}
