<template>

  <!-- TODO: Me, Ambitions, Picture 2 buttons My projects, My skills  -->
  <section class="flex justify-center items-center flex-wrap gap-5 py-5 w-full">
    <div class="flex flex-col gap-3 justify-center items-start">
      <h2 class="text-4xl md:text-5xl 2xl:text-6xl uppercase"><strong>WebMaster</strong></h2>
      <h1 class="text-5xl sm:text-5xl md:text-6xl 2xl:text-8xl text-black uppercase text-shadow-black dark:text-shadow-white">
        Kévin
        Bardou</h1>
    </div>
    <div class="w-5/6 md:w-1/3">
      <Vue3Lottie no-margin :animationData="HeroBanner"/>
    </div>
  </section>

  <!-- TODO: My soft skills -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Compétences interpersonnelles</h2>
      <img
          :src="SoftSkills"
          alt=""
          class="w-full lg:rounded">
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3 py-2">
      <p class="text-xl lg:text-2xl md:p-0 text-left">
        Les soft skills d'un développeur sont tout aussi cruciales que ses compétences techniques. La capacité de
        communication efficace est essentielle pour collaborer avec d'autres membres de l'équipe et comprendre les
        besoins des utilisateurs. La pensée critique et la résolution de problèmes permettent au développeur de trouver
        des solutions innovantes et efficaces aux défis rencontrés dans le processus de développement. L'adaptabilité
        est également importante, car le paysage technologique évolue rapidement, nécessitant une capacité à apprendre
        de nouvelles technologies et à s'adapter à de nouveaux environnements de travail. </p>
      <p class="text-xl lg:text-2xl md:p-0 text-left">En outre, l'empathie est un
        atout précieux pour comprendre les besoins des utilisateurs finaux et concevoir des solutions qui répondent
        véritablement à leurs besoins. Enfin, la capacité à travailler en équipe et à collaborer efficacement favorise
        un environnement de travail positif et productif, où les idées sont partagées et développées de manière
        collective.</p>
    </div>
  </section>

  <!-- TODO: My last experience -->
  <section class="flex justify-center items-center flex-wrap p-4 md:p-10 gap-5 lg:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Ma dernière experience</h2>
      <div class="lg:w-[96%] flex flex-col py-2 gap-3 justify-center items-center md:items-start">
        <p class="text-xl lg:text-2xl md:p-0 text-left">
          Pendant mon alternance chez Wodandgo, une entreprise spécialisée dans les accessoires de CrossFit, j'ai occupé
          le poste de webmaster, responsable du site e-commerce. Travaillant avec la stack Wordpress WooCommerce et
          Elementor, j'ai pu appliquer mes compétences techniques pour soutenir l'expansion de l'entreprise sur le
          marché
          en ligne. En tant que webmaster, j'étais chargé de maintenir le site web, de créer et de gérer du contenu,
          ainsi
          que d'optimiser l'expérience utilisateur pour assurer des transactions fluides et sécurisées.</p>
        <p class="text-xl lg:text-2xl md:p-0 text-left"> Cette expérience
          m'a permis d'acquérir une grande attention aux détails et une compréhension approfondie des besoins des
          clients
          dans le domaine du CrossFit. Travailler chez Wodandgo m'a offert une opportunité unique d'apprendre de manière
          pratique dans un environnement professionnel dynamique, tout en contribuant activement au succès de
          l'entreprise
          dans l'industrie en plein essor du fitness et du CrossFit.
        </p>
        <a target="_blank" href="https://wodandgo.com"
           class="cursor-pointer mt-5 text-lg text-center bg-slate-400 dark:bg-slate-600 transition-all border-[3px] border-slate-300 dark:border-slate-600 uppercase rounded font-bold px-4 py-2 hover:border-slate-400 hover:bg-slate-400 hover:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800">En
          savoir plus
        </a>
      </div>
    </div>
    <div class="lg:w-[50%] flex justify-center">
      <img :src="Wodandgo" alt=""
           class="w-60 md:w-96">
    </div>
  </section>

  <!-- TODO: My latest projects -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Mon dernier projet</h2>
      <img
          :src="Dittobask"
          alt=""
          class="w-full lg:rounded shadow-2xl">
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3 py-2 justify-center items-center lg:items-start">
      <p class="text-xl lg:text-2xl md:p-0 text-left">Mon dernier projet personnel, baptisé
        Dittobask, est
        une simulation d'un site de NFT (tokens non fongibles) conçu dans un esprit d'exploration et d'apprentissage.
        Réalisé en HTML et stylisé avec Tailwind CSS, ce projet représente une fusion entre la technologie web et l'art
        numérique. Travaillant en collaboration avec un ami designer basé à Montpellier, nous avons développé ensemble
        une interface immersive et esthétique qui met en valeur les NFT proposés sur la plateforme.</p>
      <p class="text-xl lg:text-2xl md:p-0 text-left">Le serveur de développement, créé avec Vite,
        offre une expérience de développement fluide et efficace, me permettant de tester et d'itérer rapidement sur
        notre projet. Dittobask incarne notre passion commune pour la technologie et l'art numérique, tout en nous
        offrant une précieuse opportunité d'explorer de nouveaux concepts et techniques dans le domaine en constante
        évolution des NFT.</p>
      <a href="https://dev-crisis.github.io/dittobask/" class="mt-5 text-lg text-center bg-slate-400 dark:bg-slate-600 transition-all border-[3px] border-slate-300 dark:border-slate-600 uppercase rounded font-bold px-4 py-2 hover:border-slate-400 hover:bg-slate-400 hover:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800">En savoir plus
      </a>
    </div>
  </section>

  <!-- TODO: My skills -->
  <section class="flex justify-center items-center flex-wrap py-2 gap-5 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center p-4 md:p-10 items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Mes compétences</h2>
      <div class="flex flex-col gap-3 py-2">
        <p class="text-xl lg:text-2xl md:p-0 text-left">

          En ce qui concerne mes compétences en développement web, je suis à l'aise avec PHP et je maîtrise les
          frameworks WordPress, Laravel et Symfony. J'ai également une solide compréhension de la programmation orientée
          objet (POO), ce qui me permet de concevoir des solutions web robustes et évolutives. Dans le domaine du
          développement JavaScript, je suis compétent avec les frameworks React, Vue.js et Next.js, ce qui me permet de
          créer des interfaces utilisateur dynamiques et interactives.
        </p>
        <p class="text-xl lg:text-2xl md:p-0 text-left">
          En ce qui concerne le développement
          d'applications mobiles, j'ai une expérience pratique avec Kotlin pour Android et Flutter, ce qui me permet de
          développer des applications performantes et multiplateformes. Mon éventail de compétences diversifié dans le
          développement web et mobile me permet d'aborder une variété de projets avec confiance et efficacité.
        </p>
      </div>
    </div>
    <div class="w-full lg:w-[45%] flex flex-col lg:gap-3">
      <Vue3Marquee class="flex" pause-on-hover direction="reverse" :duration="30">
        <StackCard stackName="VueJS" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="ReactJS" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="NextJS" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="Kotlin" stackDescription="C'est ma description du con !"/>
      </Vue3Marquee>
      <Vue3Marquee class="flex" pause-on-hover :duration="30">
        <StackCard stackName="Wordpress" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="Laravel" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="Symfony" stackDescription="C'est ma description du con !"/>
        <StackCard stackName="Flutter" stackDescription="C'est ma description du con !"/>
      </Vue3Marquee>
    </div>
  </section>

  <!-- TODO: My career path -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center p-5 items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Mon parcours</h2>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-8">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <vue-feather type="loader" size="16"></vue-feather>
        </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Nouvelle année à l'IDEM<span
              class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Acutelle</span>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">Entre août 2023 et
            août 2024
          </time>
          <p class="mb-4 text-base font-normal dark:text-gray-400">Après un échec à l'examen de fin
            d'année, je me remet en question et je décide travailler encore plus dur et je me relance à la conquête de
            ce diplôme.</p>
        </li>
        <li class="mb-10 ms-8">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <vue-feather size="16" type="battery-charging"></vue-feather>
        </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">L'IDEM</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">Entre septembre
            2021 et juillet 2022
          </time>
          <p class="text-base font-normal dark:text-gray-400">Je rentre à l'IDEM dans la section Projet
            Pro en developpement web que j'enchaine avec une année dans la section Concepteur Developpeur
            d'Application.</p>
        </li>
        <li class="ms-8">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <vue-feather size="16" type="battery"></vue-feather>
        </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Lycée Pablo Picasso</h3>
          <time class="block mb-2 text-sm font-normal leading-none dark:text-gray-300">Entre septembre
            2018 et juillet 2021
          </time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Entrée au lycée Pablo Picasso, découverte de
            ma passion pour la programmation informatique. Diplômé d'un Baccalauréat STI2D.</p>
        </li>
      </ol>
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3 py-2">
      <p class="text-xl lg:text-2xl md:p-0 text-left">
        Mon parcours étudiant a débuté au lycée Pablo Picasso de Perpignan après avoir terminé le collège. C'est là que
        j'ai découvert ma passion pour l'informatique, en particulier la programmation web, lorsque j'ai intégré une
        option appelée Systèmes Informatiques Numériques en seconde. Au fil des années jusqu'à ma terminale, j'ai
        exploré la programmation en Python et me suis de plus en plus plongé dans le développement web, en apprenant le
        HTML, le CSS et ensuite le JavaScript. Après l'obtention de mon baccalauréat, j'ai découvert que l'IDEM avait
        ouvert une branche dans le domaine de la programmation. </p>
      <p class="text-xl lg:text-2xl md:p-0 text-left">J'ai donc décidé de m'inscrire aux tests
        d'entrée et
        suis devenu étudiant à l'IDEM dans la section Projet Professionnel. Après avoir obtenu ma certification de
        compétences, j'ai poursuivi mes études en me lançant dans la section CDA2 (Concepteur / Développeur
        d'Applications) en 2ème année, bien que cette année soit la seule proposée. Malgré quelques difficultés, je n'ai
        pas réussi l'examen final, mais ma motivation reste intacte et je suis déterminé à obtenir ce diplôme, ce qui
        m'incite à refaire cette année avec encore plus de détermination.</p>
    </div>
  </section>

  <!-- TODO: My story -->
  <section class="flex justify-center items-center flex-wrap p-4 md:p-10 gap-5 lg:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase text-center">Mon histoire</h2>
      <div class="lg:w-[96%] flex flex-col gap-3 items-center md:items-start justify-center py-2">
        <p class="text-xl lg:text-2xl md:p-0 text-left">
          Envie de découvrir les coulisses de mon cheminement dans le développement web ? Depuis mes premiers pas au
          lycée jusqu'à mes ambitions professionnelles, mon histoire est un mélange captivant d'apprentissage,
          d'exploration et de détermination. Chaque étape, du lycée Pablo Picasso à mon passage à l'IDEM, a été une
          occasion d'apprendre, de grandir et de me dépasser. Mes premiers challenges avec la programmation ont été
          remplis de défis, mais aussi d'une curiosité insatiable qui m'a poussé à explorer davantage. C'est cette même
          curiosité qui m'a finalement conduit à me plonger dans le monde du développement web. Depuis lors, j'ai trouvé
          ma passion dans la création d'interfaces interactives et innovantes, une passion qui continue de me motiver
          chaque jour.
        </p>
        <p class="text-xl lg:text-2xl md:p-0 text-left">
          Alors, si vous voulez en savoir plus sur les hauts et les bas de mon parcours, sur les défis
          surmontés et sur les victoires remportées, cliquez maintenant pour plonger dans mon histoire inspirante et
          découvrir ce qui me rend véritablement passionné.
        </p>
<!--        <RouterLink to="/about"-->
<!--                    class="mt-5 text-lg text-center bg-slate-300 dark:bg-slate-800 transition-all border-[3px] border-slate-300 dark:border-slate-800 uppercase rounded font-bold px-4 py-2 hover:border-slate-300 hover:bg-slate-400 hover:text-white dark:hover:border-slate-800 dark:hover:bg-slate-950"-->
<!--                    active-class="underline">Mon Histoire-->
<!--        </RouterLink>-->
      </div>
    </div>
    <div class="lg:w-[40%] flex justify-center">
      <Vue3Lottie no-margin :animationData="Story"/>
    </div>
  </section>

</template>
<script setup>
import HeroBanner from '../assets/animations/hero-banner.json'
import Story from '../assets/animations/story.json'
import Dittobask from '../assets/projects/dittobask.webp'
import Wodandgo from '../assets/images/wodandgo.webp'
import SoftSkills from '../assets/images/soft-skills.webp'
import {Vue3Lottie} from "vue3-lottie";
import {Vue3Marquee} from 'vue3-marquee'
import StackCard from "../components/StackCard.vue";

</script>