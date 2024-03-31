<template>
  <Header/>
  <main>
    <RouterView/>
  </main>
  <Footer/>
</template>
<script setup>
import {defineAsyncComponent} from "vue";

const Header = defineAsyncComponent(() =>
    import("./components/Header.vue")
)

const Footer = defineAsyncComponent(() =>
    import("./components/Footer.vue")
)
</script>