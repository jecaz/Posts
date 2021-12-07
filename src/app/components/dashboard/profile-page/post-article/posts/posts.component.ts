import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ghost, GHOST_DATA } from '../../../../../models/ghost.model';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/post-article/posts/posts.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  // postsLoaded$: Observable<boolean>;
  ghostData$: Observable<Ghost>;
  subscription = new Subscription();
  posts = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.setGhostData(GHOST_DATA);
    this.ghostData$ = this.postService.ghostData$;
    this.posts$ = this.postService.posts$;
    // this.postsLoaded$ = this.postService.loadedPosts$;
  }
}
