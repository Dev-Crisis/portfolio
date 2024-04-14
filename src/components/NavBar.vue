<script setup>
import {ref} from "vue";

let classMenu = ref("-translate-x-full");
</script>
<template>
  <nav class="hidden md:block p-4 sticky bg-slate-300 dark:bg-slate-800">
    <ul class="flex w-full justify-evenly items-center">
      <li>
        <div class="flex gap-8 items-center justify-center">
          <RouterLink title="Accueil" to="/" class="uppercase text-lg font-bold hover:text-slate-400" active-class="underline text-slate-400">Accueil
          </RouterLink>
          <RouterLink title="Projets" to="/projects" class="uppercase text-lg font-bold hover:text-slate-400" active-class="underline text-slate-400">
            Projets
          </RouterLink>
          <RouterLink title="A propos" to="/about" class="uppercase text-lg font-bold hover:text-slate-400" active-class="underline text-slate-400">A propos
          </RouterLink>
          <RouterLink title="Contact" to="/contact" class="uppercase text-lg font-bold hover:text-slate-400" active-class="underline text-slate-400">Contact
          </RouterLink>
        </div>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a target="_blank" href="https://github.com/Dev-Crisis" title="Link to my Github">
            <vue-feather size="26" class="hover:-translate-y-1 transition-all hover:text-slate-400" type="github"></vue-feather>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/"
             title="Link to my LinkedIn">
            <vue-feather class="hover:-translate-y-1 transition-all hover:text-slate-400" size="26" type="linkedin"></vue-feather>
          </a>
          <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
            <vue-feather class="hover:-translate-y-1 transition-all hover:text-slate-400" size="26" type="instagram"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>


  <nav class="md:hidden flex justify-end items-center">
    <vue-feather type="menu"
                 class="fixed top-0 right-0 z-10 p-2 cursor-pointer bg-slate-300 dark:bg-slate-950 rounded-bl-2xl border-b-2 border-l-2 dark:border-slate-300"
                 size="36" @click.passive="classMenu = '';"></vue-feather>
    <ul class="pl-32 top-0 fixed z-10 bg-slate-300 dark:bg-slate-950 h-full flex flex-col justify-evenly items-start w-full transition-all duration-300"
        :class="classMenu">
      <vue-feather type="x"
                   class="fixed right-0 top-0 p-2 cursor-pointer bg-slate-300 dark:bg-slate-950 rounded-bl-2xl border-b-2 border-l-2 dark:border-slate-300"
                   size="36"
                   @click.passive="classMenu = '-translate-x-full'"></vue-feather>
      <li>
        <div class="flex gap-16 flex-col justify-center items-start">

          <RouterLink title="Accueil" to="/" class="uppercase text-3xl font-bold hover:text-slate-400" active-class="underline text-slate-400"
                      @click.passive="classMenu = '-translate-x-full'">Accueil
          </RouterLink>

          <RouterLink title="Projets" to="/projects" class="uppercase text-3xl font-bold hover:text-slate-400" active-class="underline text-slate-400"
                      @click.passive="classMenu = '-translate-x-full'">Projets
          </RouterLink>
          <RouterLink title="A propos" to="/about" class="uppercase text-3xl font-bold hover:text-slate-400" active-class="underline text-slate-400"
                      @click.passive="classMenu = '-translate-x-full'">A Propos
          </RouterLink>
          <RouterLink title="Contact" to="/contact" class="uppercase text-3xl font-bold hover:text-slate-400" active-class="underline text-slate-400"
                      @click.passive="classMenu = '-translate-x-full'">Contact
          </RouterLink>
        </div>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a title="Link to my Github" target="_blank" href="https://github.com/Dev-Crisis">
            <vue-feather type="github" class="hover:-translate-y-1 transition-all hover:text-slate-400" size="36"></vue-feather>
          </a>
          <a title="Link to my LinkedIn" target="_blank"
             href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/">
            <vue-feather type="linkedin" class="hover:-translate-y-1 transition-all hover:text-slate-400" size="36"></vue-feather>
          </a>
          <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
            <vue-feather type="instagram" class="hover:-translate-y-1 transition-all hover:text-slate-400" size="36"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>