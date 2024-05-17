<!-- src/views/UserCreateForm.vue -->
<template>
  <div>
    <h2>Créer un Utilisateur</h2>
    <form @submit.prevent="createUser">
      <div>
        <label for="name">Nom:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" autocomplete="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
         <input type="password" id="password" v-model="user.password" autocomplete="current-password" required>
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await axios.post('/users', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        // Gérer la création de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
