<script setup>

</script>

<template>
  <!-- Header -->
  <header class="bg-white shadow-md fade-in">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold">Kevin Bardou</div>
      <nav class="hidden md:flex">
        <a href="#hero" class="text-gray-700 hover:text-blue-500 mx-3 text-lg">Accueil</a>
        <a href="#skills" class="text-gray-700 hover:text-blue-500 mx-3 text-lg">Compétences</a>
        <a href="#projects" class="text-gray-700 hover:text-blue-500 mx-3 text-lg">Projets</a>
        <a href="#student-path" class="text-gray-700 hover:text-blue-500 mx-3 text-lg">Parcours Etudiant</a>
        <a href="#about" class="text-gray-700 hover:text-blue-500 mx-3 text-lg">À propos</a>
      </nav>
      <div class="md:hidden">
        <button id="menu-btn" class="text-gray-700 hover:text-blue-500 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden fade-in">
      <a href="#hero" class="block text-gray-700 hover:text-blue-500 px-6 py-2">Accueil</a>
      <a href="#skills" class="block text-gray-700 hover:text-blue-500 px-6 py-2">Compétences</a>
      <a href="#projects" class="block text-gray-700 hover:text-blue-500 px-6 py-2">Projets</a>
      <a href="#student-path" class="block text-gray-700 hover:text-blue-500 px-6 py-2">Parcours Etudiant</a>
      <a href="#about" class="block text-gray-700 hover:text-blue-500 px-6 py-2">À propos</a>
    </div>
  </header>

</template>

<style scoped>

</style>