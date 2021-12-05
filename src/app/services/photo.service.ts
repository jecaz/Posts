import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PHOTOS } from '../mockApi.data';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  getPhotos(): Photo[] {
    return PHOTOS;
  }
}
