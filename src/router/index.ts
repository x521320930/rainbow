import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: '登录',
    component: () => import('../views/login/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
