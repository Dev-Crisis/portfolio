<template>
  <RouterLink title="Retourner à l'accueil" to="/" class="uppercase text-lg font-bold" active-class="underline">
    <Vue3Lottie no-margin :animationData="NotFound" @click.passive=""/>
  </RouterLink>
</template>
<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import NotFound from "../assets/animations/404.json";
</script>