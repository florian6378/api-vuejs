<template>
  <form @submit.prevent="createUser">
    <div>
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <!-- Ajoutez d'autres champs de création ici -->
    <button type="submit">Créer Utilisateur</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    createUser() {
      // Ajoutez ici la logique de création de l'utilisateur avec votre API
      console.log('Création de l\'utilisateur avec:', this.name, this.email, this.password);
    }
  }
};
</script>
