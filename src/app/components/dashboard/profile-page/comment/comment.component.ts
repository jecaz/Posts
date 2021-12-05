import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ACTIVE_USERS } from 'src/app/mockApi.data';
import { Comment } from '../../../../models/comment.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: [
    '../../../../../styles/dashboard/profile-page/comment/comment.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  randomImageIndex: number;
  images: string[];

  constructor() {}

  ngOnInit(): void {
    this.images = ACTIVE_USERS.map((user) => user.profileIcon);
    this.randomImageIndex = Math.floor(Math.random() * this.images.length);
    this.comment.profileImage = this.images[this.randomImageIndex];
  }
}
