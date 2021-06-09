import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import movieReducer from "./redux/reducers/movie-reducer"
import mySaga from "./redux/saga/sagas"

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const rootReducer = combineReducers({
  movies: movieReducer,
})

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  })
  sagaMiddleware.run(mySaga)
  return store
}

export default createStore
