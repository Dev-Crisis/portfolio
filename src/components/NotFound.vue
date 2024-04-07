<template>
  <footer class="sticky">
    <div class="p-4 flex gap-3 flex-col justify-center items-center bg-slate-300 dark:bg-slate-800 w-full">
      <h2 class="text-4xl sm:text-5xl md:text-6xl 2xl:text-6xl text-black uppercase text-shadow-black dark:text-shadow-white">
        Kevin Bardou</h2>
      <h3 class="text-3xl md:text-4xl 2xl:text-4xl uppercase">Webmaster</h3>
    </div>
    <nav class="p-4 bg-slate-300 dark:bg-slate-800">
      <ul class="flex flex-wrap justify-evenly items-center gap-10 mt-5">
        <li>
          <RouterLink title="Accueil" to="/" class="uppercase font-bold" active-class="underline">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink title="Projets" to="/projects" class="uppercase font-bold" active-class="underline">Projets</RouterLink>
        </li>
        <li>
          <RouterLink title="A propos" to="/about" class="uppercase font-bold" active-class="underline">A propos</RouterLink>
        </li>
        <li>
          <div class="flex gap-5">
            <a title="Link to my Github" target="_blank" href="https://github.com/Dev-Crisis">
              <vue-feather type="github"></vue-feather>
            </a>
            <a title="Link to my LinkedIn" target="_blank" href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/">
              <vue-feather type="linkedin"></vue-feather>
            </a>
            <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
              <vue-feather type="instagram"></vue-feather>
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="dark:bg-slate-900 bg-slate-400 p-4 text-center">© 2024 Made and Designed by Kevin Bardou</div>
  </footer>
</template>