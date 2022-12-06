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
        .did{
            color: #088384;
            font-weight: bold;
        }
        h2{
            font-size: 50px;
            color: black;
            font-weight: bold;
        }
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
</style>