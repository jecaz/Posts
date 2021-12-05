import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../../../../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/last-photos-article/photo/photo.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @Input() photo: Photo;
}
