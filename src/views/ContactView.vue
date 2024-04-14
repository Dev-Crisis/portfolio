<template>
  <div class="flex items-center justify-between lg:flex-row flex-col-reverse w-full">
    <!-- FORM -->
    <section class="p-4 flex flex-col items-center justify-center gap-10 w-full">
      <form action="https://formspree.io/f/mzbnkeny" method="POST"
            class="flex flex-col justify-center items-center gap-5 w-full lg:w-2/3 px-2">

        <div class="flex flex-col w-full gap-2 lg:gap-4">
          <label class="text-xl lg:text-2xl" for="email">Votre email :</label>
          <input id="email" type="email" class="p-2 w-full rounded bg-slate-800" autocomplete="on" placeholder="johndoe@gmail.com" name="email">
        </div>

        <div class="flex flex-col w-full gap-2 lg:gap-4">
          <label class="text-xl lg:text-2xl" for="message">Votre message :</label>
          <textarea id="message" name="message" class="p-2 w-full rounded bg-slate-800 resize-none" rows="12" autocomplete="on" placeholder="Bonjour, Je vous contact au sujet de..."></textarea>
        </div>

        <div class="flex flex-col w-full">
          <button class="cursor-pointer text-lg text-center bg-slate-400 dark:bg-slate-600 transition-all border-[3px] border-slate-300 dark:border-slate-600 uppercase rounded font-bold px-4 py-2 hover:border-slate-400 hover:bg-slate-400 hover:text-white dark:hover:border-slate-600 dark:hover:bg-slate-950" type="submit">Envoyer</button>
        </div>

      </form>
    </section>


    <section class="flex justify-between items-center flex-col gap-5 py-5 w-full">
      <div class="flex flex-col gap-3 justify-center items-start">
        <h1 class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-black uppercase text-shadow-black dark:text-shadow-white">
          COntact</h1>
      </div>
      <div class="w-5/6 md:w-3/5">
        <Vue3Lottie no-margin :animationData="Contact"/>
      </div>
    </section>
  </div>


</template>
<script setup lang="ts">
import Contact from "../assets/animations/contact.json";
import ProjectCard from "../components/ProjectCard.vue";
import {Vue3Marquee} from "vue3-marquee";

</script>