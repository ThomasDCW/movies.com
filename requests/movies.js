import axios from 'axios';

export const getMoviesRequest = () =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_api_key
    }&language=en-US&page=1&include_adult=false&query=star`
  );
export const getMoviesWithTagRequest = (tag) => axios.get(`...?=${tag}`);
