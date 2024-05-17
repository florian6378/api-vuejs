<template>
  <div>
    <h1>Détails du Produit</h1>
    <div v-if="product">
      <p><strong>ID:</strong> {{ product.id }}</p>
      <p><strong>Nom:</strong> {{ product.name }}</p>
      <p v-if="product.description"><strong>Description:</strong> {{ product.description }}</p>
      <p><strong>Prix:</strong> {{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
    </div>
    <router-link to="/products">Retour à la liste des produits</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from '../services/ProductService';

export default {
  data() {
    return {
      product: null
    };
  },
  async mounted() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId);
  },
  methods: {
    async fetchProduct(productId) {
      try {
        const response = await ProductService.getProductById(productId);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
};
</script>
