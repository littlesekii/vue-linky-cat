<script setup>
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

const user = ref();
user.value = router.currentRoute.value.path.replace("/", "");

const response = ref();
onMounted(() => {
  http.get("/api/user/" + user.value)
    .then(res => res.json())
    .then(data => {
      response.value = data;
      userLocated(true);
    }).catch(() => {
      userLocated(false);
    });

  
});

function userLocated(located) {
  state.loading = false;
  state.locatedUser = located;
}


</script>

<template>
  <TreeNotFoundView v-if="userNotFound" />
  <TreeUserView v-if="userFound" :userData="response" />
</template>


<style scoped>

</style>