<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" required autocomplete="current-password">
    </div>
    <div>
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" required autocomplete="current-password">
    </div>
    <button type="submit">Se Connecter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Ajoutez ici la logique de connexion avec votre API
      console.log('Connexion avec:', this.email, this.password);
    }
  }
};
</script>
