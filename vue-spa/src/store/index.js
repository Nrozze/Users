import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      commit('setUsers', response.data);
    },
    async fetchUser({ commit }, userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      commit('setCurrentUser', response.data);
    },
  },
});
