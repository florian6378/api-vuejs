// services/UserService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api/v1';

export default {
  async getUsers() {
    return axios.get(`${API_BASE_URL}/users`);
  },

  async getUserById(userId) {
    return axios.get(`${API_BASE_URL}/users/${userId}`);
  },

  async createUser(userData) {
    return axios.post(`${API_BASE_URL}/users`, userData);
  },

  async updateUser(userId, userData) {
    return axios.put(`${API_BASE_URL}/users/${userId}`, userData);
  },

  async deleteUser(userId) {
    return axios.delete(`${API_BASE_URL}/users/${userId}`);
  }
};
