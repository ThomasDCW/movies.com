import { put, all, takeLatest, call } from 'redux-saga/effects';

import { types as typesMovies } from './movies.actions';

import { setMovies } from './movies.actions';

import {
  getMoviesRequest,
  getMoviesWithTagRequest,
} from '../../requests/movies';

export function* getMoviesSaga() {
  const { data } = yield call(getMoviesRequest);

  yield put(setMovies(data));
}

export function* getMoviesWithQuerySaga(action) {
  if (action.payload.length > 4) {
    const { data } = yield call(getMoviesWithTagRequest, action.payload);

    yield put(setPosts(data));
  }

  if (action.payload.length === 0) {
    yield getMoviesSaga();
  }
}

export function* MoviesSagas() {
  yield all([takeLatest(typesMovies.GET_MOVIES, getMoviesSaga)]);
  yield all([takeLatest(typesMovies.SET_MOVIES, getMoviesWithQuerySaga)]);
}
