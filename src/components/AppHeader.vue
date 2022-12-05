<script>
    export default {
        components:{
        }
    }
</script>

<template>
    <header>
        <section class="header_info">
            <div class="h_info container_main d-flex text-white justify-content-between align-items-center">
                <div class="info_left">
                    <span><i class="fa-solid fa-clock me-2"></i> Open Hours: Mon - Sat - 9:00 - 18:00</span>
                </div>
                <div class="info_right d-flex">
                    <div class="phone_info">
                        <i class="fa-solid fa-phone"></i> +1 (305) 1234-5678
                    </div>
                    <div class="email_info ms-4 me-4">
                        <i class="fa-solid fa-envelope"></i> <a href="">hello@example.com</a> 
                    </div>
                    <div class="d-flex social_component">
                        <a href=""> <i class="fa-brands fa-facebook-f"></i> </a>
                        <a href=""> <i class="fa-brands fa-twitter"></i> </a>
                        <a href=""> <i class="fa-brands fa-linkedin-in"></i> </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero_section">
            <nav class="container_main">
                <div class="nav_logo">
                    <img src="../assets/logo.svg" alt="">
                </div>
            </nav>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    .header_info{
        background-color: #21333E;
        padding: 10px;
    }
    .hero_section{
        background-image: url(../assets/hero-image.png);
        filter: brightness(0.4);
        background-size: cover;

        .nav_logo{
            width: 200px;
        }
    }

</style>