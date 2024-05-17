<!-- src/views/UserUpdateForm.vue -->
<template>
  <div>
    <h2>Mettre à Jour un Utilisateur</h2>
    <form @submit.prevent="updateUser">
      <div>
        <label for="id">ID:</label>
        <input type="text" v-model="id" required>
      </div>
      <div>
        <label for="name">Nom:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password">
      </div>
      <button type="submit">Mettre à Jour</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      id: '',
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async updateUser() {
      try {
        const response = await axios.put(`/users/${this.id}`, {
          name: this.name,
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        // Gérer la mise à jour de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
