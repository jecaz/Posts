import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../../../../services/user.service';
import { PostService } from '../../../../../services/post.service';
import { PostsComponent } from './posts.component';

class MockPostService {
  getPostsByUser() {}
}

class MockUserService {
  getLoggedUser() {}
  getUserById() {}
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockPostService: PostService;
  let mockUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [
        { provide: PostService, useClass: MockPostService },
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockPostService = TestBed.inject(PostService);
    mockUserService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
