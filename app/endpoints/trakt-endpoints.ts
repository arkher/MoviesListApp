import { EndpointConfig } from '../api/trakt';
import { methods } from '../api/core/http.core';

export const TraktEndpoints = {
  popular: {
    get(): EndpointConfig {
      return {
        method: methods.get,
        path: '/movies/popular',
      };
    },
  },
  trending: {
    get(): EndpointConfig {
      return {
        method: methods.get,
        path: '/movies/trending',
      };
    },
  },
};
