<script setup>

import Modale from "./Modale.vue";
import {ref} from "vue";

const projects = [
  {
    dates: "Septembre. 2024 - Janvier. 2025",
    description: "Chez Defacto, j’ai pu réaliser des projets variés, dont plusieurs intégrations de sites web WordPress & Divi avec un design réalisé par des collaborateurs. J’ai repris un projet Laravel e-commerce et l’ai déployer ainsi qu'assurer son suivi.",
    excerpt: "Intégrateur Web",
    name: "Intégrateur web",
    url: "https://www.studiodefacto.com",
    company: "Defacto"
  },
  {
    dates: "Septembre. 2023 - Août. 2024",
    description: "En alternance chez Wodandgo une marque d'accessoires de CrossFit, j'ai pu réaliser le rebranding de la marque, ainsi que la mise à jour du contenu et la maintenance du WordPress, Woocommerce mis en place.",
    excerpt: "Alternant Webmaster",
    name: "Alternance : Concepteur / Développeur d'applications",
    url: "https://wodandgo.com",
    company: "Wodandgo"
  },
  {
    dates: "Juillet. 2022 - Août. 2023",
    description: "En alternance chez Comelse une agence web, j'ai pu créer des sites et des applications de A à Z avec des technologies modernes tels que Laravel, React ou encore Kotlin.",
    excerpt: "Alternant Développeur FullStack",
    name: "Alternance : Concepteur / Développeur d'applications",
    url: "https://www.comelse.com/",
    company: "Comelse"
  },
];


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
  <!-- Student Path -->
  <section id="student-path" class="container mx-auto px-6 py-12 fade-in">
    <h2 class="text-3xl font-bold text-center mb-8">Mes Experiences</h2>
    <Modale :class="modalClass" :project="modalProject" @click.passive="(e) => closeModale(e)"/>
    <div class="border-l-2 mt-10">
      <div v-for="project in projects"
           class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div
            class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
        <div class="w-10 h-1 bg-blue-600 absolute -left-10 z-0"></div>
        <div class="flex-auto w-full md:w-auto">
          <h3 class="text-lg">{{ project.dates }}</h3>
          <h4 class="text-xl font-bold">{{ project.name }} <a v-if="project.url" class="underline" target="_blank"
                                                              :href="project.url">({{ project.company }})</a></h4>
        </div>
        <a href="#" class="text-center hover:text-gray-300" @click.passive="openModale(project)">En Savoir plus</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>