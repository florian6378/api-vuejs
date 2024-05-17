// services/AuthService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api/v1';

export default {
  async loginUser(credentials) {
    return axios.post(`${API_BASE_URL}/login`, credentials);
  },

  async registerUser(userData) {
    return axios.post(`${API_BASE_URL}/register`, userData);
  }
};
