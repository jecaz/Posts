import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from '../../../../../models/post.model';
import { ApiConfig } from '../../../../../config/api-config';
import { PostDetailsComponent } from './post-details.component';
import { from, of } from 'rxjs';
import { PostService } from '../../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../services/user.service';
import { User } from '../../../../../models/user.model';
import { CommentService } from '../../../../../services/comment.service';
import { Comment } from '../../../../../models/comment.model';

const mockPosts: Post[] = [
  {
    id: 1,
    body: 'Test body 1',
    title: 'Test title 1',
    userId: 1,
    username: 'Donna Moore',
  },
  {
    id: 2,
    body: 'Test body 2',
    title: 'Test title 2',
    userId: 1,
    username: 'Donna Moore',
  },
];

const mockComments: Comment[] = [
  {
    body: 'Comment body 1',
    id: 1,
    postId: 1,
  },
];

const mockUser: User = {
  id: 1,
  name: 'test name',
  username: 'test username',
};

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

class MockPostService {
  ghostData$ = of({ posts: new Array(10) });
  posts$ = of(mockPosts);
  setGhostData() {}
  getPost() {
    return of(mockPosts[0]);
  }
}

class MockUserService {
  getUser() {
    return of(mockUser);
  }
}

class MockCommentService {
  getCommentsByPost() {
    return of(mockComments);
  }
}

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  let mockPostService: PostService;
  let mockUserService: UserService;
  let mockCommentService: CommentService;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PostDetailsComponent],
      providers: [
        { provide: ApiConfig, useValue: mockApiConfig },
        { provide: PostService, useClass: MockPostService },
        { provide: UserService, useClass: MockUserService },
        { provide: CommentService, useClass: MockCommentService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockPostService = TestBed.inject(PostService);
    mockUserService = TestBed.inject(UserService);
    mockCommentService = TestBed.inject(CommentService);
    mockActivatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
