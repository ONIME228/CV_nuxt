<template>
    <div>
        <section v-for="(el,key) in data.additionalInfo" :key="key" class="flex flex-col">
            <span>{{ key }}</span>
            <div v-if="key=== EDUCATION" class="flex flex-col">
                <span> {{ el.degree }}'s Degree </span>
                <span>{{ el.faculty }}</span>
                <span>{{el.timeRange[0]}} - {{el.timeRange[0]}}</span>
            </div>
            <ul v-else>
                <li v-for="item in el" :key="item" class="list-disc ml-4">{{ item }}</li>
            </ul>
        </section>
    </div>
</template>
<script setup>
const data = await useData();
const EDUCATION = 'Education';
</script>