<!-- ProductList.vue -->

<template>
  <div>
    <h1>Liste des Produits</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('/api/v1/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>
