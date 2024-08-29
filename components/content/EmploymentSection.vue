<template>
    <section>
        <section>
            <div>
                <div class="flex justify-between">
                    <span class="text-xs">{{ data.position }}</span>
                    <!-- TODO: add validator for date object-->
                    <span class="text-xs">{{ data.timeRange[0] }} - {{ data.timeRange[1]??'Nowadays' }}</span>
                </div>
                <div>
                    <span class="text-sm">{{ data.companyName }}</span>
                </div>
            </div>
            <ul class="list-disc ml-4">
                <li v-for="el in data.achievements" key="el" class="text-xs">{{ el }}</li>
            </ul>
        </section>
    </section>
</template>
<script setup>
defineProps({
    data:{
        type: Object,
        required: true,
    }
})
</script>