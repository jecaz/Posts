import { Injectable } from '@angular/core';
import { ApiConfig } from '../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(private apiConfig: ApiConfig) {}

  getBaseUrl(): string {
    return this.apiConfig.backend.endpoints.baseUrl;
  }

  buildUrl(
    endpoint: string,
    attributes?: any,
    encodeVariable?: boolean
  ): string {
    let url = this.getBaseUrl();
    if (attributes) {
      const { urlParams } = attributes;
      if (attributes.urlParams) {
        for (const urlParam of Object.keys(urlParams)) {
          const placeholder = new RegExp('\\${' + urlParam + '}', 'g');
          endpoint = endpoint.replace(
            placeholder,
            encodeVariable
              ? encodeURIComponent(attributes.urlParams[urlParam])
              : attributes.urlParams[urlParam]
          );
        }
      }
    }
    return (url += endpoint);
  }
}
