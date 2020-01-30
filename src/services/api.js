import axios from 'axios';

const baseURL = __DEV__ ? 'localhost' : 'https://api.github.com';

const api = axios.create({
  baseURL,
});

export default api;
