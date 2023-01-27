import { put, all, takeLatest, call } from 'redux-saga/effects';
import { types as typesMovies } from './movies.actions';
import { setMovies, setMoviesWithQuery } from './movies.actions';
import {
  getMoviesRequest,
  getMoviesWithQueryRequest,
} from '../../requests/movies';

export function* getMoviesSaga() {
  const { data } = yield call(getMoviesRequest);

  yield put(setMovies(data));
}

export function* getMoviesWithQuerySaga(action) {
  if (action.payload.length > 0) {
    const { data } = yield call(getMoviesWithQueryRequest, action.payload);
    yield put(setMoviesWithQuery(data));
  }

  if (action.payload.length === 0) {
    yield getMoviesSaga();
  }
}

export function* MoviesSagas() {
  yield all([takeLatest(typesMovies.GET_MOVIES, getMoviesSaga)]);
  yield all([
    takeLatest(typesMovies.GET_MOVIES_WITH_QUERY, getMoviesWithQuerySaga),
  ]);
}
