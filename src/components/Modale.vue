<script setup>
defineProps(['project'])
</script>

<template>
  <div class="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0">

    <h1 class="text-xl">{{ project['name'] }}</h1>
  </div>
</template>