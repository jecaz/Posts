import { inject, TestBed } from '@angular/core/testing';
import { PHOTOS } from '../mockApi.data';
import { PhotoService } from './photo.service';

const mockPhotos = PHOTOS;

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoService],
    });
    service = TestBed.inject(PhotoService);
  });

  it('should PhotoService is injected', inject(
    [PhotoService],
    (photoService: PhotoService) => {
      expect(photoService).toBeTruthy();
    }
  ));

  it('should be able to get photos', () => {
    const result = service.getPhotos();
    expect(result).toEqual(mockPhotos);
  });
});
