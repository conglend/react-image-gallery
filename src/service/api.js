import axios from 'axios';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

export const getImages = async () => {
  return axios.get(`${apiBaseUrl}/photos?_limit=20`);
};
