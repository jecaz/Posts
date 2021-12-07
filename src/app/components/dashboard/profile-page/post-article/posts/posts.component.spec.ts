import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../../../../services/user.service';
import { PostService } from '../../../../../services/post.service';
import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { Post } from '../../../../../models/post.model';

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

class MockPostService {
  ghostData$ = of({ posts: new Array(10) });
  posts$ = of(mockPosts);
  setGhostData() {}
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockPostService: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [{ provide: PostService, useClass: MockPostService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockPostService = TestBed.inject(PostService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
