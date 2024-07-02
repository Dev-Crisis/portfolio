<script setup>
defineProps(['project']);
</script>

<template>
  <div id="modale" class="z-10 transition-all duration-300 w-full h-screen bg-black bg-opacity-50 absolute top-0 -left-full flex items-center justify-center flex-col">
    <div class="bg-white rounded-xl w-4/5 lg:w-[500px]">
      <img v-if="project.preview" :src="project.preview" :alt="project.alt" class="rounded-t-xl w-full">
      <div class="p-5 flex gap-3 flex-col items-start">
        <h3 v-if="project.name" class="text-xl font-semibold uppercase">{{ project.name }}</h3>
        <p v-if="project.description" class="text-xl">{{ project.description }}</p>
        <a v-if="project.url" class="underline pe-4 py-2" :href="project.url" target="_blank">Voir</a>
        <a v-if="project.numberPhone" :href="project.numberPhone" class="underline">Par téléphone</a>
        <a v-if="project.email" :href="project.email" class="underline">Par email</a>
        <a v-if="project.linkedin" :href="project.linkedin" target="_blank" class="underline">Mon Linkedin</a>
        <a v-if="project.github" :href="project.github" target="_blank" class="underline">Mon GitHub</a>
        <a v-if="project.instagram" :href="project.instagram" target="_blank" class="underline">Mon Instagram</a>
      </div>
    </div>
  </div>
</template>