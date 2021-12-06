import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

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
  postsLoaded$: Observable<boolean>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.posts$;
    this.postsLoaded$ = this.postService.loadedPosts$;
  }
}
