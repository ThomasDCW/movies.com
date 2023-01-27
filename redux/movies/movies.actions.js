export const types = {
  GET_MOVIES: 'movies/GET_MOVIES',
  SET_MOVIES: 'movies/SET_MOVIES',
  GET_MOVIES_WITH_QUERY: 'movies/GET_MOVIES_WITH_QUERY',
  SET_MOVIES_WITH_QUERY: 'movies/SET_MOVIES_WITH_QUERY',
};

export function getMovies() {
  return {
    type: types.GET_MOVIES,
  };
}

export function setMovies(payload) {
  return {
    type: types.SET_MOVIES,
    payload,
  };
}

export function getMoviesWithQuery() {
  return {
    type: types.GET_MOVIES_WITH_QUERY,
  };
}

export function setMoviesWithQuery(payload) {
  return {
    type: types.SET_MOVIES_WITH_QUERY,
    payload,
  };
}
