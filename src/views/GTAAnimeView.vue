<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

const isUnlocked = ref(false)

// 1. GERENCIAMENTO DOS SCRIPTS EXTERNOS
useHead({
  title: 'Download GTA Anime V2 | Mod GTA San Andreas',
  meta: [
    { name: 'description', content: 'Baixar o melhor mod de GTA Anime...' }
  ],
  script: [
    {
      // Script do Banner Horizontal 1 (Topo)
      src: 'https://pl30353677.effectivecpmnetwork.com/99dc01b66c5068c6b6b37d04eba47b42/invoke.js',
      async: true,
      'data-cfasync': 'false',
      tagPosition: 'bodyClose'
    },
    {
      // Script do Novo Banner Vertical (Base)
      src: 'https://www.highperformanceformat.com/b5395a666a99ad3f567a22c9ab1e1a6a/invoke.js',
      async: true,
      tagPosition: 'bodyClose'
    }
  ]
})

// 2. CONFIGURAÇÃO DO OBJETO ATOPTIONS ANTES DO DIRECIONAMENTO
onMounted(() => {
  // Define o objeto de parâmetros do novo anúncio diretamente no escopo global window
  window.atOptions = {
    'key': 'b5395a666a99ad3f567a22c9ab1e1a6a',
    'format': 'iframe',
    'height': 300,
    'width': 160,
    'params': {}
  }
})

const handleYouTubeClick = () => {
  setTimeout(() => {
    isUnlocked.value = true
  }, 1000)
}
</script>

<template>
  <div class="page-wrapper">
    
    <!-- BANNER 1: HORIZONTAL (O QUE VOCÊ JÁ TINHA - NO TOPO) -->
    <div class="ad-box-horizontal">
      <div id="container-99dc01b66c5068c6b6b37d04eba47b42"></div>
    </div>

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

    <!-- BANNER 2: NOVO BANNER VERTICAL (160x300 - NA BASE) -->
    <!-- Como este script injeta o iframe diretamente onde ele é executado, 
         o script do head lerá o escopo do window e montará o elemento aqui automaticamente -->
    <div class="ad-box-vertical">
      <div class="ad-placeholder-text">Publicidade</div>
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

/* Estilo para o banner horizontal que você já tinha */
.ad-box-horizontal {
  width: 100%;
  max-width: 728px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

/* Estilo específico para o novo bloco vertical (160x300) na base */
.ad-box-vertical {
  width: 160px;
  height: 300px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #151515;
  border-radius: 4px;
}

.ad-placeholder-text {
  font-size: 10px;
  color: #444;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
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