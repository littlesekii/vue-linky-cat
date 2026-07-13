import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@unhead/vue"; // 1. Importa o Unhead

const app = createApp(App);
const head = createHead(); // 2. Cria a instância do gerenciador de Head

app.use(router);
app.use(head); // 3. Registra o Unhead no app Vue

app.mount("#app");

// Lógica existente para o Favicon baseado no tema do navegador
const setFavicon = () => {
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = window.matchMedia("(prefers-color-scheme: dark)").matches 
      ? "/favicon_dark.ico"
      : "/favicon_light.ico";
  }
};

setFavicon();