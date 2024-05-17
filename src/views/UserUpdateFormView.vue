<template>
  <form @submit.prevent="updateUser">
    <div>
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <!-- Ajoutez d'autres champs de mise à jour ici -->
    <button type="submit">Mettre à Jour</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    updateUser() {
      // Ajoutez ici la logique de mise à jour de l'utilisateur avec votre API
      console.log('Mise à jour de l\'utilisateur avec:', this.name, this.email);
    }
  }
};
</script>
