import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockPost, Post } from '../models/post.model';
import { POSTS } from '../mockApi.data';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { UserService } from './user.service';
import { Comment } from '../models/comment.model';
import { ApiConfig } from '../config/api-config';
import { EndpointService } from './endpoint.service';
import { Ghost } from '../models/ghost.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // State management
  private readonly _postsSource = new BehaviorSubject<Post[]>(null);
  private readonly _loadedPostsSource = new BehaviorSubject<boolean>(false);
  private readonly _ghostDataSource = new BehaviorSubject<Ghost>(null);
  readonly posts$ = this._postsSource.asObservable();
  readonly ghostData$ = this._ghostDataSource.asObservable();
  readonly loadedPosts$ = this._loadedPostsSource.asObservable();

  constructor(
    private http: HttpClient,
    private commentService: CommentService,
    private userService: UserService,
    private endpointService: EndpointService,
    private apiConfig: ApiConfig
  ) {}

  getPostsByUser(userId: number): MockPost[] {
    return POSTS.filter((post) => post.userId === userId);
  }

  getPosts(): Observable<Post[]> {
    const url = this.endpointService.buildUrl(
      this.apiConfig.backend.endpoints.posts
    );
    return this.http
      .get<Post[]>(url)
      .pipe(catchError((error) => throwError(error)));
  }

  getPost(id: number) {
    const url = this.endpointService.buildUrl(
      this.apiConfig.backend.endpoints.post,
      {
        urlParams: {
          id,
        },
      },
      true
    );
    return this.http
      .get<Post>(url)
      .pipe(catchError((error) => throwError(error)));
  }

  // getPostsState(): Post[] {
  //   return this._postsSource.getValue();
  // }

  private setPostsState(posts: Post[]): void {
    this._postsSource.next(posts);
  }

  private setLoadedPostsState(loading: boolean): void {
    this._loadedPostsSource.next(loading);
  }

  setGhostData(ghosts: Ghost) {
    this._ghostDataSource.next(ghosts);
  }

  fetchPosts(): Observable<any> {
    return forkJoin([
      this.getPosts(),
      this.commentService.getComments(),
      this.userService.getUsers(),
    ]).pipe(
      tap((results) => {
        results[0].forEach((post: Post, index) => {
          const comments: Comment[] = results[1].filter(
            (comment) => comment.postId === post.id
          );
          // set post comments
          if (comments.length > 0) {
            post.comments = comments;
          }
          // set post username for display
          post.username = results[2].find(
            (user) => user.id === post.userId
          ).name;
          // some additional properties from mocked data
          post.timeAgo = ++index;
          post.badges = POSTS[0].badges;
          post.likes = POSTS[0].likes;
        });
        this.setPostsState(results[0]);
        this.setLoadedPostsState(true);
      })
    );
  }
}
