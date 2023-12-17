<template>
    <div class="credits">
      <h1 class="credits-title">Credits</h1>
      <ul class="credits-list">
        <br>
        <li class="credit-name">Irene González - 1667224</li>
        <li class="credit-name">Judith Bonilla - 1673422</li>
        <li class="credit-name">Núria Plà - 1669167</li>
        <li class="credit-name">Adrià Bagué - 1665172</li>
      </ul>
    </div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap">

  </template>
  
  <script>
  export default {
    name: 'CreditsView',
  };
  </script>
  
  <style>
/* En tu archivo CSS */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

/* Aplica la fuente 'Noto Serif' a los créditos */
.credits {
  font-family: 'Noto Serif', serif; /* Fallback a 'serif' si 'Noto Serif' no está disponible */
  text-align: center;
  margin-top: 0px;
  padding: 5vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/rooses.jpg');
  background-size: cover;
  background-position: center;
}

.credits-title {
  font-size: 3.5vw;
  color: #fff;
  margin-bottom: 3vw;
}

.credits-list {
  list-style: none;
  padding: 0;
  margin-top: 3vw;
}

.credit-name {
  font-size: 2.5vw;
  margin-bottom: 2vw;
  color: #fff;
}

  </style>
  
  
  
  
  
  