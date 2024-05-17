<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    
    <!-- Onglets pour se connecter, créer et supprimer -->
    <div class="tabs">
      <router-link to="/users/login" :class="{ 'active': currentTab === 'login' }">Se Connecter</router-link>
      <router-link to="/users/create" :class="{ 'active': currentTab === 'create' }">Créer</router-link>
      <!-- Vous pouvez retirer le lien de mise à jour -->
      <!--<router-link to="/users/:id/update" :class="{ 'active': currentTab === 'update' }">Mettre à Jour</router-link>-->
      <router-link to="/users/:id/delete" :class="{ 'active': currentTab === 'delete' }">Supprimer</router-link>
    </div>
    
    <!-- Contenu des onglets -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'login' // Onglet actif par défaut
    };
  }
};
</script>

<style scoped>
/* Styles des onglets */
.tabs {
  display: flex;
}

.tabs .router-link-exact-active {
  font-weight: bold;
}
</style>
