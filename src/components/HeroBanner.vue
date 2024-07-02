<script setup>

import Modale from "./Modale.vue";
import {ref} from "vue";

const modalClass = ref('-left-full');
const modalProject = ref({});

function openModale() {
  window.scrollTo(0, 0);
  document.body.classList.add("overflow-hidden");
  modalClass.value = "left-0";
  modalProject.value = {
    name: "Mes Informations",
    phoneNumber: "tel:0650182074",
    email: "mailto:kbardou86@gmail.com?subject=Portfolio",
    instagram: "https://www.instagram.com/dev_crisis/?hl=fr",
    linkedin: "https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/",
    github: "https://github.com/Dev-Crisis"
  };
}

const closeModale = (e) => {
  if (e.target.id === "modale") {
    modalClass.value = "-left-full";
    document.body.classList.remove("overflow-hidden");
  }
}
</script>

<template>
  <!-- Hero Banner -->
  <Modale :class="modalClass" :project="modalProject"
          @click.passive="(e) => closeModale(e)"/>
  <section id="hero"
           class="bg-blue-600 text-white h-[300px] md:h-screen flex flex-col gap-4 justify-center items-center text-center px-6 fade-in">
    <h1 class="text-4xl lg:text-8xl font-bold">Kévin Bardou</h1>
    <h2 class="text-2xl lg:text-4xl">Concepteur / Développeur d'applications</h2>
    <button class="text-xl bg-white rounded text-black p-2 " @click.passive="openModale">Me contacter</button>
  </section>
</template>

<style scoped>

</style>