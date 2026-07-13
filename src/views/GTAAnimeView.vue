<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

const isUnlocked = ref(false)

// Injeta apenas o script necessário para o funcionamento do banner nativo
useHead({
  title: 'Download GTA Anime V2 | Mod GTA San Andreas',
  meta: [
    { name: 'description', content: 'Baixar o melhor mod de GTA Anime...' }
  ],
  script: [
    {
      src: 'https://pl30353677.effectivecpmnetwork.com/99dc01b66c5068c6b6b37d04eba47b42/invoke.js',
      async: true,
      'data-cfasync': 'false',
      tagPosition: 'bodyClose'
    }
  ]
})

const handleYouTubeClick = () => {
  setTimeout(() => {
    isUnlocked.value = true
  }, 1000)
}
</script>

<template>
  <div class="page-wrapper">
    
    <!-- CONTEÚDO PRINCIPAL (CAIXINHA) -->
    <div class="container">
      <h1>Download GTA Anime 🚀</h1>
      <p>Você está prestes a baixar o melhor mod de GTA Anime para GTA San Andreas!</p>

      <!-- Passo 1: Link do YouTube -->
      <a 
        href="https://www.youtube.com/@littlesekii?sub_confirmation=1" 
        target="_blank" 
        class="btn btn-youtube"
        @click="handleYouTubeClick"
        rel="noopener noreferrer"
      >
        1. Inscrever-se no Canal (LittleSekii)
      </a>

      <!-- Passo 2: Link do Google Drive -->
      <a 
        :href="isUnlocked ? 'https://drive.google.com/file/d/1Ab-7e5yzYydgzVxb2ZWNUhL4UF1FBmda/view?usp=sharing' : undefined" 
        target="_blank" 
        class="btn btn-drive" 
        :class="{ 'active': isUnlocked }"
        rel="noopener noreferrer"
      >
        {{ isUnlocked ? '2. Baixar GTA Anime (Liberado!)' : '2. Acessar Link do Google Drive' }}
      </a>
    </div>

    <!-- BANNER NATIVO (POSICIONADO EMBAIXO DA CAIXINHA) -->
    <div class="ad-box-bottom">
      <div id="container-99dc01b66c5068c6b6b37d04eba47b42"></div>
    </div>

  </div>
</template>

<style scoped>
.page-wrapper {
  background: #0f0f0f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 40px 20px;
}

.container {
  background: #1f1f1f;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 450px;
  width: 100%;
  z-index: 1;
}

/* Espaçamento e área reservada para o banner na base */
.ad-box-bottom {
  width: 100%;
  max-width: 728px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px; /* Margem superior para afastar da caixinha */
}

h1 { font-size: 26px; margin-bottom: 15px; }
p { color: #aaa; font-size: 15px; margin-bottom: 25px; line-height: 1.6; }

.btn {
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.btn-youtube { background-color: #ff0000; color: white; }
.btn-drive { background-color: #333; color: #777; pointer-events: none; cursor: not-allowed; }
.btn-drive.active { background-color: #1a73e8; color: white; pointer-events: auto; cursor: pointer; }
</style>