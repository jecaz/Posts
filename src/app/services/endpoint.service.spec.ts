import { inject, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { ApiConfig } from '../config/api-config';
import { EndpointService } from './endpoint.service';

const mockBaseUrl = environment.baseUrl;

const mockApiConfig: ApiConfig = {
  backend: {
    endpoints: {
      posts: '/posts',
      post: '/posts/${id}',
      comments: '/comments',
      users: '/users',
      baseUrl: 'https://jsonplaceholder.typicode.com',
    },
  },
};

describe('EndpointService', () => {
  let service: EndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EndpointService,
        { provide: ApiConfig, useValue: mockApiConfig },
      ],
    });
    service = TestBed.inject(EndpointService);
  });

  it('should EndpointService is injected', inject(
    [EndpointService],
    (endpointService: EndpointService) => {
      expect(endpointService).toBeTruthy();
    }
  ));

  it('should get base url', () => {
    const result = service.getBaseUrl();
    expect(result).toEqual(mockBaseUrl);
  });

  it('should build url without url params', () => {
    const result = service.buildUrl('/comments');
    expect(result).toEqual(`${mockBaseUrl}/comments`);
  });

  it('should build url with params', () => {
    const mockPostId = 1;
    const url1 = service.buildUrl(
      mockApiConfig.backend.endpoints.post,
      {
        urlParams: {
          id: mockPostId,
        },
      },
      true
    );
    const url2 = service.buildUrl(mockApiConfig.backend.endpoints.post, {
      urlParams: {
        id: mockPostId,
      },
    });
    expect(url1).toBe(`${mockBaseUrl}/posts/${mockPostId}`);
    expect(url2).toBe(`${mockBaseUrl}/posts/${mockPostId}`);
  });
});
