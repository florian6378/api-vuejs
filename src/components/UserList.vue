<!-- UserList.vue -->

<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserProfile', params: { id: user.id }}">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/v1/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
};
</script>
