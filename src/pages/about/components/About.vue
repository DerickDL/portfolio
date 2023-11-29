<template>
    <div class="about">
        <h1 class="highlight text-center pb-5">About Me</h1>
        <div class="section">
            <div class="row align-items-center pb-3">
                <div class="col-7 text-center">
                    <h2 class="highlight half-underline1">Education</h2>
                    <p class="about-info">In 2018, I proudly graduated with a degree in <span class="highlight"> Bachelor of Science in Computer Science </span> from <span class="highlight"> Polytechnic University of the Philippines</span>, laying the foundation for my journey into the dynamic <span class="highlight"> world of web development. </span></p>
                </div>
                <div class="col-5">
                    <img src="https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg" class="rounded img-fluid">
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-5">
                    <img src="https://images.pexels.com/photos/1127120/pexels-photo-1127120.jpeg" class="rounded img-fluid">
                </div>
                <div class="col-7 text-center">
                    <h2 class="highlight half-underline2">Hobbies</h2>
                    <p class="about-info">As an active individual, I thrive on <span class="highlight"> outdoor activities and sports. </span> You'll often find me on the <span class="highlight"> basketball court</span>, enjoying the thrill of the game. Beyond that, I prioritize my well-being by hitting the gym, embracing the journey of self-improvement. <span class="highlight"> Family is at the core of my values, and I cherish every moment spent with them.</span></p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style scoped>
    .about {
        height: 100vh; /* 100% of the viewport height */
        background-color: #254343; /* Your banner background color */
        padding-left: 10%;
        padding-right: 10%;
        color: #68797B;
    }

    .about h1 {
        font-weight: 800;
    }

    .section {
        padding-bottom: 50px;
    }

    .section h2 {
        font-weight: 500;
        color: #D3DFE1;
    }

    .section p {
        font-weight: 400;
        font-size: 25px;
    }

    .highlight {
        color: #D3DFE1;
    }

    .about-info {
        padding-left: 10%;
        padding-right: 10%;
    }

    .half-underline1 {
        position: relative;
        display: inline-block;
    }

    .half-underline1::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%; /* Adjust the width as needed for your half-underline effect */
        height: 2px; /* Set the height and adjust as needed */
        background-color: #D3DFE1; /* Set the color of the underline */
    }

    .half-underline2 {
        position: relative;
        display: inline-block;
    }

    .half-underline2::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%; /* Adjust the width as needed for your half-underline effect */
        height: 2px; /* Set the height and adjust as needed */
        background-color: #D3DFE1; /* Set the color of the underline */
    }
</style>