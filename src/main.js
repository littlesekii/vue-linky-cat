import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createUnhead } from "unhead"; // Puxa direto da biblioteca base que você listou

const app = createApp(App);
const head = createUnhead(); // Cria a instância usando a função oficial do core

app.use(router);
app.use(head); // Vincula ao Vue

app.mount("#app");

// Lógica do Favicon
const setFavicon = () => {
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = window.matchMedia("(prefers-color-scheme: dark)").matches 
      ? "/favicon_dark.ico"
      : "/favicon_light.ico";
  }
};

setFavicon();