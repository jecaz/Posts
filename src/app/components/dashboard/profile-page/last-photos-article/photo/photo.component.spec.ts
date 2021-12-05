import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from 'src/app/models/photo.model';
import { PhotoComponent } from './photo.component';

const mockPhoto = new Photo({
  id: 1,
  icon: '../../../../assets/images/last-photos/lake.jpg',
});

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    component.photo = mockPhoto;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
