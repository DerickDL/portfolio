<template>
    <div class="experience">
        <CareerHistory />
        <Skills />
    </div>
    
</template>

<script>
    export default {
        name: 'Experience',
        components: {
            CareerHistory,
            Skills
        }
    }

    import CareerHistory from './components/CareerHistory.vue';
    import Skills from './components/Skills.vue';
</script>

<style scoped>
    .experience {
        height: 100vh; /* 100% of the viewport height */
        padding-left: 10%;
        padding-right: 10%;
    }
</style>