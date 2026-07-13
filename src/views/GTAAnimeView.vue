<script setup>
import { ref } from 'vue'

// Estado para controlar se o link do Drive está liberado
const isUnlocked = ref(false)

const handleYouTubeClick = () => {
  // Aguarda 1 segundo antes de liberar o botão para dar tempo do redirecionamento
  setTimeout(() => {
    isUnlocked.value = true
  }, 1000)
}
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <h1>Falta pouco! 🚀</h1>
      <p>Para liberar o acesso ao arquivo do GTA Anime, por favor inscreva-se no canal do YouTube abaixo.</p>

      <!-- Passo 1: Link do YouTube com confirmação automática -->
      <a 
        href="https://www.youtube.com/@littlesekii?sub_confirmation=1" 
        target="_blank" 
        class="btn btn-youtube"
        @click="handleYouTubeClick"
      >
        1. Inscrever-se no Canal
      </a>

      <!-- Passo 2: Link do Google Drive -->
      <!-- O link só se comporta como link funcional se estiver desbloqueado, caso contrário vira um botão desativado -->
      <a 
        :href="isUnlocked ? 'https://drive.google.com/file/d/1Ab-7e5yzYydgzVxb2ZWNUhL4UF1FBmda/view?usp=sharing' : undefined" 
        target="_blank" 
        class="btn btn-drive" 
        :class="{ 'active': isUnlocked }"
      >
        {{ isUnlocked ? '2. Acessar Link do Google Drive (Liberado!)' : '2. Acessar Link do Google Drive' }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background: #0f0f0f;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.container {
  background: #1f1f1f;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 450px;
  width: 100%;
}

h1 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #fff;
}

p {
  color: #aaa;
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.btn {
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  text-align: center;
}

/* Botão do YouTube */
.btn-youtube {
  background-color: #ff0000;
  color: white;
}

.btn-youtube:hover {
  background-color: #cc0000;
  transform: translateY(-2px);
}

/* Botão do Google Drive (Bloqueado por padrão) */
.btn-drive {
  background-color: #333;
  color: #777;
  pointer-events: none;
  cursor: not-allowed;
}

/* Estado Ativo/Liberado no Vue via classe condicional */
.btn-drive.active {
  background-color: #1a73e8;
  color: white;
  pointer-events: auto;
  cursor: pointer;
  animation: pulse 1.5s infinite;
}

.btn-drive.active:hover {
  background-color: #1557b0;
  transform: translateY(-2px);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(26, 115, 232, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(26, 115, 232, 0); }
  100% { box-shadow: 0 0 0 0 rgba(26, 115, 232, 0); }
}
</style>