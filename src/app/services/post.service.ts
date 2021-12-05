import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockPost, Post } from '../models/post.model';
import { POSTS } from '../mockApi.data';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPostsByUser(userId: number): MockPost[] {
    return POSTS.filter((post) => post.userId === userId);
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.apiUrl + '/posts')
      .pipe(catchError((error) => throwError(error)));
  }
}
