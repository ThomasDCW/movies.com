export const types = {
  GET_MOVIES: 'movies/GET_MOVIES',
  SET_MOVIES: 'movies/SET_MOVIES',
  SET_QUERY: 'movies/SET_QUERY',
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

export function setQuery(payload) {
  return {
    type: types.SET_QUERY,
    payload,
  };
}
