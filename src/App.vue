<template>
  <div id="app">
    <!-- Coloca el componente NavigationBar aquí para que esté presente en toda la aplicación -->
    <NavigationBar />

    <!-- Aquí se mostrará el componente correspondiente a la ruta actual -->
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'; // Importa el componente NavigationBar

export default {
  name: 'App',
  components: {
    NavigationBar // Registra el componente NavigationBar para su uso
  },
};
</script>

<style>
/* Estilos globales o específicos de App.vue si es necesario */
/* ... */
/* Resetea los márgenes para HTML y body */
html, body {
  margin: 0;
  padding: 0;
}

</style>



