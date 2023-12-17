<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap">
  <div>
    <h1 class="biblio">Bibliography</h1>
    <p class="youtube">F. H. (2017, February 21). Feature History - War of the Roses. YouTube.</p>
    <div class="video-container">
      <div class="video-wrapper">
        <iframe width="1000" height="540" src="https://www.youtube.com/embed/8usSAMpuSVI" frameborder="0"
          allowfullscreen></iframe>
      </div>
    </div>
    <br>
    <br>

    <!-- Enlaces clicables -->
    <ul class="uli">
      <li>- Cartwright, M. (2023, October 11). <a
          href="https://www.worldhistory.org/article/1504/the-wars-of-the-roses-consequences--effects/"
          target="_blank">The Wars of the Roses: Consequences & Effects. World History Encyclopedia.</a></li>
      <li>- Wars of the Roses. (2023, December 12). <a
          href="https://en.wikipedia.org/wiki/Wars_of_the_Roses#Initial_phase_of_conflict_(1377%E2%80%931399)"
          target="_blank">Wikipedia.</a></li>
      <li>- Wars of the Roses | Summary, History, Family Tree, & Facts. (2023, December 5). <a
          href="https://www.britannica.com/event/Wars-of-the-Roses" target="_blank">Encyclopedia Britannica.</a></li>
      <li>- Causes of the Wars of the Roses | Schoolshistory.org.uk. (2019, August 7). <a
          href="https://schoolshistory.org.uk/topics/british-history/wars-of-the-roses/causes-of-the-wars-of-the-roses/"
          target="_blank">Schoolshistory.org.uk.</a></li>
      <li>- Wars of the Roses - Winner, Family Tree & England | HISTORY. (2009, November 9). <a
          href="https://www.history.com/topics/european-history/wars-of-the-roses" target="_blank">HISTORY.</a></li>
      <li>- Cartwright, M. (2023, October 11). <a href="https://www.worldhistory.org/Wars_of_the_Roses/"
          target="_blank">Wars of the Roses. World History Encyclopedia.</a></li>
      <li>- Mason, E. (2023, November 8). <a
          href="https://www.historyextra.com/period/medieval/wars-of-the-roses-york-lancaster-henry-tudor-vi-who-what-when-facts-how-long/"
          target="_blank">The Wars of the Roses: the 15th-century clash of kings that heralded the dawn of the Tudor
          dynasty.</a></li>
    </ul>
    <br>
    <p class="youtube">More on the resemblance of “The wars of roses” and the TV show “Game of Thrones”:
      TED-Ed [@TEDEd]. (2015, mayo 11). The wars that inspired Game of Thrones - Alex Gendler. Youtube.</p>
      <div class="video-container">
    <div class="video-wrapper">
      <a class="youtuf larger-link" href="https://www.youtube.com/watch?v=VjO55pKuBo4" target="_blank">https://www.youtube.com/watch?v=VjO55pKuBo4</a>
    </div>
  </div>
  </div>
</template>

<style>

    /* Puedes ajustar el tamaño de fuente en la clase .larger-link */
    .larger-link {
      font-size: 1.5rem; /* Cambia este valor al tamaño deseado */
      font-family: 'Noto Serif', serif;

    }
/* Estilos para la vista de Bibliography */
/* ... tus estilos ... */

/* Estilos para el contenedor del video */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* Espacio opcional arriba del video */
}

.video-wrapper {
  position: relative;
}

.video-wrapper iframe {
  width: 970px;
  /* Ancho del video */
  height: 540px;
  /* Altura del video */
}

.youtube {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
  /* Espacio opcional arriba del texto */
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  /* Espacio opcional arriba de la lista */
}

li {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
}

a {
  color: blue;
  /* Color de los enlaces */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  /* Efecto de subrayado al pasar el ratón */
}

.biblio {
  text-align: center;
  font-size: 4rem;
}

/* Estilos para el componente Vue */
.youtube {
  font-family: 'Noto Serif', serif;
  /* Otros estilos */
}

/* Estilos para la lista */
.uli {
  font-family: 'Noto Serif', serif;
  /* Otros estilos */
}


</style>



  