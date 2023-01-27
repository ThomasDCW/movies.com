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
    case typesPosts.SET_MOVIES:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
