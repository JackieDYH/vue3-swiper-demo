/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-12-28 15:07:05
 * @LastEditors: Jackie
 * @Description: router
 * @FilePath: /vue3-swiper-demo/src/router/index.js
 * @version:
 */
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('../views/ScrollView.vue')
  },
  {
    path: '/scroll2',
    name: 'scroll2',
    component: () => import('../views/ScrollView2.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
