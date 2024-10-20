<template>
  <div>
    <h1>Список пользователей</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['users']),
  },
  created() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>
