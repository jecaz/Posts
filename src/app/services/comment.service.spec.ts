import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ApiConfig } from '../config/api-config';
import { CommentService } from './comment.service';
import { EndpointService } from './endpoint.service';

const mockApiConfig: ApiConfig = {
  backend: {
    endpoints: {
      posts: '/posts',
      post: '/posts/${id}',
      comments: '/comments',
      users: '/users',
    },
  },
};

const mockBaseUrl = 'https://jsonplaceholder.typicode.com';

class MockEndpointService {
  buildUrl(endpoint: string, attributes?: any, encodeVariable?: boolean) {
    return mockBaseUrl + endpoint;
  }
}

describe('CommentService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;
  let mockEndpointService: EndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CommentService,
        { provide: ApiConfig, useValue: mockApiConfig },
        { provide: EndpointService, useClass: MockEndpointService },
      ],
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
    mockEndpointService = TestBed.inject(EndpointService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should CommentService is injected', inject(
    [CommentService],
    (commentService: CommentService) => {
      expect(commentService).toBeTruthy();
    }
  ));

  it('should be able to get comments', () => {
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    service.getComments().subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET' && req.url === `${mockBaseUrl}/comments`;
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });

  it('should be able to get comments by post', () => {
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    const postId = 1;
    service.getCommentsByPost(postId).subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });
});
