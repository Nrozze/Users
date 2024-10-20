import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Vue from 'vue';
import router from './router';
import store from './store';
import './assets/styles.scss';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
