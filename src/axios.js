import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/wordpress/wp-json',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;