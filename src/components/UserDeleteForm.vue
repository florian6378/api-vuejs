<!-- src/views/UserDeleteForm.vue -->
<template>
  <div>
    <h2>Supprimer un Utilisateur</h2>
    <form @submit.prevent="deleteUser">
      <div>
        <label for="id">ID:</label>
        <input type="text" v-model="id" required>
      </div>
      <button type="submit">Supprimer</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      id: ''
    };
  },
  methods: {
    async deleteUser() {
      try {
        const response = await axios.delete(`/users/${this.id}`);
        console.log(response.data);
        // Gérer la suppression de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
