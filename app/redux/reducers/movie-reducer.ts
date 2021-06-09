import { createSlice } from "@reduxjs/toolkit"

export const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    fetchRequestPopular: () => undefined,
    fetchRequestTrending: () => undefined,
    fetchTrendingSuccess: (state, action) => {
      return { ...state, trending: action.payload }
    },
    fetchPopularSuccess: (state, action) => {
      return { ...state, popular: action.payload }
    },
    clear: (state, action) => (state = []),
  },
})

export const selectMoviesState = (state) => state.movies

export const selectTrendingMoviesState = (state) => state.movies.trending

export const selectPopularMoviesState = (state) => state.movies.popular

export const {
  fetchRequestPopular,
  fetchRequestTrending,
  fetchTrendingSuccess,
  fetchPopularSuccess,
  clear,
} = moviesSlice.actions

export default moviesSlice.reducer
