<template>
  <section class="flex justify-center items-center flex-wrap gap-5 py-5 w-full">
    <div class="flex flex-col gap-3 justify-center items-start">
      <h1 class="text-5xl sm:text-5xl md:text-7xl 2xl:text-9xl text-black uppercase text-shadow-black dark:text-shadow-white">
        A Propos</h1>
    </div>
    <div class="w-5/6 md:w-1/3">
      <Vue3Lottie no-margin :animationData="About"/>
    </div>
  </section>
  <!-- TODO: My student path  -->
  <section class="flex flex-col items-center">
    <h2 class="text-4xl lg:text-6xl uppercase text-center bg-slate-300 p-4 md:p-10 dark:bg-slate-800 w-full">
      Mon Parcours étudiant</h2>
    <div class="flex flex-col gap-5 p-5 lg:px-5 lg:py-10">
      <p class="text-lg">
        Pendant mes années au lycée Pablo Picasso de Perpignan, j'ai entrepris un voyage passionnant dans le monde de
        l'informatique qui a façonné mes aspirations futures. Dès ma première année en seconde technologique, j'ai été
        captivé par l'univers des sites web, une révélation qui a été le point de départ de ma passion pour la création
        en
        ligne. Optant pour l'option Systèmes d'Information et Numérique (SIN), j'ai plongé tête baissée dans
        l'apprentissage des langages de programmation web, tels que le HTML et le CSS, qui ont alimenté ma créativité
        naissante.
      </p>

      <p class="text-lg">
        Malgré mes premiers essais peu esthétiques, j'ai rapidement acquis une familiarité avec le code et la conception
        de sites web. Lors de ma première année de première, bien que le focus soit davantage sur le langage Python et
        la
        logique algorithmique, j'ai eu l'opportunité de collaborer avec un ami passionné de design. Cette collaboration
        m'a permis de perfectionner mes compétences en reproduction de maquettes et de découvrir l'importance du travail
        d'équipe dans la réalisation de projets numériques.
      </p>

      <p class="text-lg">
        Au fil des années, j'ai fait preuve de détermination et de persévérance, même au prix de quelques nuits blanches
        (bien que je ne recommande pas cette pratique). Je me suis rendu compte que les cours en classe ne suffisaient
        pas
        à nourrir ma soif d'apprendre ; c'est en pratiquant chez moi que je me sentais réellement épanoui. Ainsi, bien
        que
        j'aie réussi mon Bac avec succès, je savais déjà que mon avenir ne pouvait se limiter à un environnement qui ne
        me
        permettait pas de pleinement exploiter mes compétences et ma passion pour le domaine numérique.
      </p>
    </div>
  </section>
  <!-- TODO: LIDEM -->
  <section class="flex flex-col items-center">
    <h2 class="text-4xl lg:text-6xl uppercase text-center bg-slate-300 p-4 md:p-10 dark:bg-slate-800 w-full">
      L'IDEM</h2>
    <div class="flex flex-col gap-5 p-5 lg:px-5 lg:py-10">
      <p class="text-lg">
        Après mûre réflexion, j'ai décidé de ne pas poursuivre des études supérieures, du moins si elles ne se
        concentraient pas sur le domaine qui m'animait le plus : la programmation informatique. J'ai alors entrepris de
        rechercher des écoles intégrant l'informatique dans leur cursus, et deux options se sont présentées : L'IMERIR
        et
        l'IDEM. J'ai contacté l'IMERIR et passé des tests avec d'autres candidats, mais mes résultats scolaires passés
        m'ont finalement fait échouer, même si j'avais réussi la partie logique. De plus, j'ai réalisé que la formation
        était davantage axée sur la robotique que sur le développement web ou mobile, ce qui ne correspondait pas à mes
        attentes.
      </p>

      <p class="text-lg">
        Je me suis alors tourné vers ma deuxième option, L'IDEM, et dès les premiers tests, j'ai compris que ce qui
        comptait le plus pour eux n'étaient pas mes notes, mais bien ma passion et mon comportement. Avec succès, j'ai
        franchi ces épreuves et intégré la section "projet pro Développement web".
      </p>

      <p class="text-lg">
        Au cours de cette formation, j'ai eu l'opportunité de rencontrer des personnes de tous âges et d'apprendre des
        langages essentiels pour les sites actuels, tels que PHP, JavaScript, ainsi que des frameworks comme React.JS et
        Symfony, sans oublier le CMS Wordpress, largement utilisé dans l'industrie. À la fin de cette étape, j'ai obtenu
        mon certificat de compétences complet, avec tous les indicateurs au vert.
      </p>
      <p class="text-lg">
        Mon parcours ne s'est pas arrêté là. J'ai saisi l'opportunité d'un stage chez Comelse pour valider cette section
        et poursuivre vers ma prochaine étape : l'obtention du Titre RNCP 6 Concepteur / Développeur d'Application.
      </p>

      <p class="text-lg">
        Durant ma première année dans ce programme, j'ai décidé de m'inscrire au code de la route, que j'ai obtenu avec
        succès. J'ai également commencé mes premières heures de conduite, malgré quelques difficultés. Malgré ces défis,
        le permis a été une grande réussite pour moi.
      </p>

      <p class="text-lg">
        Pendant cette année, j'ai accumulé une précieuse expérience chez Comelse, consacrant des heures à réviser et à
        rendre tous les projets. À la fin, j'ai obtenu un livret de compétences complet. Cependant, lors de mon passage
        devant le jury, le diplôme n'a pas été validé pour intégrer mon année. Après avoir pris du recul sur cet échec,
        j'ai finalement accepté la situation et décidé de renvoyer mon dossier pour refaire cette année, en adoptant une
        perspective différente.
      </p>

      <p class="text-lg">
        J'ai alors trouvé une opportunité chez Wodandgo, une entreprise spécialisée dans la vente d'accessoires de cross
        training pour débutants et expérimentés. Ils recherchaient un développeur pour rejoindre leur équipe, et j'ai
        passé l'entretien d'embauche avec le patron de la marque. Ce nouveau défi était particulièrement stimulant pour
        moi, car cette fois-ci, j'étais la personne possédant les connaissances sur lesquelles on devait s'appuyer.
        Contrairement à l'année précédente, où je pouvais compter sur deux autres développeurs plus expérimentés, cette
        fois-ci, je devais me débrouiller seul, car j'étais responsable de mon propre projet : le site web de la marque.

        <!--   Completer après la fin de l'année   -->
      </p>
    </div>
  </section>
  <!-- TODO: My hobbies -->
  <section class="flex flex-col items-center">
    <h2 class="text-4xl lg:text-6xl uppercase text-center bg-slate-300 p-4 md:p-10 dark:bg-slate-800 w-full">
      Mes Passions</h2>
    <div class="flex flex-col gap-5 p-5 lg:px-5 lg:py-10">
      <p class="text-lg">
        Le sport fait partie intégrante de ma vie, c'est une véritable passion qui m'anime au quotidien. En tant que
        personne très dynamique, j'ai toujours ressenti le besoin d'être productive et de me dépenser physiquement.
        C'est
        pourquoi je pratique plusieurs sports, chacun apportant sa dose d'excitation et de satisfaction. Je suis
        régulièrement les matchs devant la télévision. Suivre les performances de mes équipes
        préférées est une source d'inspiration et de motivation pour moi
      </p>

      <p class="text-lg">
        Mon amour pour le football est indéniable, c'est un sport qui m'a toujours fasciné par son dynamisme, son esprit
        d'équipe et ses moments d'intensité. Chaque match est une occasion de me dépasser et de vivre des émotions
        uniques
        sur le terrain.
      </p>

      <p class="text-lg">
        Mais ma passion ne se limite pas au football. J'apprécie également d'autres disciplines sportives telles que le
        tennis de table et le volley. Chaque sport apporte sa propre expérience et me permet de diversifier mes
        activités
        physiques, tout en cultivant des compétences différentes.
      </p>
      <p class="text-lg">
        En dehors des terrains et des tables, je consacre également une partie de mon temps au renforcement musculaire.
        Pour moi, il est essentiel de maintenir une condition physique optimale, non seulement pour performer dans mes
        sports préférés, mais aussi pour assurer mon bien-être général.
      </p>
      <p class="text-lg">
        Une alimentation saine accompagne naturellement mon mode de vie actif. Je suis attentif à ce que je mange,
        privilégiant les aliments nutritifs qui soutiennent mes performances sportives et ma santé globale. C'est une
        composante essentielle de mon équilibre de vie et de mon engagement envers le sport.
      </p>
    </div>
  </section>
</template>
<script setup>
import About from "../assets/animations/about.json";
</script>