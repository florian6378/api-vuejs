<!-- src/views/LoginForm.vue -->
<template>
  <div>
    <h2>Se Connecter</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" autocomplete="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" autocomplete="current-password" required>
      </div>
      <button type="submit">Se Connecter</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/login', {
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        // Gérer la connexion de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
