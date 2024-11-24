<script setup>

const projects = [
  {
    name: 'Dittobask',
    preview: Dittobask,
    excerpt: 'Un project Vue.js Tailwind + un Designer',
    url: "https://dittobask.kevinbardou.fr/",
    description: "Ce projet a été inspiré par le mouvement des NFT, une idée d'un ami Designer/Graphiste qui a vue le jour après une conception et un petit mois de travail avec une stack : Vite & Vue.js + Tailwindcss.",
    alt: "Dittobask Projet NFT"
  }
];

import Modale from "./Modale.vue";
import Dittobask from "/src/assets/dittobask.webp";
import {ref} from "vue";

const modalClass = ref('-left-full');
const modalProject = ref({});

function openModale(project) {
  window.scrollTo(0, 0);
  document.body.classList.add("overflow-hidden");
  modalClass.value = "left-0";
  modalProject.value = project;
}

const closeModale = (e) => {
  if (e.target.id === "modale") {
    modalClass.value = "-left-full";
    document.body.classList.remove("overflow-hidden");
  }
}

</script>

<template>
  <Modale :class="modalClass" :project="modalProject" @click.passive="(e) => closeModale(e)"/>
  <!-- Projects -->
  <section id="projects" class="container mx-auto px-6 py-12 fade-in">
    <h2 class="text-3xl font-bold text-center mb-8">Derniers Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project items here -->
      <div class="bg-white p-6 rounded shadow-md fade-in flex items-start gap-2 flex-col"
           v-for="project in projects.slice(0, 3)">
        <h3 class="text-xl font-semibold uppercase">{{ project.name }}</h3>
        <p>{{ project.excerpt }}</p>
        <button class="text-blue-600 hover:underline cursor-pointer" @click.passive="openModale(project)">En savoir
          plus
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>