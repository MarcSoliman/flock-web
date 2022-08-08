<script>
    import LandingPageLogo from '../assets/HomePageLogo.svg'
    import LandingPageFlame1 from '../assets/HomePageFlame1.svg'
    import LandingPageFlame2 from '../assets/HomePageFlame2.svg'
    import Arrow from '../assets/Arrow.svg'
    import Slogan from '../assets/Slogan.svg'
    
</script>


<div class="landingpage">  
    <div class="left">
    <img class="landingpage-logo" src={LandingPageLogo} alt="Big Langing Page Logo"/>

    <div class="flames">
        <img class="flame1" src={LandingPageFlame2} alt="Flame Icon"/>
        <img class="flame2" src={LandingPageFlame1} alt="Flame Icon"/>
        <img class="flame3" src={LandingPageFlame2} alt="Flame Icon"/>
        </div>
    </div>

    <div class="right">
    <img class="landingpage-slogan" src={Slogan} alt="Delivery Recouped"/>
    <h3 class="landingpage-sub-slogan">Pigeons Are Ready To Deliver.</h3>
    <h5 class="accent-text">(at a click of a button)</h5>
    <h2 class="call-to-action">let's see the Flock</h2>
    <a href="#delivery-page"  ><img class="landingpage-arrow" src={Arrow} alt="Arrow"/></a>
    </div>

</div>

<style type="text/scss">
    .landingpage{

        scroll-snap-align: start;
        

    .left{
        display: flex;
        flex-direction: column;

        align-items: center;


    .landingpage-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            width: min(50vw, 300px);
            margin-bottom: min(2vw,3rem);
            transition: all 0.6s ease;
        }
    }
          
    
    .right
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-self: center;

        .landingpage-slogan{
        
            width: min(90vw, 600px);
            margin-bottom: min(5vw, 200px);
        }
    

        .landingpage-sub-slogan{
            font-weight: 400;
            font-family: 'New Tegomin';
            margin-top: 0.5rem;
            width: 90%;
            font-size: min(8vw,2rem);
            line-height: 50px;
            text-align: center;
            color: #F848B8;
            margin-bottom: clamp(1rem, 8rem, 3rem);


   
        }

        .accent-text{


            text-align: center;
            font-family: 'New Tegomin';
            font-style: normal;
            font-weight: 400;
            font-size: min(5vw,2rem);
            line-height: 35px;


            color: rgba(248, 72, 184, 0.22);
            margin-bottom: clamp(2px, 8vw, 1.5rem);

        }

        .call-to-action{
            text-align: center;
            font-family: 'Lora', serif;
            font-style: normal;
            font-weight: 700;
            font-size: clamp(1.3rem, 6vw, 3rem);
            line-height: 116px;

            color: #F8489D;
            margin-bottom: clamp(1px, 14vw, 50px);
        }
        .landingpage-arrow{
                width: clamp(60px,20vw,90px);
                height: 60px;
                cursor: pointer;

                transition: transform 0.6s ease;

                &:hover{
                    transform: scale(1.2);
                }
            }
    
    }

    .flames{
        margin-top: 40px;
   
        width: 100px;
        height: 300px;
 
        display: flex;
        flex-direction: column;
        display: none;
 
        transition: all 0.6s ease;


        .flame1,.flame2,.flame3{
            transition: all 0.6s ease;
        }

        .flame1{
            width: 10px;
            margin-left: -60px;

        }
        .flame2{
            width: 10px;
            margin-left: 30px;
            margin-top: -45px;
        }
        .flame3{
            width: 10px;
            margin-left: 2px;
        }
    }
}

    @media (min-width: 1025px){
        
        .landingpage{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            height: 100vh;
             overflow: hidden;
             

            .right{
                flex : .5;
                display: flex;
             
                
                .landingpage-slogan{
                    margin-top: 105px;
                    margin-left: -110px;
                    padding-right: 1rem;
                    width: clamp(600px,50vw,1000px);
            
                    margin-bottom: 35px;
                    
                }

                .landingpage-sub-slogan{
                    
                    font-size:35px;
                    width: 600px;
                    margin-bottom: 40px;
                    padding-right: 1rem;
                }

                .accent-text{
                    font-size: 30px;
                    margin-bottom: 200px;

                }

                .call-to-action{
                    font-size: 50px;
                    margin-bottom: 20px;
                   
                }
                .landingpage-arrow{
                 width: auto;
                 margin-bottom: auto ;
                }

            }

            .left{
                display: flex;
                flex-direction: column;
                flex : .5;
                position: relative;
             


                .landingpage-logo{
                margin-bottom: 0;
        
                
                width: clamp(720px,70vw,870px);

                margin-left: -270px;
                
                margin-top: clamp(-135px,-20vh,-190px);

                }
            
        .flames{
            display: flex;
            margin-top: -60px;
            margin-left: -840px;
            margin-bottom: 0;
            position: absolute;
            top: 800px;
            
        .flame1{
            width: 80px;
        }
        .flame2{
            width: 200px;
        }
        .flame3{
            width: 110px;
        }
        
            }
        }
    }
}

    
       

    </style>

