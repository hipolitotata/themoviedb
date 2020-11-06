import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const api_key = 'b3ae935b9455b0de57614f62a7a8594c';

export default api;
