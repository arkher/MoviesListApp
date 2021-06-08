import { EndpointConfig } from '../api/fanart';
import { methods } from '../api/core/http.core';

export const FanartEndpoints = {
  get(id: number): EndpointConfig {
    return {
      method: methods.get,
      path: `/movies/${id}?api_key=ec779bf7083ba43ea6a74ba19b0e0e66`,
    };
  },
};
