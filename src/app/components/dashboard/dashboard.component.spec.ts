import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ACTIVE } from '../../mockApi.data';
import { MockUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { DashboardComponent } from './dashboard.component';
import { ApiConfig } from '../../config/api-config';
import { of } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

const mockLoggedUser = new MockUser({
  id: 1,
  username: 'James Splegel',
  nickname: 'Space cowboy',
  profileIcon: '../../../../assets/images/users-profile-icon.png',
  city: 'San Francisco',
  country: 'CA',
  state: ACTIVE,
});

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
  posts$ = of(mockPosts);
  fetchPosts() {
    return of(mockPosts);
  }
}

class MockUserService {
  getLoggedUser() {
    return mockLoggedUser;
  }
  getActiveUsers() {}
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockUserService: UserService;
  let mockPostService: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DashboardComponent],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: PostService, useClass: MockPostService },
        { provide: ApiConfig, useValue: mockApiConfig },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = TestBed.inject(UserService);
    mockPostService = TestBed.inject(PostService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
