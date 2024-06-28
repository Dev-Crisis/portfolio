<script setup>

import Modale from "./Modale.vue";
import {ref} from "vue";

const projects = [
  {dates: "2018 - 2021", description: "D1", excerpt: "Alternance Webmaster", name: "Alternance : Concepteur / Développeur d'applications", url: "https://wodandgo.com", company: "Wodandgo", school: "Lycée Pablo Picasso"},
  {dates: "2022 - 2023", description: "D2", excerpt: "Alternance Développeur FullStack", name: "Alternance : Concepteur / Développeur d'applications", url: "https://www.comelse.com/", company: "Comelse", school: "L'IDEM"},
  {dates: "2023 - Présent", description: "D3", excerpt: "Alternance Webmaster", name: "Alternance : Concepteur / Développeur d'applications", url: "https://wodandgo.com", company: "Wodandgo", school: "L'IDEM"},
];


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
  <!-- Student Path -->
  <section id="student-path" class="container mx-auto px-6 py-12 fade-in">
    <h2 class="text-3xl font-bold text-center mb-8">Mon parcours étudiant</h2>
    <Modale :class="modalClass" :project="modalProject" class="transition-all duration-300" @click.passive="closeModale()"/>
    <div class="border-l-2 mt-10">
      <div v-for="project in projects.reverse()"
          class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div
            class="w-5 h-5 bg-blue-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
        <div class="w-10 h-1 bg-blue-500 absolute -left-10 z-0"></div>
        <div class="flex-auto">
          <h3 class="text-lg">{{ project.dates }}</h3>
          <h4 class="text-xl font-bold">{{ project.excerpt }} (<a class="underline" target="_blank" :href="project.url">{{ project.company }}</a>)</h4>
          <span>{{ project.school }}</span>
        </div>
          <a href="#" class="text-center hover:text-gray-300" @click.passive="openModale(project)">En Savoir plus</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>