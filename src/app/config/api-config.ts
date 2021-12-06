export abstract class ApiConfig {
  backend?: {
    endpoints?: AppEndpoints;
  };
}

export interface AppEndpoints {
  /**
   * Base server url
   *
   */
  baseUrl?: string;
  /**
   * Get posts
   *
   */
  posts?: string;
  /**
   * Get post by id
   *
   */
  post?: string;
  /**
   * Get comments
   *
   */
  comments?: string;
  /**
   * Get users
   *
   */
  users?: string;
}
