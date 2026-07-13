<script setup>
import { ref, onMounted } from 'vue' // Importe o onMounted
import { useHead, useSeoMeta } from '@unhead/vue'

// Estado para controlar se o link do Drive está liberado
const isUnlocked = ref(false)

// Executa o SEO somente após o componente estar montado e o contexto do Vue 100% pronto
onMounted(() => {
  // 1. Title e Links
  useHead({
    title: 'Download GTA Anime V2 | Mod GTA San Andreas Atualizado',
    link: [
      { rel: 'canonical', href: 'https://seusite.com/' }
    ]
  })

  // 2. Meta Tags de SEO
  useSeoMeta({
    description: 'Baixar o melhor mod de GTA Anime para GTA San Andreas. Download seguro via Google Drive e atualizado pelo canal LittleSekii.',
    keywords: 'gta anime, gta san andreas mod, baixar gta modificado, gta sa anime mod, littlesekii download gta, como baixar gta anime, gta anime mod apk',
    robots: 'index, follow',
    
    // Open Graph
    ogType: 'website',
    ogTitle: 'Download GTA Anime V2 | Mod GTA San Andreas',
    ogDescription: 'Inscreva-se no canal para liberar o link exclusivo de download do GTA Anime Modificado.',
    ogImage: 'https://seusite.com/banner-gta-anime.jpg',
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: 'Download GTA Anime V2 | Mod GTA San Andreas'
  })
})

const handleYouTubeClick = () => {
  setTimeout(() => {
    isUnlocked.value = true
  }, 5000)
}
</script>