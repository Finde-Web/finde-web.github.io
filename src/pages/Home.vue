<template>
  <div class="background"> <video autoplay muted loop playsinline>
      <source :src="bgVideo" type="video/mp4" />
    </video>
    <div class="content">
      <h1 class="titulo-video">FINDE AWARDS 2025</h1>
      <p class="sub-titulo">O mais aguardado voltou</p> <button>Veja sobre</button>
    </div>
  </div>
  <section>
    <h2 class="titulo">Quem nós somos</h2>
    <div class="duas-colunas">
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa voluptas asperiores aliquid possimus
          tempora ducimus necessitatibus corrupti delectus exercitationem dolorum maxime quidem voluptatibus doloremque
          eligendi, vitae obcaecati quia harum?</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, saepe. Ad earum qui consectetur quae
          dignissimos, possimus aperiam incidunt perferendis id nisi nulla sequi voluptatum placeat obcaecati excepturi
          eligendi nostrum..</p>
      </div>
    </div>
  </section>
</template>
<script setup>import bgVideo from "../assets/BGNOISE.mp4"; </script>