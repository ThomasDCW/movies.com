import { types as typesPosts } from './movies.actions';

const initialState = {
  allMovies: [],
  query: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case typesPosts.SET_MOVIES:
      let newAllMovies = action.payload;
      return {
        ...state,
        allMovies: newAllMovies,
      };
    case typesPosts.SET_MOVIES_WITH_QUERY:
      let newAllMoviesWithQuery = action.payload;
      return {
        ...state,
        query: newAllMoviesWithQuery,
      };

    default:
      return state;
  }
}

export default reducer;
