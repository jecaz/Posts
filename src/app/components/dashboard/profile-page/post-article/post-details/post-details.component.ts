import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
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

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
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
