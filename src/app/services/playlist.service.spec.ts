import { inject, TestBed } from '@angular/core/testing';
import { PLAYLIST } from '../mockApi.data';
import { PlaylistService } from './playlist.service';

const mockPlaylist = PLAYLIST;

describe('PlaylistService', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistService],
    });
    service = TestBed.inject(PlaylistService);
  });

  it('should PlaylistService is injected', inject(
    [PlaylistService],
    (playlistService: PlaylistService) => {
      expect(playlistService).toBeTruthy();
    }
  ));

  it('should be able to get playlist', () => {
    const result = service.getPlaylist();
    expect(result).toEqual(mockPlaylist);
  });
});
