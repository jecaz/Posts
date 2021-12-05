import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MockPost } from '../../../../../models/post.model';
import { MockUser } from '../../../../../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/post-article/post/post.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post: MockPost;
  @Input() currentUser: MockUser;

  getLikeFriendsNames(post: MockPost): string {
    let names: string;
    if (post && post.likes) {
      names = post.likes[0].name + ', ' + post.likes[1].name;
    } else {
      names =
        post.sharedPost.likes[0].name + ', ' + post.sharedPost.likes[1].name;
    }
    return names;
  }
}
