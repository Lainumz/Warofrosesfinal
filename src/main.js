// /src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el archivo de configuración de Vue Router

createApp(App).use(router).mount('#app');

