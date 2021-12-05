import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistService } from '../../../../../services/playlist.service';
import { PlayItemsComponent } from './play-items.component';

class MockPlaylistService {
  getPlaylist() {}
}

describe('PlayItemsComponent', () => {
  let component: PlayItemsComponent;
  let fixture: ComponentFixture<PlayItemsComponent>;
  let mockPlaylistService: PlaylistService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayItemsComponent],
      providers: [{ provide: PlaylistService, useClass: MockPlaylistService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockPlaylistService = TestBed.inject(PlaylistService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
