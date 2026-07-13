<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue' // Importa a função de SEO

// Estado para controlar se o link do Drive está liberado
const isUnlocked = ref(false)

// injeta as Meta Tags dinamicamente no <head> da página
useHead({
  title: 'Download GTA Anime V2 | Mod GTA San Andreas Atualizado',
  meta: [
    { 
      name: 'description', 
      content: 'Baixar o melhor mod de GTA Anime para GTA San Andreas. Download seguro via Google Drive e atualizado pelo canal LittleSekii.' 
    },
    { 
      name: 'keywords', 
      content: 'gta anime, gta san andreas mod, baixar gta modificado, gta sa anime mod, littlesekii download gta, como baixar gta anime, gta anime mod apk' 
    },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph (WhatsApp, Facebook, Discord)
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Download GTA Anime V2 | Mod GTA San Andreas' },
    { property: 'og:description', content: 'Inscreva-se no canal para liberar o link exclusivo de download do GTA Anime Modificado.' },
    { property: 'og:image', content: 'https://seusite.com/banner-gta-anime.jpg' }, // Substitua pela URL da imagem de capa se tiver uma
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Download GTA Anime V2 | Mod GTA San Andreas' }
  ],
  link: [
    { rel: 'canonical', href: 'https://seusite.com/' } // Substitua pelo link real do seu site quando publicar
  ]
})

const handleYouTubeClick = () => {
  // Aguarda 1 segundo antes de liberar o botão para dar tempo do redirecionamento
  setTimeout(() => {
    isUnlocked.value = true
  }, 1000)
}
</script>

<template>
  <div class="page-wrapper">
    <!-- Seção oculta apenas para robôs de SEO (Web Crawlers) extraírem palavras-chave extras -->
    <span class="seo-hidden">
      Aqui você pode baixar o GTA Anime atualizado. Modificações completas para GTA San Andreas PC e Android, 
      com skins de anime, texturas otimizadas e download 100% seguro via Google Drive pelo canal LittleSekii.
    </span>

    <div class="container">
      <!-- H1 com palavras-chave fortes para SEO -->
      <h1>Download GTA Anime 🚀</h1>
      
      <!-- Parágrafo enriquecido com termos de busca (GTA San Andreas Mod, Baixar, etc) -->
      <p>
        Você está prestes a baixar o melhor <strong>mod de GTA Anime para GTA San Andreas</strong>!<br>
        Para liberar o acesso ao arquivo exclusivo no Google Drive, por favor inscreva-se no canal do YouTube abaixo.
      </p>

      <!-- Passo 1: Link do YouTube com confirmação automática -->
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
  </div>
</template>

<style scoped>
/* Mantém o texto de SEO visível para os robôs do Google, mas esconde totalmente do usuário */
.seo-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

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
  font-size: 26px;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 800;
}

p {
  color: #aaa;
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 1.6;
}

p strong {
  color: #ff0000;
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

.btn-youtube {
  background-color: #ff0000;
  color: white;
}

.btn-youtube:hover {
  background-color: #cc0000;
  transform: translateY(-2px);
}

.btn-drive {
  background-color: #333;
  color: #777;
  pointer-events: none;
  cursor: not-allowed;
}

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