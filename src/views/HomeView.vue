<template>

  <!-- TODO: Me, Ambitions, Picture 2 buttons My projects, My skills  -->
  <section class="flex justify-center items-center flex-wrap gap-5 py-5 w-full">
    <div class="flex flex-col gap-3 justify-center items-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl text-black uppercase text-shadow-black dark:text-shadow-white">
        Kévin
        Bardou</h1>
      <h2 class="text-3xl md:text-5xl 2xl:text-6xl uppercase"><strong>WebMaster</strong></h2>
    </div>
    <div class="w-5/6 md:w-1/3">
      <Vue3Lottie no-margin :animationData="HeroBanner"/>
    </div>
  </section>

  <!-- TODO: My soft skills -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">Soft skills</h2>
      <img
          src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          class="w-full lg:rounded">
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3">
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">
        Les soft skills d'un développeur sont tout aussi cruciales que ses compétences techniques. La capacité de
        communication efficace est essentielle pour collaborer avec d'autres membres de l'équipe et comprendre les
        besoins des utilisateurs. La pensée critique et la résolution de problèmes permettent au développeur de trouver
        des solutions innovantes et efficaces aux défis rencontrés dans le processus de développement. L'adaptabilité
        est également importante, car le paysage technologique évolue rapidement, nécessitant une capacité à apprendre
        de nouvelles technologies et à s'adapter à de nouveaux environnements de travail. </p>
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">En outre, l'empathie est un
        atout précieux pour comprendre les besoins des utilisateurs finaux et concevoir des solutions qui répondent
        véritablement à leurs besoins. Enfin, la capacité à travailler en équipe et à collaborer efficacement favorise
        un environnement de travail positif et productif, où les idées sont partagées et développées de manière
        collective.</p>
    </div>
  </section>

  <!-- TODO: My last experience -->
  <section class="flex justify-center items-center flex-wrap p-4 md:p-10 gap-5 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">Last Experience</h2>
      <div class="lg:w-[96%] flex flex-col gap-3">
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">
          Pendant mon alternance chez Wodandgo, une entreprise spécialisée dans les accessoires de CrossFit, j'ai occupé
          le poste de webmaster, responsable du site e-commerce. Travaillant avec la stack Wordpress WooCommerce et
          Elementor, j'ai pu appliquer mes compétences techniques pour soutenir l'expansion de l'entreprise sur le
          marché
          en ligne. En tant que webmaster, j'étais chargé de maintenir le site web, de créer et de gérer du contenu,
          ainsi
          que d'optimiser l'expérience utilisateur pour assurer des transactions fluides et sécurisées.</p>
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left"> Cette expérience
          m'a permis d'acquérir une grande attention aux détails et une compréhension approfondie des besoins des
          clients
          dans le domaine du CrossFit. Travailler chez Wodandgo m'a offert une opportunité unique d'apprendre de manière
          pratique dans un environnement professionnel dynamique, tout en contribuant activement au succès de
          l'entreprise
          dans l'industrie en plein essor du fitness et du CrossFit.
        </p>
      </div>
    </div>
    <div class="lg:w-[50%] flex justify-center">
      <img src="https://i0.wp.com/wodandgo.com/wp-content/uploads/2022/11/Fond-Fonce.webp?resize=768%2C978&ssl=1" alt=""
           class="w-60 md:w-96">
    </div>
  </section>

  <!-- TODO: My latest projects -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">My latest projects</h2>
      <img
          :src="Dittobask"
          alt=""
          class="w-full lg:rounded shadow-2xl">
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3">
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">Mon dernier projet personnel, baptisé
        Dittobask, est
        une simulation d'un site de NFT (tokens non fongibles) conçu dans un esprit d'exploration et d'apprentissage.
        Réalisé en HTML et stylisé avec Tailwind CSS, ce projet représente une fusion entre la technologie web et l'art
        numérique. Travaillant en collaboration avec un ami designer basé à Montpellier, nous avons développé ensemble
        une interface immersive et esthétique qui met en valeur les NFT proposés sur la plateforme.</p>
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">Le serveur de développement, créé avec Vite,
        offre une expérience de développement fluide et efficace, me permettant de tester et d'itérer rapidement sur
        notre projet. Dittobask incarne notre passion commune pour la technologie et l'art numérique, tout en nous
        offrant une précieuse opportunité d'explorer de nouveaux concepts et techniques dans le domaine en constante
        évolution des NFT.</p>
    </div>
  </section>

  <!-- TODO: My skills -->
  <section class="flex justify-center items-center flex-wrap gap-5 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center p-4 md:p-10 items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">My Skills</h2>
      <div class="lg:w-[96%] flex flex-col gap-3">
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">
          Un peu de blabla ici
        </p>
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left">
          Un peu de blabla par là
        </p>
      </div>
    </div>
    <Vue3Marquee class="flex"  duration="30">
      <StackCard stackName="Wordpress" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="VueJS" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="ReactJS" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="NextJS" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="Laravel" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="Symfony" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="Flutter" stackDescription="C'est ma description du con !"/>
      <StackCard stackName="Kotlin" stackDescription="C'est ma description du con !"/>
    </Vue3Marquee>
  </section>
  <!-- TODO: My career path -->
  <section
      class="flex justify-center items-center flex-wrap bg-slate-300 p-4 md:p-10 gap-5 dark:bg-slate-800 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">career path</h2>
      <img
          src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          class="w-full lg:rounded">
    </div>
    <div class="lg:w-[45%] flex flex-col gap-3">
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left"></p>
      <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left"></p>
    </div>
  </section>

  <!-- TODO: My story -->
  <section class="flex justify-center items-center flex-wrap p-4 md:p-10 gap-5 md:justify-between">
    <div class="flex flex-col gap-4 md:gap-8 justify-center items-center lg:w-[45%] lg:items-start">
      <h2 class="text-4xl 2xl:text-5xl uppercase">My Story</h2>
      <div class="lg:w-[96%] flex flex-col gap-3">
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left"></p>
        <p class="text-xl lg:text-2xl p-2 md:p-0 text-center lg:text-left"></p>
      </div>
    </div>
    <div class="lg:w-[50%] flex justify-center">
      <img src="https://i0.wp.com/wodandgo.com/wp-content/uploads/2022/11/Fond-Fonce.webp?resize=768%2C978&ssl=1" alt=""
           class="w-60 md:w-96">
    </div>
  </section>
</template>
<script setup>
import HeroBanner from '../assets/animations/hero-banner.json'
import Dittobask from '../assets/projects/dittobask.webp'
import {Vue3Lottie} from "vue3-lottie";
import { Vue3Marquee } from 'vue3-marquee'
import StackCard from "../components/StackCard.vue";
</script>