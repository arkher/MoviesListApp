import { requestApi } from "../api/trakt"
import { TraktEndpoints } from "../endpoints/trakt-endpoints"

export const TraktService = {
  getTrendingMovies: async (): Promise<FilmContent[]> => {
    const { data } = await requestApi<FilmContent[]>(TraktEndpoints.trending.get())
    return data
  },
  getPopularMovies: async (): Promise<Movie[]> => {
    const { data } = await requestApi<Movie[]>(TraktEndpoints.popular.get())
    return data
  },
}
