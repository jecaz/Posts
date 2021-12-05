import { Component, OnInit } from '@angular/core';
import { MockUser } from '../../../../../models/user.model';
import { MockPost } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';
import { UserService } from '../../../../../services/user.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/post-article/posts/posts.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  currentUser: MockUser;
  posts: MockPost[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
    if (this.currentUser) {
      this.posts = this.postService.getPostsByUser(this.currentUser.id);
      this.posts.forEach((post) => {
        post.postUsername = this.currentUser.username;
        if (post.sharedPost) {
          const user: MockUser = this.userService.getUserById(
            post.sharedPost.userId
          );
          post.sharedPost.postUsername = user.username;
        }
      });
    }
  }
}
