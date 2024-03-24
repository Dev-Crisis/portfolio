<script setup>
import {ref} from "vue";

let classMenu = ref("-translate-x-full");

</script>
<template>
  <nav class="hidden sm:block p-4 sticky bg-slate-800">
    <ul class="flex w-full justify-evenly items-center">
      <li>
        <RouterLink to="/" class="uppercase text-lg font-bold" active-class="underline">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="uppercase text-lg font-bold" active-class="underline">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="uppercase text-lg font-bold" active-class="underline">About</RouterLink>
      </li>
    </ul>
  </nav>


  <nav class="sm:hidden">
    <vue-feather type="menu" class="absolute right-2 top-2 cursor-pointer" size="45" @click.passive="classMenu = ''"></vue-feather>
    <ul class="pl-32 absolute bg-slate-950 h-full flex flex-col justify-evenly items-start w-full transition-all duration-300" :class="classMenu">
      <vue-feather type="x" class="absolute right-2 top-2 cursor-pointer" size="45" @click.passive="classMenu = '-translate-x-full'"></vue-feather>
      <li>
        <RouterLink to="/" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'" active-class="underline">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'" active-class="underline">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="uppercase text-3xl font-bold" @click.passive="classMenu = '-translate-x-full'" active-class="underline">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>