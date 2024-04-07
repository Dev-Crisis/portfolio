<script setup>
import {ref} from "vue";
let classMenu = ref("-translate-x-full");
</script>
<template>
  <nav class="hidden md:block p-4 sticky bg-slate-300 dark:bg-slate-800">
    <ul class="flex w-full justify-evenly items-center">
      <li>
        <RouterLink to="/" class="uppercase text-lg font-bold" active-class="underline">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="uppercase text-lg font-bold" active-class="underline">Projets</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="uppercase text-lg font-bold" active-class="underline">A propos</RouterLink>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a target="_blank" href="https://github.com/Dev-Crisis">
            <vue-feather size="26" type="github"></vue-feather>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/">
            <vue-feather size="26" type="linkedin"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>


  <nav class="md:hidden flex justify-end items-center">
    <vue-feather type="menu"
                 class="fixed top-0 right-0 z-10 p-2 cursor-pointer bg-slate-300 dark:bg-slate-950 rounded-bl-2xl"
                 size="36" @click.passive="classMenu = '';"></vue-feather>
    <ul class="pl-32 top-0 fixed z-10 bg-slate-300 dark:bg-slate-950 h-full flex flex-col justify-evenly items-start w-full transition-all duration-300"
        :class="classMenu">
      <vue-feather type="x"
                   class="fixed right-0 top-0 p-2 cursor-pointer bg-slate-300 dark:bg-slate-800 rounded-bl-2xl"
                   size="36"
                   @click.passive="classMenu = '-translate-x-full'"></vue-feather>
      <li>
        <RouterLink to="/" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'"
                    active-class="underline">Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'"
                    active-class="underline">Projects
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'"
                    active-class="underline">About
        </RouterLink>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a target="_blank" href="https://github.com/Dev-Crisis">
            <vue-feather type="github" size="36"></vue-feather>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/">
            <vue-feather type="linkedin" size="36"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>