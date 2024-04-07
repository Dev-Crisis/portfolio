<template>
  <div class="m-4 w-[250px] h-[200px] bg-slate-300 dark:bg-slate-800 flex flex-col items-center justify-center gap-5 rounded-lg py-6">
    <h3 class="font-bold text-2xl rounded-full bg-slate-800 dark:bg-slate-300 py-2 px-3 text-white dark:text-slate-950">
      {{ stackName }}</h3>
    <p class="text-slate-950 dark:text-white">{{ stackDescription }}</p>
  </div>
</template>

<script>
export default {
  props: ['stackName', 'stackDescription']
}
</script>