import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Comment } from '../models/comment.model';
import { catchError } from 'rxjs/operators';
import { ApiConfig } from '../config/api-config';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfig,
    private endpointService: EndpointService
  ) {}

  getComments(): Observable<Comment[]> {
    const url = this.endpointService.buildUrl(
      this.apiConfig.backend.endpoints.comments
    );
    return this.http
      .get<Comment[]>(url)
      .pipe(catchError((error) => throwError(error)));
  }
}
