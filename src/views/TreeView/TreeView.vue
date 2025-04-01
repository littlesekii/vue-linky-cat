<script setup>
import router from "@/router";
import { ref } from "vue";

import TreeUserView from "./TreeUserView.vue";
import TreeNotFoundView from "./TreeNotFoundView.vue";

const user = ref("");
user.value = router.currentRoute.value.path.replace("/", "");

</script>

<template>
  <TreeUserView v-if="user == 'chaiweizer'" />
  <TreeNotFoundView v-else />
</template>


<style scoped>

</style>