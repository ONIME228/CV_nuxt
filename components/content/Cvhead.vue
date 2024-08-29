<template>
  <header class="flex flex-row justify-around">
    <img class="rounded-full w-[125px] h-[125px]" src="../../public/img/profile.jpg" alt="Profile Picture">
    <div class="flex flex-col">
      <span class="font-bold text-3xl uppercase"> {{ data.personalInfo.name }} </span>
      <span class="text-xl"> {{ data.personalInfo.position }} </span>
      <div class="grid grid-cols-2 gap-4">
        <span class="text-base/2 font-bold col-span-1">{{data.personalInfo.email}}</span>
        <span class="text-base/2 font-bold col-span-1">{{data.personalInfo.phone}}</span>
        <span class="text-base/2 font-bold col-span-2">{{data.personalInfo.linkedin}}</span>
        <span class="text-base/2 font-bold col-span-2">{{data.personalInfo.telegram}}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const data = await useData();
</script>
<style scoped>
</style>