import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Comment } from '../models/comment.model';
import { catchError } from 'rxjs/operators';
import { ApiConfig } from '../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient, private apiConfig: ApiConfig) {}

  getComments(): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(
        this.apiConfig.backend.endpoints.baseUrl +
          this.apiConfig.backend.endpoints.comments
      )
      .pipe(catchError((error) => throwError(error)));
  }
}
