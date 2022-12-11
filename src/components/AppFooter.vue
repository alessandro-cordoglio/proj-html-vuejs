<script>
    export default {
      data(){
        return{
            footerLinks:[
                {
                    title: 'About',
                    link:[
                        'The Company',
                        'Institutional',
                        'Sociale & Events',
                        'Innovation',
                        'Environment',
                        'Technology',
                    ]
                },
                {
                    title: 'Services',
                    link:[
                        'Audit & Assurance',
                        'Financial Advisory',
                        'Analytics M&A',
                        'Middle Marketing',
                        'Legal Consulting',
                        'Regulatory Risk',
                    ]
                },
                {
                    title: 'Support',
                    link:[
                        'Responsibility',
                        'Terms of Use',
                        'About Cookies',
                        'Privacy Policy',
                        'Accessibility',
                        'Information',
                    ]
                }
            ]
        }
      },
      methods:{
        scrollTop(){
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0; 
        }
      }  
    }
</script>

<template>
    <footer>
        <section class="first_footer_section">
            <div class="container_main card_container d-flex">
                    <div>
                        <div class="footer_logo">
                            <img src="../assets/logo.svg" alt="">
                        </div>
                        <div class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div class="info_footer_container">
                            <div class="info_footer d-flex align-items-center">
                                <div class="info_footer_pic">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <span>+1 (305) 1234-5678</span>
                            </div>
                            <div class="info_footer d-flex align-items-center">
                                <div class="info_footer_pic">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <span>hello@example.com</span>
                            </div>
                            <div class="info_footer d-flex align-items-center">
                                <div class="info_footer_pic">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <span>Main Avenue, 987</span>
                            </div>
                            <button class="my_button">GET IN TOUCH</button>
                        </div>
                    </div>

                    <div class="footer_card col-4" v-for="link in footerLinks">
                        <div class="footer_c_title">
                            {{link.title}}
                        </div>
                        <div class="links_container">
                            <ul class="list_reset">
                                <li v-for="element in link.link"><a href=""><i class="fa-solid fa-chevron-right"></i>{{element}}</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>

        <section class="second_footer_section">
                <div class="copyright d-flex justify-content-between align-items-center">    
                    <div class="left_col">
                        <span>Enjoy the low price.We are tracking any intention of piracy.</span>
                    </div>
                    <div class="right_col">
                        &#169;2020 NEXGEN is Proudly Powered by <span class="colored_word">Codings</span>.
                    </div>  
                    <div class="button_col">
                        <button @click="scrollTop" class="scroll_button"><i class="fa-solid fa-arrow-up"></i></button>
                    </div>
                </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
    .first_footer_section{
        color: #a0a6aa;
        padding-top: 150px;
        padding-bottom: 150px;
        background-color: var(--section2) ;
        .card_container{
            padding-right: 350px;
        }
        .footer_logo{
            max-width: 150px
        }
        .info_footer_container{
            margin-top: 25px;
            .info_footer{
                margin-top: 10px;
                .info_footer_pic{
                    margin-right: 8px;
                }
            }
            button{
                color: white ;
                margin-top: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        }
        .footer_card{
            padding: 40px 50px;
            margin-left: 50px;
            border-radius: 10px;
            background-color: rgba($color: #1a1b35, $alpha: 0.3);
            .footer_c_title{
                color: white;
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .links_container{
                li{
                    margin-top: 10px;
                    a{
                        text-decoration: none;
                        color: #a0a6aa;
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
        }
    }
    .second_footer_section{
        background-color: black;
        color: #a0a6aa;
        padding-left: 351.5px;
        padding-top: 30px ;
        padding-bottom: 30px;
        padding-right: 30px;
        .copyright{
           .colored_word{
            color: var(--elements);
           }
           .right_col{
            padding-left: 90px;
           }
           .button_col{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--section2);
            text-align: center;
            padding: 8px;
            font-size: 25px;
            button{
                border: none;
                background-color: transparent;
            }
           }
        }
    }
</style>