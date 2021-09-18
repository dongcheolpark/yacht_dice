import {createRouter,createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/Game',
    name: 'Game',
    component: () => import('@/views/Game.vue'),
    props: route => ({ roomid: route.query.room })
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/Game.vue'),
    props: route => ({ roomid: route.query.room })
  },
];

export const router = createRouter({
  history : createWebHistory(),
  routes,
});