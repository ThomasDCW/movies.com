import axios from 'axios';

export const getMoviesRequest = () => axios.get('...');
export const getMoviesWithTagRequest = (tag) => axios.get(`...?=${tag}`);
