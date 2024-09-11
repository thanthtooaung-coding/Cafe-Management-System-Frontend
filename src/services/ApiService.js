// src/services/ApiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://10.1.12.221:8080/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;