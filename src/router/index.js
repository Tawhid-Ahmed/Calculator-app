import { createRouter, createWebHistory } from 'vue-router';
import Calculator from '@/components/Calculator.vue';
import History from '@/components/History.vue';
import Settings from '@/components/Settings.vue';

const routes = [
  { path: '/', redirect: '/calculator' },
  { path: '/calculator', component: Calculator },
  { path: '/history', component: History },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
