<script setup>
defineProps(['project']);
</script>

<template>
  <div class="z-10 w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex items-center justify-center flex-col">
    <div class="bg-white rounded-xl w-4/5 lg:w-[500px]">
      <img v-if="project.preview" :src="project.preview" :alt="project.alt" class="rounded-t-xl">
      <div class="p-5 flex gap-3 flex-col items-start">
        <h3 class="text-xl font-semibold uppercase">{{ project['name'] }}</h3>
        <p class="text-xl">{{ project['description'] }}</p>
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