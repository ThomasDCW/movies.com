import axios from 'axios';

const no = '';

export const getMoviesRequest = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=d28d9c1cd34fd553415b3fb5df968eb0`
  );

export const getMoviesWithQueryRequest = (query) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=d28d9c1cd34fd553415b3fb5df968eb0&language=en-US&page=1&include_adult=false&query=${query}`
  );
