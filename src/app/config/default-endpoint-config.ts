import { environment } from 'src/environments/environment';
import { ApiConfig } from './api-config';

export const defaultApiConfig: ApiConfig = {
  backend: {
    endpoints: {
      posts: '/posts',
      post: '/posts/${id}',
      comments: '/comments',
      users: '/users',
      user: '/users/${id}',
      baseUrl: environment.baseUrl,
    },
  },
};
