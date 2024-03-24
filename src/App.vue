<template>
  <Header/>
  <main class="py-5">
    <RouterView/>
  </main>
  <Footer/>
</template>
<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>