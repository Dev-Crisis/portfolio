<template>
  <section class="p-4 flex flex-col items-start justify-center gap-10 w-full">
    <h1 class="text-4xl 2xl:text-5xl uppercase text-center">Derniers Projets</h1>
    <div class="py-5 lg:py-10 flex flex-col gap-10 items-center justify-center w-full md:flex-row md:gap-16">
      <ProjectCard v-for="t in tt" :project-summary="t.summary" :project-image-path="t.imagePath" :project-link="t.link"
                   :project-name="t.name"/>
    </div>
  </section>
</template>
<script setup>
import ProjectCard from "../components/ProjectCard.vue";

const tt = [
  {name: "Dittobask", summary: "Un projet simulant un site vitrine de NFT...", link: "https://dev-crisis.github.io/dittobask/", imagePath: Dittobask},
  {name: "Portfolio", summary: "Le projet me concernant le plus possible mon CV numérique...", link: "/", imagePath: Portfolio},
]
import Dittobask from '../assets/projects/dittobask.webp'
import Portfolio from '../assets/projects/portfolio.webp'
</script>