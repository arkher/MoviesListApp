import { requestFanartApi } from "../api/fanart"
import { FanartEndpoints } from "../endpoints/fanart-endpoints"

export const FanartService = {
  getMovieImageById: async (id: number): Promise<MovieImage> => {
    const { data } = await requestFanartApi<MovieImage>(FanartEndpoints.get(id))
    return data
  },
}
