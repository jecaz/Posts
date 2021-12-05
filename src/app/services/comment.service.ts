import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Comment } from '../models/comment.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.apiUrl + '/comments')
      .pipe(catchError((error) => throwError(error)));
  }
}
