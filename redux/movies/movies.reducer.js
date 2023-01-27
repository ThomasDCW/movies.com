import { types as typesMovies } from './movies.actions';

const initialState = {
  allMovies: [],
  query: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case typesMovies.SET_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };
    case typesMovies.SET_MOVIES_WITH_QUERY:
      return {
        allMovies: action.payload,
        query: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
