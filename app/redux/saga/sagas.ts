import { call, fork, put, takeEvery } from "redux-saga/effects"
import { requestApi } from "../../api/trakt"
import { TraktEndpoints } from "../../endpoints/trakt-endpoints"
import {
  fetchRequestTrending,
  fetchRequestPopular,
  fetchTrendingSuccess,
  fetchPopularSuccess,
} from "../reducers/movie-reducer"

function* fetchTrendingMovies(action) {
  const apiCallTrending = async () => {
    try {
      const { data } = await requestApi(TraktEndpoints.trending.get())

      return data
    } catch (e) {
      console.log(e)
    }
  }

  try {
    const movies = yield call(apiCallTrending)
    yield put(fetchTrendingSuccess(movies))
  } catch (e) {
    console.warn(e)
  }
}

function* fetchPopularMovies(action) {
  const apiCallPopular = async () => {
    try {
      const { data } = await requestApi(TraktEndpoints.popular.get())

      return data
    } catch (e) {
      console.log(e)
    }
  }

  try {
    const movies = yield call(apiCallPopular)
    yield put(fetchPopularSuccess(movies))
  } catch (e) {
    console.warn(e)
  }
}

function* requestTrending() {
  yield takeEvery(fetchRequestTrending, fetchTrendingMovies)
}

function* requestPopular() {
  yield takeEvery(fetchRequestPopular, fetchPopularMovies)
}

function* moviesSagas() {
  yield fork(requestTrending)
  yield fork(requestPopular)
}

export default moviesSagas
