<template>
    <Nav />
    <RouterView />
</template>

<script>
export default {
    name: 'App',
    components: {
        Nav,
        RouterView
    }
}

import Nav from './components/NavBar.vue'

import { RouterView } from 'vue-router'
</script>

<style>
    body, html {
        height: 100%;
        margin: 0;
        font-family: 'League Spartan', sans-serif;
        background-color: #254343;
    }
</style>
