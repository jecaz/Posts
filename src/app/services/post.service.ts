import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockPost } from '../models/post.model';
import { POSTS } from '../api.data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPostsByUser(userId: number): MockPost[] {
    return POSTS.filter((post) => post.userId === userId);
  }
}
