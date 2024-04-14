<template>
  <div class="flex items-center justify-center flex-col lg:flex-row">

    <section class="flex justify-center items-center flex-col gap-5 py-5 w-full">
      <div class="flex flex-col gap-3 justify-center items-start">
        <h1 class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-black uppercase text-shadow-black dark:text-shadow-white">
          Projets</h1>
      </div>
      <div class="w-5/6 md:w-2/5">
        <Vue3Lottie no-margin :animationData="Projects"/>
      </div>
    </section>

      <div class="p-5 flex gap-10 items-center justify-start w-full overflow-scroll">
        <ProjectCard v-for="t in tt" :project-summary="t.summary" :project-image-path="t.imagePath"
                     :project-link="t.link"
                     :project-name="t.name"/>
      </div>
  </div>
</template>
<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import Projects from "../assets/animations/projects.json";

const tt = [
  {
    name: "Dittobask",
    summary: "Un projet simulant un site vitrine de NFT",
    link: "https://dev-crisis.github.io/dittobask/",
    imagePath: Dittobask
  },
  {
    name: "Portfolio",
    summary: "Le projet me concernant le plus possible mon CV numérique",
    link: "/",
    imagePath: Portfolio
  },
]
import Dittobask from '../assets/projects/dittobask.webp'
import Portfolio from '../assets/projects/portfolio.webp'
</script>