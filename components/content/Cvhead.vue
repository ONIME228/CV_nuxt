<template>
  <header class="flex flex-row">
    <img height="" width="250" class="rounded-full" src="../../public/img/profile.jpg" alt="Profile Picture">
    <div class="flex flex-col">
      <span class="font-bold text-3xl uppercase"> {{ data.personalInfo.name }} </span>
      <span class="text-xl"> {{ data.personalInfo.position }} </span>
      <div class="grid grid-cols-2 gap-4">
        <span class="font-bold col-span-1">{{data.personalInfo.email}}</span>
        <span class="font-bold col-span-1">{{data.personalInfo.phone}}</span>
        <span class="font-bold col-span-2">{{data.personalInfo.linkedin}}</span>
        <span class="font-bold col-span-2">{{data.personalInfo.telegram}}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const data = await useData();
</script>
<style scoped>
</style>