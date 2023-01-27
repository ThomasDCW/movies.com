import axios from 'axios';

export const getMoviesRequest = () =>
  axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=d28d9c1cd34fd553415b3fb5df968eb0&language=en-US&page=1&include_adult=false&query=avatar'
  );
export const getMoviesWithTagRequest = (tag) => axios.get(`...?=${tag}`);
