import axios from 'axios';

export const getMoviesRequest = () =>
  axios.get(
    'https://api.themoviedb.org/3/trending/all/week?api_key=d28d9c1cd34fd553415b3fb5df968eb0'
  );
export const getMoviesWithTagRequest = (tag) => axios.get(`...?=${tag}`);
