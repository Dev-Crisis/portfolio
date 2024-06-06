<script setup>

const projects = [{name: 'Dittobask', description: 'Un project Vue.js Tailwind + un Designer'}];
import Modale from "./Modale.vue";
import {ref} from "vue";

const modalClass = ref('hidden');
const modalProject = ref({});

function onClick(project){
  modalClass.value = "";
  modalProject.value = project;
}

</script>

<template>
  <Modale :class="modalClass" :project="modalProject" class="transition-all duration-300"/>
  <!-- Projects -->
  <section id="projects" class="container mx-auto px-6 py-12 fade-in">
    <h2 class="text-3xl font-bold text-center mb-8">Mes Derniers Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project items here -->
      <div class="bg-white p-6 rounded shadow-md fade-in" v-for="project in projects">
        <h3 class="text-xl font-semibold">{{ project.name }}</h3>
        <p class="mt-2">{{ project.description }}</p>
        <span class="text-blue-600 hover:underline mt-4 inline-block cursor-pointer" @click.passive="onClick(project)">Voir plus</span>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>