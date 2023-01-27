import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movies from './movies/movies.reducer';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
