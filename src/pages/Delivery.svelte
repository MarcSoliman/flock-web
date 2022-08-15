<script>
    import WelcomeBack from '../lib/WelcomeBack.svelte';
    import DeliveryQuestion from '../lib/DeliveryQuestion.svelte';
    import Navbar from '../lib/Navbar.svelte';
    import DeliveryRightPanel from '../lib/DeliveryRightPanel.svelte';
    // your script goes here
</script>

<div class="delivery-page" id="delivery-page">
    <Navbar/>

    <div class='body-wrapper'>
    <div class="left">
    <WelcomeBack />

    <h2 class="theperfectpackage">Lets Find the Perfect Carrier Pigeon For You</h2>

    <DeliveryQuestion />
    </div>
    <div class="right">
    <DeliveryRightPanel/>
    </div>  
    </div>
</div>

<style type="text/scss">
    .delivery-page{

        position: relative;
        scroll-snap-align: start;
        height: 100vh;
        background-color: #fff;
        z-index: 2;

        .body-wrapper{
            display: flex;
            overflow: hidden;
            display: flex;
            
          
        .left{
           
            flex-direction: column;
            display: flex;
            flex: .9;
            height: 100vh;
            
     

            .theperfectpackage{
                font-family: 'Roboto Slab', serif;
                font-style: normal;
                font-weight: 600;
                font-size: 66px;
                line-height: 110px;
                width: 800px;
                margin-left:50px;
                flex:.2 0 auto;
                display: flex;    

                color: #F8489D;
        }
            
        }

        .right{
            
            flex:.1;
            margin-top: 2vh;
            
        }


        @media (min-width: 1173px){
       
    }
    }
}
</style>

<!-- markup (zero or more items) goes here -->