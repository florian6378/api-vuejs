<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Nom de la catégorie :</label>
      <input type="text" id="name" v-model="category.name" required>
    </div>
    <button type="submit">{{ isEditing ? 'Mettre à jour' : 'Créer' }}</button>
    <button v-if="isEditing" @click.prevent="handleDelete">Supprimer</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const category = ref({
  name: ''
});
const isEditing = ref(false);

onMounted(() => {
  // Check if editing an existing category
  if (router.currentRoute.value.params.id) {
    const categoryId = router.currentRoute.value.params.id;
    // Fetch category details by ID and populate category ref
    axios.get(`/categories/${categoryId}`)
      .then(response => {
        category.value = response.data;
        isEditing.value = true;
      })
      .catch(error => {
        console.error("Error fetching category details:", error);
      });
  }
});

const handleSubmit = () => {
  if (isEditing.value) {
    // Update existing category
    axios.put(`/categories/${category.value.id}`, category.value)
      .then(() => {
        router.push('/categories');
      })
      .catch(error => {
        console.error("Error updating category:", error);
      });
  } else {
    // Create new category
    axios.post('/categories', category.value)
      .then(() => {
        router.push('/categories');
      })
      .catch(error => {
        console.error("Error creating category:", error);
      });
  }
};

const handleDelete = () => {
  // Delete category
  axios.delete(`/categories/${category.value.id}`)
    .then(() => {
      router.push('/categories');
    })
    .catch(error => {
      console.error("Error deleting category:", error);
    });
};
</script>
