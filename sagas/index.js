import { all, fork } from 'redux-saga/effects';

import { MoviesSagas } from '../redux/movies/movies.saga';

function* rootSaga() {
  yield all([fork(MoviesSagas)]);
}

export default rootSaga;
