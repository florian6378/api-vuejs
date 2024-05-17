<!-- CategoryList.vue -->

<template>
  <div>
    <h1>Liste des Catégories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'CategoryDetails', params: { id: category.id }}">{{ category.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('/api/v1/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  }
};
</script>
