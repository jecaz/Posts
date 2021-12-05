import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ACTIVE } from "src/app/mockApi.data";
import { MockUser } from "src/app/models/user.model";
import { UserService } from "../../services/user.service";
import { DashboardComponent } from "./dashboard.component";

const mockLoggedUser = new MockUser({
  id: 1,
  username: "James Splegel",
  nickname: "Space cowboy",
  profileIcon: "../../../../assets/images/users-profile-icon.png",
  city: "San Francisco",
  country: "CA",
  state: ACTIVE,
});

class MockUserService {
  getLoggedUser() {
    return mockLoggedUser;
  }
  getUserById() {}
  getActiveUsers() {}
}

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = TestBed.inject(UserService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
