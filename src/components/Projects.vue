<script setup>

const projects = [
    {name: 'Dittobask', preview: "/src/assets/dittobask-mobile.webp",excerpt: 'Un project Vue.js Tailwind + un Designer', url: "https://dev-crisis.github.io/dittobask/", description: "Ce projet a été inspirer par le mouvement des NFT, une idée d'un ami Designer/Graphiste qui à vue le jour après une conception et un petit mois de travail avec une stack : Vue.js + Tailwindcss.", alt: "Dittobask Projet NFT"}
];



import Modale from "./Modale.vue";
import {ref} from "vue";

const modalClass = ref('hidden');
const modalProject = ref({});

function openModale(project){
  window.scrollTo(0,0);
  document.body.classList.add("overflow-hidden");
  modalClass.value = "";
  modalProject.value = project;
}

const closeModale = () => {
  modalClass.value = "hidden";
  document.body.classList.remove("overflow-hidden");
}

</script>

<template>
  <Modale :class="modalClass" :project="modalProject" class="transition-all duration-300" @click.passive="closeModale()"/>
  <!-- Projects -->
  <section id="projects" class="container mx-auto px-6 py-12 fade-in">
    <h2 class="text-3xl font-bold text-center mb-8">Mes Derniers Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project items here -->
      <div class="bg-white p-6 rounded shadow-md fade-in flex items-start gap-2 flex-col" v-for="project in projects.slice(0, 3)">
        <h3 class="text-xl font-semibold uppercase">{{ project.name }}</h3>
        <p>{{ project.excerpt }}</p>
        <a class="text-blue-600 hover:underline cursor-pointer" @click.passive="openModale(project)">En savoir plus</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>