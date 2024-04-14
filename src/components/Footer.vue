<template>
  <footer>
    <div class="p-4 flex gap-3 flex-col justify-center items-center bg-slate-300 dark:bg-slate-800 w-full">
      <h2 class="text-4xl sm:text-5xl md:text-6xl 2xl:text-6xl text-black uppercase text-shadow-black dark:text-shadow-white">
        Kevin Bardou</h2>
      <h3 class="text-3xl md:text-4xl 2xl:text-4xl uppercase">Webmaster</h3>
    </div>
    <nav class="py-1 bg-slate-300 dark:bg-slate-800">
      <ul class="flex flex-wrap justify-evenly items-center gap-10 mt-5 flex-col md:flex-row">
        <li class="p-4">
          <div class="flex gap-10 items-center justify-center flex-wrap">

            <RouterLink title="Accueil" to="/" class="uppercase font-bold hover:text-slate-400" active-class="underline text-slate-400">Accueil</RouterLink>
            <RouterLink title="Projets" to="/projects" class="uppercase font-bold hover:text-slate-400" active-class="underline text-slate-400">Projets
            </RouterLink>
            <RouterLink title="A propos" to="/about" class="uppercase font-bold hover:text-slate-400" active-class="underline text-slate-400">A propos
            </RouterLink>
            <RouterLink title="Contact" to="/contact" class="uppercase font-bold hover:text-slate-400" active-class="underline text-slate-400">Contact
            </RouterLink>
          </div>
        </li>
        <li class="border-t-2 border-slate-300 md:border-none w-full md:w-auto flex justify-center p-4">
          <div class="flex gap-5">
            <a title="Link to my Github" target="_blank" href="https://github.com/Dev-Crisis">
              <vue-feather type="github" class="hover:-translate-y-1 hover:text-slate-400 transition-all"></vue-feather>
            </a>
            <a title="Link to my LinkedIn" target="_blank"
               href="https://www.linkedin.com/in/k%C3%A9vin-bardou-17071a212/">
              <vue-feather type="linkedin" class="hover:-translate-y-1 transition-all hover:text-slate-400"></vue-feather>
            </a>
            <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
              <vue-feather type="instagram" class="hover:-translate-y-1 transition-all hover:text-slate-400"></vue-feather>
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="dark:bg-slate-900 bg-slate-400 p-4 text-center">© 2024 Made and Designed by Kevin Bardou</div>
  </footer>
</template>