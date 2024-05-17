// services/ProductService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5173/api/v1';

export default {
  async getProducts() {
    return axios.get(`${API_BASE_URL}/products`);
  },

  async getProductById(productId) {
    return axios.get(`${API_BASE_URL}/products/${productId}`);
  },

  async createProduct(productData) {
    return axios.post(`${API_BASE_URL}/products`, productData);
  },

  async updateProduct(productId, productData) {
    return axios.put(`${API_BASE_URL}/products/${productId}`, productData);
  },

  async deleteProduct(productId) {
    return axios.delete(`${API_BASE_URL}/products/${productId}`);
  }
};
