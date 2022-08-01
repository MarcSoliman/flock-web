<script>
    import LandingPageLogo from '../assets/HomePageLogo.svg'
    import LandingPageFlame1 from '../assets/HomePageFlame1.svg'
    import LandingPageFlame2 from '../assets/HomePageFlame2.svg'
    import Slogan from '../assets/Slogan.svg'
    
</script>


<div class="landingpage">
    <img class="landingpage-logo" src={LandingPageLogo} alt="Big Langing Page Logo"/>
    <img class="flame1" src={LandingPageFlame1} alt="Flame Icon"/>
    <img class="flame2" src={LandingPageFlame2} alt="Flame Icon"/>
    <img class="flame3" src={LandingPageFlame2} alt="Flame Icon"/>
    <img class="landingpage-slogan" src={Slogan} alt="Delivery Recouped"/>
    <h3 class="landingpage-sub-slogan">Pigeons Are Ready To Deliver.</h3>
    <h5 class="accent-text">(at a click of a button)</h5>
    <h2 class="call-to-action">let's see the Flock</h2>
</div>

<style type="text/scss">
    .landingpage{
        
    position:relative;
       

       
        .landingpage-logo{
           width: 1022px;
           position: absolute;
           top: -18.5vh;
           left: -5vw;
            transition: all .5s ease;
        }


        .flame1{
            position: absolute;
            width: 245px;
            height: 157px;
            left: 34px;
            top: 75vh;

        }

        .flame2{
            position: absolute;
             width: 121px;
            height: 71px;
            left: 10px;
            top:90vh;

        }

        .flame3{
            position: absolute;
             width: 121px;
            height: 71px;
            left: -90px;
            top: 72vh;
        }
   

        .landingpage-slogan{
            position: absolute;
            top: 10vh;
            right: 5%;
            width: 50%;
            transition: all .5s ease;
           
        }

        .landingpage-sub-slogan{
            position: absolute;

            right: 6%;
            top: 280px;
            right: 7vw;
            font-weight: 400;
            font-family: 'New Tegomin';
            width: 40%;
            font-size: 48px;
            line-height: 70px;
            text-align: center;
            color: #F848B8;
            transition: all .2s ease;
        }

        .accent-text{
            position: absolute;
            right:22%;
            top: 48vh;
            font-family: 'New Tegomin';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 35px;

            color: rgba(248, 72, 184, 0.22);
            transition: all .2s ease;

        }

        .call-to-action{
            position: absolute;

            right: 10%;
            top: 60vh;
            text-align: center;
            font-family: 'Lora', serif;
            font-style: normal;
            font-weight: 700;
            font-size: 4vw;
            line-height: 116px;

            color: #F8489D;
            transition: all .2s ease;
        }
        // 1665px and below media query
        @media screen and (max-width:1670px) {    
            
            .landingpage-logo{
                width: 50%;
                justify-content: center;
                align-items: center;
                top: -10vh;
                left: -8vw;
            }

            .landingpage-slogan{
                width: 50%;
           
            }

            .landingpage-sub-slogan{
               width: 50%;
               font-size: 2.8vw;
               right: 2%;

               text-align: center;
               
            }

            .accent-text{
                font-size: 1.6vw;
            }

            .call-to-action{
                right:14%;
            }
        }
        @media screen and (max-width:970px) {    
            
            .landingpage-logo{
                width: 40vw;
             
                position: absolute;
                top: 2vh;
                
                left: 30vw;
                justify-content: center;
                align-items: center;
            }

            .landingpage-slogan{
                width: 90%;
                right: 5vw;
                top:40vw;
            }

            .landingpage-sub-slogan{
                width: 90%;
                right: 5vw;
                font-size: 5.5vw;
                top:50vw;
               
            }

            .accent-text{
                width: 70%;
                right: -2vw;
                font-size: 3vw;
                top:65vw;
               
            }

            .call-to-action{
                top:70vw;
                font-size: 7vw;
                right:20vw;
            }
        }
        @media screen and (max-width:660px) {    
            
            .landingpage-logo{
                width: 50vw;
             
                position: absolute;
                top: 2vh;
                
                left: 25vw;
                justify-content: center;
                align-items: center;
            }

            .landingpage-slogan{
                width: 90%;
                right: 5vw;
                top:60vw;
            }

            .landingpage-sub-slogan{
                width: 90%;
                right: 5vw;
                font-size: 7vw;
                top:75vw;
               
            }

            .accent-text{
                width: 70%;
                right: 8vw;
                font-size: 5vw;
                top:110vw;
               
            }

            .call-to-action{
                
                top:115vw;
                font-size: 9vw;
                
                right:10vw;
            }
        }
    }
    </style>

<!-- markup (zero or more items) goes here -->