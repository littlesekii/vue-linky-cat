<script setup>

const data = defineProps([
  "title",
  "url"
]);

function goto() {
  window.open(data.url);
}

</script>

<template>
  <div @click="goto" class="link-button">
    <p>{{ data.title }}</p>
  </div>
</template>

<style scoped>

.link-button {
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1px solid var(--color-text);
  cursor: pointer;

  user-select: none;

  border-radius: 5px;
}

.link-button:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}

</style>