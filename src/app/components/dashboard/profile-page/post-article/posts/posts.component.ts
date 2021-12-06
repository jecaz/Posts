import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MockUser } from '../../../../../models/user.model';
import { MockPost, Post } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/post-article/posts/posts.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  currentUser: MockUser;
  mockPosts: MockPost[];
  posts$: Observable<Post[]>;
  postsLoaded$: Observable<boolean>;
  subscription = new Subscription();

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.posts$;
    this.postsLoaded$ = this.postService.loadedPosts$;
    this.subscription.add(this.postService.fetchPosts().subscribe());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
