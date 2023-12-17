// /src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import RosesWarHomePage from '../components/RosesWarHomePage.vue'; // Asegúrate de importar el componente de la página de inicio
import AbstractView from '../views/AbstractView.vue'
import EssayView from '../views/EssayView.vue';
import CreditsView from '../views/CreditsView.vue';
import BibliographyView from '@/views/BibliographyView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RosesWarHomePage,
  },

  {
    path: '/abstract',
    name: 'Abstract',
    component: AbstractView
  },

  {
    path: '/essay',
    name: 'Essay',
    component: EssayView
  },

  {
    path: '/credits',
    name: 'Credits',
    component: CreditsView
  },

  {
    path: '/bibliography',
    name: 'Bibliography',
    component: BibliographyView
  }
  // Puedes agregar más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
