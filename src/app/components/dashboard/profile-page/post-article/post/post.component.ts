import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MockPost, Post } from '../../../../../models/post.model';
import { MockUser } from '../../../../../models/user.model';

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
  @Input() currentUser: MockUser;
  commentsVisibility: boolean;
}
