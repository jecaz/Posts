import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ApiConfig } from '../config/api-config';
import { ACTIVE, ACTIVE_USERS } from '../mockApi.data';
import { MockUser } from '../models/user.model';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';

const mockLoggedUser = new MockUser({
  id: 1,
  username: 'James Splegel',
  nickname: 'Space cowboy',
  profileIcon: '../../../../assets/images/users-profile-icon.png',
  city: 'San Francisco',
  country: 'CA',
  state: ACTIVE,
});

const mockActiveUser = ACTIVE_USERS;

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

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let mockEndpointService: EndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        { provide: ApiConfig, useValue: mockApiConfig },
        { provide: EndpointService, useClass: MockEndpointService },
      ],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    mockEndpointService = TestBed.inject(EndpointService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should UserService is injected', inject(
    [UserService],
    (userService: UserService) => {
      expect(userService).toBeTruthy();
    }
  ));

  it('should be able to get comments', () => {
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    service.getUsers().subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET' && req.url === `${mockBaseUrl}/users`;
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });

  it('should be able to get logged user', () => {
    const loggedUser = service.getLoggedUser();
    expect(loggedUser).toEqual(mockLoggedUser);
  });

  it('should be able to get active user', () => {
    const activeUser = service.getActiveUsers();
    expect(activeUser).toEqual(mockActiveUser);
  });

  it('should be able to get user by id from mocked api', () => {
    const userId = 1;
    const mockUserById = ACTIVE_USERS.filter((user) => user.id === userId)[0];
    const result = service.getUserById(userId);
    expect(result).toEqual(mockUserById);
  });

  it('should be able to get user by id', () => {
    spyOn(mockEndpointService, 'buildUrl').and.callThrough();
    const mockUserId = 1;
    service.getUser(mockUserId).subscribe();
    const mockReq = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });
    expect(mockEndpointService.buildUrl).toHaveBeenCalled();
    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush('');
  });
});
