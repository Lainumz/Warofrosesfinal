<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap">
  <div class="abstract-container">
    <h1 class="abstract-title">
      Abstract
    </h1>
    <p class="abstract-text">
      The Wars of the Roses developed into a social conflict for the England crown between the two royal families: “The
      Yorks” and “The Lancasters”. In this group work, we have focused on the war process and the revolts that took place.
      There will be research on the antecedents of the war and the causes that led the conflict to occur. On another hand,
      we will explore the ascension and reign of the Yorkist Edward IV between 1461 & 1483, Richard III's reign and defeat
      by Lancastrians due to the period compressed between 1483 & 1485; and the political, social, and economic
      consequences of the fights.
    </p>
    <div class="image-container">
      <img src="../assets/war1.jpg" alt="Primera imagen" class="side-by-side-image">
      <img src="../assets/horses.jpg" alt="Segunda imagen" class="side-by-side-image">
    </div>
  </div>
</template>

<style>
/* Estilos para la vista de Abstract */
.abstract-container {
  padding: 20px;
  margin: auto;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.abstract-title {
  font-size: 3.5rem;
  text-align: center;
  font-family: 'Caveat', cursive; /* Fuente Caveat */
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.abstract-text {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify;
  font-family: 'Noto Serif', serif; /* Fuente Noto Serif */
  color: #555;
}

/* Estilos adicionales para móviles */
@media screen and (max-width: 600px) {
  .abstract-container {
    padding: 15px;
  }

  .abstract-title {
    font-size: 2rem;
  }

  .abstract-text {
    font-size: 1.1rem;
  }
}

.image-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.side-by-side-image {
  width: 45%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
</style>


  