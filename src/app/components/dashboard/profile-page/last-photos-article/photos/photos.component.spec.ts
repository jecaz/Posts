import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoService } from '../../../../../services/photo.service';
import { PhotosComponent } from './photos.component';

class MockPhotoService {
  getPhotos() {}
}

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let mockPhotoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [{ provide: PhotoService, useClass: MockPhotoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockPhotoService = TestBed.inject(PhotoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
