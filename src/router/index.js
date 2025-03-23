import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/MainPage.vue';
import About from '@/views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Web History 모드 사용
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isLoggedIn()) {
//     next({ name: 'Login' });
//   } else {
//     next();
//   }
// });

export default router;