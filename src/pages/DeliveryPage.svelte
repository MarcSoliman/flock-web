<script>
    import WelcomeBack from '../lib/WelcomeBack.svelte';
    import DeliveryQuestion from '../lib/DeliveryQuestion.svelte';
    import Navbar from '../lib/Navbar.svelte';
    import DeliveryRightPanel from '../lib/DeliveryRightPanel.svelte';
    // your script goes here
</script>

<div class="delivery-page" id="delivery-page">
    <Navbar/>

    <WelcomeBack />

    <h2 class="theperfectpackage">Lets Find the Perfect Carrier Pigeon For You</h2>

    <DeliveryQuestion />

    <DeliveryRightPanel/>

</div>

<style type="text/scss">
    .delivery-page{
        scroll-snap-align: start;
        height: 100vh;
        background-color: #fff;
        z-index: 2;

        .theperfectpackage{
            font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 50px;



        color: #F8489D;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->