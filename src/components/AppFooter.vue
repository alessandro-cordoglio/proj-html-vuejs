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
</style>