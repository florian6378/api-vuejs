// services/CategoryService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api/v1';

export default {
  async getCategories() {
    return axios.get(`${API_BASE_URL}/categories`);
  },

  async getCategoryById(categoryId) {
    return axios.get(`${API_BASE_URL}/categories/${categoryId}`);
  },

  async createCategory(categoryData) {
    return axios.post(`${API_BASE_URL}/categories`, categoryData);
  },

  async updateCategory(categoryId, categoryData) {
    return axios.put(`${API_BASE_URL}/categories/${categoryId}`, categoryData);
  },

  async deleteCategory(categoryId) {
    return axios.delete(`${API_BASE_URL}/categories/${categoryId}`);
  }
};
