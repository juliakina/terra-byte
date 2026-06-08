import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.onrender.com',
    timeout: 10000,
});