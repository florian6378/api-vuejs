import axios from 'axios';

// Configuration de base pour axios
const apiClient = axios.create({
  baseURL: 'http://localhost:5173/', // Remplacez par l'URL de votre API
  withCredentials: false, // Changez à true si vous avez besoin d'envoyer des cookies avec chaque requête
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Intercepteurs de requête et de réponse (facultatif)
apiClient.interceptors.request.use(
  config => {
    // Ajoutez ici les configurations avant chaque requête, comme l'ajout de tokens d'authentification
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Gérez les erreurs globales ici
    return Promise.reject(error);
  }
);

export default {
  // Méthodes pour les utilisateurs
  login(user) {
    return apiClient.post('/users/login', user);
  },
  createUser(user) {
    return apiClient.post('/users/create', user);
  },
  updateUser(id, user) {
    return apiClient.put(`/users/${id}/update`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}/delete`);
  },

  // Méthodes pour les catégories
  getCategories() {
    return apiClient.get('/categories');
  },
  getCategory(id) {
    return apiClient.get(`/categories/${id}`);
  },
  createCategory(category) {
    return apiClient.post('/categories/create', category);
  },
  updateCategory(id, category) {
    return apiClient.put(`/categories/${id}/edit`, category);
  },
  deleteCategory(id) {
    return apiClient.delete(`/categories/${id}/edit`);
  },

  // Méthodes pour les produits
  getProducts() {
    return apiClient.get('/products');
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
  createProduct(product) {
    return apiClient.post('/products/create', product);
  },
  updateProduct(id, product) {
    return apiClient.put(`/products/${id}/edit`, product);
  },
  deleteProduct(id) {
    return apiClient.delete(`/products/${id}/edit`);
  }
};
