<script>
    export default {
        data(){
            return{
                links:[
                    'HOME',
                    'ABOUT',
                    'SERVICES',
                    'PRICING',
                    'BLOG',
                ]
            }
        },
        components:{
        },
        
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
            <div class="hero text-white">
                <nav class="container_main nav_layout d-flex align-items-center">
                    <div class="nav_logo">
                        <img src="../assets/logo.svg" alt="">
                    </div>
                    <div class="nav_links">
                        <ul>
                            <li v-for="link in links">
                                <a href="">{{link}}</a>
                            </li>
                            <button  class="my_button-fill"> GET IN TOUCH </button>
                        </ul>
                    </div>
                </nav>
                <div class="hero_content container_hero">
                    <div class="text-center">
                        <h1 class="title">Lead ~ Customer</h1>
                        <span>Succesful strategies require data analysis, creativity and customer focus, taking advantage of the lastest technologies to offer excellent services.</span>
                        <div class="buttons mt-5">
                            <button  class="text-white my_button-fill me-3"> GET IN TOUCH </button>
                            <button  class="text-white my_button"> READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    .header_info{
        background-color: #21333E;
        padding: 10px;
    }
    .hero{
        background-color: black;
        .nav_layout{
            padding-top: 20px;
            justify-content: space-between;
            
            .nav_logo img{
                width: 200px ;
            }
            .nav_links{
                font-size: 18px;
                li{
                    margin-left: 20px;
                }
                .my_button-fill{
                    margin-left: 30px;
                    color: white;
                }
            }
        }
        .hero_content{
            margin-top: 200px;
            padding: 50px 0;
            h1{
                font-size: 80px;
                font-weight: 900;
            }
            .buttons{
                button{
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
        }

    }

</style>