<template>
  <div>
    <h1>Détails de la Catégorie</h1>
    <div v-if="category">
      <p><strong>ID:</strong> {{ category.id }}</p>
      <p><strong>Titre:</strong> {{ category.title }}</p>
      <p v-if="category.description"><strong>Description:</strong> {{ category.description }}</p>
    </div>
    <router-link to="/categories">Retour à la liste des catégories</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CategoryService from '../services/CategoryService';

export default {
  data() {
    return {
      category: null
    };
  },
  async mounted() {
    const categoryId = this.$route.params.id;
    this.fetchCategory(categoryId);
  },
  methods: {
    async fetchCategory(categoryId) {
      try {
        const response = await CategoryService.getCategoryById(categoryId);
        this.category = response.data;
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    }
  }
};
</script>
