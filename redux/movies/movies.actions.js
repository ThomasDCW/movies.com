export const types = {
  GET_MOVIES: 'posts/GET_MOVIES',
  SET_MOVIES: 'posts/SET_MOVIES',
  SET_QUERY: 'posts/SET_QUERY',
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
