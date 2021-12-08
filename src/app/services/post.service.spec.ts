import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiConfig } from '../config/api-config';
import { POSTS } from '../mockApi.data';
import { Comment } from '../models/comment.model';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { CommentService } from './comment.service';
import { EndpointService } from './endpoint.service';
import { PostService } from './post.service';
import { UserService } from './user.service';

const mockBaseUrl = 'https://jsonplaceholder.typicode.com';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'test name 1',
    username: 'test username 1',
  },
  {
    id: 2,
    name: 'test name 2',
    username: 'test username 2',
  },
];

const mockComments: Comment[] = [
  {
    body: 'Comment 1',
    id: 1,
    postId: 1,
  },
  {
    body: 'Comment 2',
    id: 2,
    postId: 1,
  },
];

const mockPosts: Post[] = [
  {
    id: 1,
    userId: 1,
  },
  {
    id: 2,
    userId: 2,
  },
];

const mockApiConfig: ApiConfig = {
  backend: {
    endpoints: {
      posts: '/posts',
      post: '/posts/${id}',
      comments: '/comments',
      users: '/users',
      baseUrl: mockBaseUrl,
    },
  },
};

class MockCommentService {
  getComments() {
    return of(mockComments);
  }
}

class MockUserService {
  getUsers() {
    return of(mockUsers);
  }
}

class MockEndpointService {
  buildUrl(endpoint: string, attributes?: any, encodeVariable?: boolean) {
    return mockBaseUrl + endpoint;
  }
}

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;
  let mockEndpointService: EndpointService;
  let mockCommentService: CommentService;
  let mockUserService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PostService,
        { provide: ApiConfig, useValue: mockApiConfig },
        { provide: EndpointService, useClass: MockEndpointService },
        { provide: CommentService, useClass: MockCommentService },
        { provide: UserService, useClass: MockUserService },
      ],
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
    mockEndpointService = TestBed.inject(EndpointService);
    mockCommentService = TestBed.inject(CommentService);
    mockUserService = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should PostService is injected', inject(
    [PostService],
    (postService: PostService) => {
      expect(postService).toBeTruthy();
    }
  ));

  it('should be able to get posts by user', () => {
    const userId = 1;
    const mockPostsByUserId = POSTS.filter((post) => post.userId === userId);
    const result = service.getPostsByUser(userId);
    expect(result).toEqual(mockPostsByUserId);
  });

  it('should be able to get posts', () => {
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    service.getPosts().subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET' && req.url === `${mockBaseUrl}/posts`;
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });

  it('should be able to get post by id', () => {
    const mockPostId = 1;
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    service.getPost(mockPostId).subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });

  it('should set ghost data', () => {
    const mockGhostData = { posts: new Array(10) };
    service.setGhostData(mockGhostData);
    service.ghostData$
      .subscribe((ghost) => expect(ghost).toEqual(mockGhostData))
      .unsubscribe();
  });

  it('should fetch posts data', () => {
    spyOn(service, 'getPosts').and.returnValue(of(mockPosts));
    spyOn(mockUserService, 'getUsers').and.callThrough();
    spyOn(mockCommentService, 'getComments').and.callThrough();
    service.fetchPosts().subscribe();
    expect(mockUserService.getUsers).toHaveBeenCalled();
    expect(mockCommentService.getComments).toHaveBeenCalled();
  });
});
