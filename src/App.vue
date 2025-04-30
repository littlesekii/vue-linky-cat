<script setup>
import { computed } from "vue";
import { RouterView, RouterLink } from "vue-router";

computed(() => window.location.replace("http://sh.linky.cat"));
</script>

<template>
  <RouterView />
  <nav class="debug-router">
    <RouterLink to="/" class="debug-link">Main</RouterLink>
    <RouterLink to="/chaiweizer" class="debug-link">Tree</RouterLink>
    <RouterLink to="/debug" class="debug-link">Debug</RouterLink>
  </nav>
</template>

<style scoped>

.debug-router {
  position: fixed;
  bottom: 0px;
  left: 0px;
  
  padding: 12px;

  background-color: var(--black-soft);

  border-top-right-radius: 10px;
}

.debug-link {
  padding: 5px;

  color: var(--color-link);
  text-decoration: none;  
}

</style>