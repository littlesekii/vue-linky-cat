<script setup>
import LinkButton from "@/components/LinkButton.vue";
import router from "@/router";
import { ref } from "vue";

const user = ref("");
user.value = router.currentRoute.value.path.replace("/", "");

</script>

<template>
  <main class="flex f-column">

    <header class="flex f-column">

      <div class="tree-info flex f-column f-centered">

        <div class="tree-info-picture">
          <img class="rounded-full" src="https://picsum.photos/96/96" alt="">
        </div>

        <div class="tree-info-details flex f-column f-centered tal-center ovfx-hidden">
          <h1 class="tree-info-details-name break-keep ">
            JOSÉFINA ÇHÃIWEIZER
          </h1>
          <h2 class="tree-info-details-username">
            @{{ user }}
          </h2>

          <p class="tree-info-details-description break-keep"> 
            "Harum eum iste quasi autem minima dolor."
          </p>
        </div>

      </div>

    </header>

    <nav class="tree-links">
      <LinkButton class="tree-links-button" title="Instagram" url="https://instagram.com/chaiweiszer" />
      <LinkButton class="tree-links-button" title="Twitch" url="https://twitch.tv/littlesekii" />
      <LinkButton class="tree-links-button" title="Youtube" url="https://youtube.com/@littlesekii" />
      
    </nav>

  </main>
</template>


<style scoped>
  main {
    min-height: 100vh;    
  }

  .tree-info {
    margin-top: 4em;
  }

  .tree-info-picture {
    max-width: 96px;
    max-height: 96px;
  }
  .tree-info-picture img {
    width: 100%;
    height: 100%;
  }

  .tree-info-details {
    width: 100%;
    max-width: 33em;

    margin-top: 1em;
  }
  .tree-info-details-name {
    font-size: 18pt;
    font-weight: 600;
  }
  .tree-info-details-username {
    margin-top: -0.1em;
    font-size: 11pt;
    font-weight: 300;
  }
  .tree-info-details-description {
    margin-top: 1em;
  }

  .tree-links {
    width: 80%;
    max-width: 35em;
    margin-top: 2em;
    align-self: center;

    /* background-color: aliceblue; */
  }
  .tree-links-button {
    margin-bottom: 1em;
  }
</style>