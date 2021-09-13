import axios from 'axios';

export const fakeAPi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
