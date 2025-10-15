<script setup>
import logo_dark from "@/assets/icons/logo-dark.gif";
import logo_light from "@/assets/icons/logo-light.gif";

import http from "@/utils/http";
import router from "@/router";

import { computed, onMounted, reactive, ref } from "vue";

import TreeUserView from "./TreeUserView.vue";
import TreeNotFoundView from "./TreeNotFoundView.vue";

const state = reactive({
  loading: true,
  locatedUser: false
});

const userNotFound = computed(() => {
  return !state.loading && !state.locatedUser;
});

const userFound = computed(() => {
  return state.locatedUser;
});

const logo = computed(() => {
  return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? logo_dark : logo_light;
});

const user = ref();
user.value = router.currentRoute.value.path.replace("/", "");

const response = ref();
onMounted(() => {
  userLocated(user.value == "littlesekii");
});

function userLocated(located) {
  state.loading = false;
  state.locatedUser = located;
}



</script>

<template>
  <TreeNotFoundView class="tree-content" v-if="userNotFound" />
  <TreeUserView class="tree-content" v-if="userFound" :userData="response" />
  <footer class="flex f-centered" >
    <img class="linkycat-logo" :src="logo" alt="">
  </footer>
</template>


<style scoped>

  .tree-content {
    min-height: calc(100vh - 100px);
  }

  footer {
    height: 100px;
  }
  .linkycat-logo {
    width: 40px;
    margin-left: -15px;
  }
</style>