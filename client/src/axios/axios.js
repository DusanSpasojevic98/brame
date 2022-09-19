
import axios from 'axios';

const token = localStorage.getItem('token');

export const axiosInstance = axios.create({
  baseURL:
    'http://localhost:8080/api',
  headers: {
    authorization: `Bearer ${token}`,
  },
});