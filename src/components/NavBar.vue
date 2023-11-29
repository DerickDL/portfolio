<template>
    <nav class="navbar navbar-expand-lg px-5 sticky-top" :style="{backgroundColor: navBackgroundColor}">
        <div class="container-fluid">
            <RouterLink to="/" class="nav-link px-5 py-4" aria-current="page">JDL</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link px-4 py-2" aria-current="page">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link px-4 py-2" aria-current="page">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/experience" class="nav-link px-4 py-2" aria-current="page">Experience</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/projects" class="nav-link px-4 py-2" aria-current="page">Projects</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link px-4 py-2" aria-current="page">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',

        data() {
            return {
                navBackgroundColor: '#254343'
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },

        methods: {
            handleScroll() {
            this.navBackgroundColor = window.scrollY > 0 ? "rgba(37, 67, 67, 0.9)" : "#254343";
        }
  }
    }

    import { RouterLink } from 'vue-router'
</script>

<style scoped>
    .navbar {
        color: #D3DFE1 !important;
        opacity: 80%;
    }

    .nav-link {
        color: #D3DFE1 !important;
        font-weight: 700;
        font-size: larger;
    }

</style>