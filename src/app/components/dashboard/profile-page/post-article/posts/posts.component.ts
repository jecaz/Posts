import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MockUser } from '../../../../../models/user.model';
import { MockPost, Post } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';
import { UserService } from '../../../../../services/user.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommentService } from '../../../../../services/comment.service';
import { Comment } from '../../../../../models/comment.model';
import { BADGES } from 'src/app/mockApi.data';

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
  mockPosts: MockPost[];
  posts$: Observable<Post[]>;
  subscription = new Subscription();

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
    if (this.currentUser) {
      this.mockPosts = this.postService.getPostsByUser(this.currentUser.id);
    }
    this.subscription.add(
      forkJoin([
        this.postService.getPosts(),
        this.commentService.getComments(),
        this.userService.getUsers(),
      ])
        .pipe(
          tap((results) => {
            results[0].forEach((post: Post, index) => {
              const comments: Comment[] = results[1].filter(
                (comment) => comment.postId === post.id
              );
              if (comments.length > 0) {
                post.comments = comments;
              }
              post.timeAgo = ++index;
              post.badges = this.mockPosts[0].badges;
              post.likes = this.mockPosts[0].likes;
              post.username = results[2].find(
                (user) => user.id === post.userId
              ).name;
            });
            this.posts$ = of(results[0]);
            this.changeDetector.detectChanges();
          })
        )
        .subscribe()
    );
  }
}
