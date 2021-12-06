import { environment } from 'src/environments/environment';
import { ApiConfig } from './api-config';

export const defaultApiConfig: ApiConfig = {
  backend: {
    endpoints: {
      posts: '/posts',
      post: '/post/',
      comments: '/comments',
      users: '/users',
      baseUrl: environment.baseUrl,
    },
  },
};
