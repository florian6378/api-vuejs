<template>
  <form @submit.prevent="deleteUser">
    <p>Voulez-vous vraiment supprimer cet utilisateur?</p>
    <button type="submit">Supprimer</button>
  </form>
</template>

<script>
export default {
  methods: {
    deleteUser() {
      // Ajoutez ici la logique de suppression de l'utilisateur avec votre API
      console.log('Suppression de l\'utilisateur');
      // Exemple de redirection après suppression (vous pouvez ajuster cela en fonction de votre application)
      this.$router.push({ name: 'UserList' });
    }
  }
};
</script>
