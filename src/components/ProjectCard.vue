<template>
  <div class="w-[300px] lg:w-[400px] bg-slate-300 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center gap-3">
    <img :src="projectImagePath" :alt="projectName" class="rounded-t-2xl" loading="lazy" width="100%">
    <h4 class="text-2xl font-bold underline uppercase">{{projectName}}</h4>
    <p class="text-center w-11/12 truncate">{{projectSummary}}</p>
    <a target="_blank" class="uppercase font-bold py-2 px-4 bg-slate-300 dark:bg-slate-600 w-full text-center rounded-b-2xl transition-all hover:bg-slate-950" :href="projectLink">Voir</a>
  </div>
</template>

<script>
export default {
  props: ['projectImagePath', 'projectName', 'projectSummary', 'projectLink']
}
</script>