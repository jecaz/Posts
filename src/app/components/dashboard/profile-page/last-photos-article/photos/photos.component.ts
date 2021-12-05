import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../../../models/photo.model';
import { PhotoService } from '../../../../../services/photo.service';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/last-photos-article/photos/photos.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photos = this.photoService.getPhotos();
  }
}
