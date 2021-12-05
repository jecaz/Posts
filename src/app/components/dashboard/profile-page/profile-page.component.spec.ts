import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACTIVE } from 'src/app/api.data';
import { MockUser } from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';
import { ProfilePageComponent } from './profile-page.component';

const mockLoggedUser = new MockUser({
  id: 1,
  username: 'James Splegel',
  nickname: 'Space cowboy',
  profileIcon: '../../../../assets/images/users-profile-icon.png',
  city: 'San Francisco',
  country: 'CA',
  state: ACTIVE,
});

class MockUserService {
  getLoggedUser() {
    return mockLoggedUser;
  }
  getUserById() {}
}

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let mockUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePageComponent],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
