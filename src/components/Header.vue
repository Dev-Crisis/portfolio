<template>
  <header>

    <NavBar/>
  </header>
</template>
<script setup>
import {defineAsyncComponent} from "vue";

const NavBar = defineAsyncComponent(() =>
    import("./NavBar.vue")
)
</script>