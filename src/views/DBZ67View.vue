<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

const isUnlocked = ref(false)

// Injeta apenas as meta tags de SEO no <head>
useHead({
  title: 'Download Dragon Ball BT3 Ultra Crossover | ISO PS2 / Emulador',
  meta: [
    { name: 'description', content: 'Baixar a ISO de Dragon Ball Budokai Tenkaichi 3 Ultra Crossover. Download seguro via MediaFire.' }
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
      <h1>Download DBBT3 Ultra Crossover 💥</h1>
      <p>Você está prestes a baixar o jogo Dragon Ball Budokai Tenkaichi 3 Ultra Crossover!</p>

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

      <!-- Passo 2: Link do MediaFire -->
      <a 
        :href="isUnlocked ? 'https://www.mediafire.com/file/1zktkix3t73xyw2/DRAGON+BALL+TENKAICHI+ULTRACROSSOVER+LATINO.rar/file' : undefined" 
        target="_blank" 
        class="btn btn-mediafire" 
        :class="{ 'active': isUnlocked }"
        rel="noopener noreferrer"
      >
        {{ isUnlocked ? '2. Baixar DBBT3 Crossover (Liberado!)' : '2. Acessar Link do MediaFire' }}
      </a>
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

h1 { font-size: 24px; margin-bottom: 15px; }
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
.btn-youtube:hover { background-color: #cc0000; transform: translateY(-2px); }

.btn-mediafire { background-color: #333; color: #777; pointer-events: none; cursor: not-allowed; }
.btn-mediafire.active { background-color: #0070f3; color: white; pointer-events: auto; cursor: pointer; }
.btn-mediafire.active:hover { background-color: #0056b3; transform: translateY(-2px); }
</style>