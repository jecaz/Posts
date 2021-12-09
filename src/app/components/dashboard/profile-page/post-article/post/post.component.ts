import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Post } from '../../../../../models/post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/post-article/post/post.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post: Post;
  commentsVisibility: boolean;
}
