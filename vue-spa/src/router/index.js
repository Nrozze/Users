import Vue from 'vue';
import Router from 'vue-router';
import UserList from '../components/UserList.vue';
import UserDetail from '../components/UserDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList,
    },
    {
      path: '/user/:id',
      name: 'UserDetail',
      component: UserDetail,
    },
  ],
});
