import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Menu from '@/pages/Menu/Menu.vue';
import Breakfast from '@/pages/Breakfast/Breakfast.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'homepage', component: Home },
    { path: '/menu', name: 'menu', component: Menu },
    { path: '/:type(breakfast|hot|salad|dessert|cocktail|wine|beer|non|)', name: 'food-category', component: Breakfast },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});
