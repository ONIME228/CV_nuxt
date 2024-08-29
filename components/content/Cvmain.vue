<template>
    <article>
        <p class="text-xs">{{ data.aboutSection }}</p>
        <h3> Employment</h3>
        <ul>
            <li v-for="el in data.employmentHistory" :key="el.timeRange.toString()">
                <EmploymentSection :data="el" />
            </li>
        </ul>
    </article>
</template>
<script setup lang="ts">
const data = await useData();
</script>
<style scoped>
</style>