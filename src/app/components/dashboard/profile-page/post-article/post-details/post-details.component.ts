import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { Ghost } from '../../../../../models/ghost.model';
import { UserService } from '../../../../../services/user.service';
import { Post } from '../../../../../models/post.model';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent implements OnInit {
  post$: Observable<Post>;
  ghostData$: Observable<Ghost>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.postService.setGhostData({ posts: new Array(1) });
    this.ghostData$ = this.postService.ghostData$;
    this.ghostData$.subscribe(console.log);
    this.post$ = this.route.params.pipe(
      pluck('id'),
      switchMap((postId) => {
        return this.postService.getPost(postId);
      }),
      mergeMap((post) => {
        return this.userService.getUser(post.userId).pipe(
          map((user) => {
            return { ...post, username: user.name };
          })
        );
      })
    );
  }
}
