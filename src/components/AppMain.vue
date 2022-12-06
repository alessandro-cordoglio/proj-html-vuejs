<script>
    export default {
        data(){
            return{
              cardFirstSection:[
                {
                    image:'fa-solid fa-user-group',
                    category:'Human Capital',
                    text:'Humanizing business: Harness the power of thechnology to improve the way people work.'
                },
                {
                    image:'fa-solid fa-chart-pie',
                    category:'Core Business',
                    text:'It takes innovative approaches to transform, modernize, and run existing platforms.'
                },
                {
                    image:'fa-solid fa-gauge',
                    category:'Performance',
                    text:'Achieving maximum impact and value from investments in finance and supply chain.'
                }

              ]  
            }
        }
    }
</script>

<template>
    <main>
        <section class="first_section">
            <div class="container_main">
                <div class="card_container">
                    <div class="my_card" v-for="card in cardFirstSection">
                        <div class="propic mb-4">
                            <i :class="card.image"></i>
                        </div>
                        <div class="category mb-4">
                            <h3>{{card.category}}</h3>
                        </div>
                        <div class="info">
                            {{card.text}}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="network_section">
                <div class="section_container d-flex">
                    <div class="left-col ">
                        <span class="did">ABOUT THE NETWORK</span>
                        <h2 class="mt-4 mb-4"><span class="fancy_word">The</span> Company</h2>
                        <span>For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients</span>
                        <div class="d-flex flex-wrap mt-5 badges_container">
                            <div class="col-6 _badge">
                                <h3><i class="fa-solid fa-award"></i> Tradition</h3>
                                Lorem ipsum dolor sit amet consecteur adipiscing elit.
                            </div>
                            <div class="col-6 _badge">
                                <h3><i class="fa-solid fa-lock"></i>Security</h3>
                                Lorem ipsum dolor sit amet consecteur adipiscing elit.
                            </div>
                            <div class="col-6 _badge">
                                <h3><i class="fa-solid fa-clipboard-list"></i> Certificate</h3>
                                Lorem ipsum dolor sit amet consecteur adipiscing elit.
                            </div>
                            <div class="col-6 _badge">
                                <h3><i class="fa-solid fa-graduation-cap"></i> Expertise</h3>
                                Lorem ipsum dolor sit amet consecteur adipiscing elit.
                            </div>
                           
                        </div>
                    </div>
                    <div class="right-col">
                        <img src="../assets/about-3.jpg" alt="">
                    </div>
                </div>
        </section>

        <section class="services_section">
            <div class="container_main">
                <span class="did">OUR BUSINESS AREA</span>
                <h2 class="mt-4 mb-4">Excellence in <span class="fancy_word">Services</span> </h2>
                <div class="d-flex justify-content-between">
                        <span class="col-9">We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire</span>
                        <button class="col my_button text-white">SEE ALL</button>
                 </div>
                 <div class="row mt-5 service_card_container">
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <div class="card_title">
                            <h5>Audit & Assurance</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                        <div class="card_title">
                            <h5>Financial Advisory</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-chart-simple"></i>
                        </div>
                        <div class="card_title">
                            <h5>Analytics and M&A</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-plane-departure"></i>
                        </div>
                        <div class="card_title">
                            <h5>Middle Marketing</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <div class="card_title">
                            <h5>Legal Consulting</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                    <div class="col-4 service_card">
                        <div class="card_pic">
                            <i class="fa-solid fa-inbox"></i>
                        </div>
                        <div class="card_title">
                            <h5>Regulatory risk</h5>
                        </div>
                        <div class="card_text mb-3">
                            <span>Lorem ipsum dolor sit amet consecteur adipiscing elit. </span>
                        </div>
                        <button class="my_button text-white">READ MORE</button>
                    </div>
                 </div>
            </div>
        </section>

        <section class="price_section">
            <div class="container_main">
                <div class="text-center small_container">
                    <span class="did">MONTHLY PLANS</span>
                    <h2 class="mt-4 mb-4"><span class="fancy_word">Pricing</span> Table</h2>
                    <span>We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation</span>
                </div>
                <div class="plans_container d-flex">
                    <div class="plan_card col-4">
                        <div class="text-center">
                            <div class="plan_pic">
                                <i class="fa-solid fa-rocket"></i>
                            </div>
                            <h5>Standard</h5>
                            <span class="price_text">$<span class="price">490</span> / mo</span>
                        </div>
                        <div class="plan_list">
                            <ul class="list_reset">
                                <li class="d-flex justify-content-between">Standard accounting
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Platform Access
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Business Orientation
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Dedicated Consultant
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Personal Assistance
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="plan_card most_popular col-4 relative">
                            <div class="absolute popular_tag">
                                Most Popular
                            </div>
                        <div class="text-center">
                            <div class="plan_pic">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h5>Professional</h5>
                            <span class="price_text">$<span class="price">890</span> / mo</span>
                        </div>
                        <div class="plan_list">
                            <ul class="list_reset">
                                <li class="d-flex justify-content-between">Standard accounting
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Platform Access
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Business Orientation
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Dedicated Consultant
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Personal Assistance
                                    <div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="plan_card col-4">
                        <div class="text-center">
                            <div class="plan_pic">
                                <i class="fa-solid fa-gem"></i>
                            </div>
                            <h5>Ultimate</h5>
                            <span class="price_text">$<span class="price">1.390</span> / mo</span>
                        </div>
                        <div class="plan_list">
                            <ul class="list_reset">
                                <li class="d-flex justify-content-between">Standard accounting
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Platform Access
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Business Orientation
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Dedicated Consultant
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">Personal Assistance
                                    <div>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .first_section{
        background-color: var(--section1);
        .card_container{
            display: flex;
            justify-content: space-between;
            padding: 25px;
            padding-top: 130px;
            padding-bottom: 130px;

            .my_card{
                width: calc((100%/3) - 25px);
                margin-right: 25px;
                padding: 40px;
                padding-bottom: 65px;
                border-radius: 10px;
                background-color: white;
                &:hover{
                    position: relative;
                    bottom: 20px;
                }
                .propic{
                    background-color: #B7DBE2;
                    padding: 10px;
                    border-radius: 50%;
                    font-size: 20px ;
                    width: 45px;
                    height: 45px;
                    text-align: center;
                    i{
                        color: #177b8f;
                    }
                }
                .category{
                    h3{
                        font-weight: bold !important;
                        font-size: 24px;
                        color: black;
                    }
                }
            }
        }
    }
    .network_section{
      .left-col{
        padding-left: 380px ;
        padding-top: 200px;
        width: 50%;
        .badges_container{
            h3{
                font-size: 25px;
                color: black;
                font-weight: bold;
                i{
                    color: #088384;
                    margin-right: 10px;
                    font-size: 26px;
                }
            }
            ._badge{
                width: calc(50% - 20px);
                margin-right: 20px;
                margin-top: 40px ;
            }
        }
      }
      .right-col{
        width: 50%;
        img{
            max-width: 100%;
        }
      }
        
    }
    .services_section{
        padding-top: 150px ;
        padding-bottom: 150px;
        background-color: var(--section2);
        color: rgba(255, 255, 255, 0.699);
        h2{
            color: white;
            .fancy_word{
                color: white;
            }
        }
        .my_button{
            max-width: fit-content;
        }
        .service_card_container{
            .service_card{
                width: calc((100%/3) - 25px);
                margin-right: 25px ;
                padding: 40px 55px ;
                border-radius: 10px;
                background: rgba($color: #2e2929, $alpha: 0.2);
                margin-top: 25px;
                &:hover{
                    position: relative;
                    bottom: 20px;
                    i{
                        color: white;
                    }
                }
            }
            i{
                color: #088384;
                font-size: 35px;
                margin-bottom: 20px;
            }
            h5{
                margin-top: 10px;
                font-size: 25px;
                margin-bottom: 20px;
                color: white;
                font-weight: bold;
            }
            button{
                margin-top: 25px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        }
    }
    .price_section{
        padding: 150px;
        background-color: var(--section1);
        .small_container{
            padding: 0px 250px ;
        }
        .plans_container{
            margin-top: 50px;
            .popular_tag{
                padding: 5px;
                border-radius: 0px 25px 25px 0px;
                background-color: #28b3b3;
                color: white;
                right: 310px;
                top: 30px ;
            }
            .most_popular{
                margin-top: 0px !important;
                margin-bottom: 0px !important;
                padding-top: 80px !important;
                padding-bottom: 80px !important;
            }
            .plan_card{
                margin-right: 25px;
                background-color: white ;
                border-radius: 10px;
                padding: 40px;
                margin-top: 20px;
                margin-bottom: 20px;
          
                .plan_pic{
                    color: #088384;
                    font-size: 40px;
                }
                h5{
                    font-size: 30px;
                    color: black;
                    font-weight: bold;
                }
                .price_text{
                    color: #088384;
                    font-size: 20px;
                    .price{
                        font-size: 40px;
                        font-weight: bold;
                    }
                }
                .plan_list{
                    margin-top: 30px;
                    li{
                        margin: 20px;
                        i{
                            color: #088384;
                        }
                    }
                }
            }
        }
    }
</style>