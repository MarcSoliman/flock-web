<script>
    import WelcomeBack from '../lib/WelcomeBack.svelte';
    import DeliveryQuestion from '../lib/DeliveryQuestion.svelte';
    import Navbar from '../lib/Navbar.svelte';
    import DeliveryRightPanel from '../lib/DeliveryRightPanel.svelte';
    // your script goes here
</script>

<div class="delivery-page" id="delivery-page">
    <Navbar/>

    <div class="left">
    <WelcomeBack />

    <h2 class="theperfectpackage">Lets Find the Perfect Carrier Pigeon For You</h2>

    <DeliveryQuestion />
    </div>
    <div class="right">
    <DeliveryRightPanel/>
    </div>  
</div>

<style type="text/scss">
    .delivery-page{

        .left{
            width: 50vw;
        }


        position: relative;
        scroll-snap-align: start;
        height: 100vh;
        background-color: #fff;
        z-index: 2;

        .theperfectpackage{
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 66px;
        line-height: 110px;
        width: 800px;
        margin-left:50px;
        margin-top:120px;

        color: #F8489D;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->