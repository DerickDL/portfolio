<template>
    <div class="banner">
        <h1>Hi there.</h1>
        <h1>I am <span class="highlight">Derick</span>,</h1>
        <h1>a <span class="highlight">Web Developer.</span></h1>
    </div>
</template>

<script>
    export default {
        name: 'Landing'
    }
</script>

<style scoped>
    .banner {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        height: 100vh; /* 100% of the viewport height */
        background-color: #254343; /* Your banner background color */
        padding-left: 10%;
        padding-bottom: 15%;
    }

    .banner h1 {
        font-size: 100px;
        white-space: normal;
        color: #68797B;
    }

    .highlight {
        color: #D3DFE1;
        font-weight: 700;
    }
    
</style>