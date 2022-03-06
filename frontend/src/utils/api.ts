import axios from 'axios';

import { API_URL } from './constants';

const axiosInstance = axios.create({
    baseURL: API_URL
});

export const endPoints = {
    fetchRobots: '/robots'
};

export default axiosInstance;
