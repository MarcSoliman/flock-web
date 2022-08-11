<script>
    import WelcomeBack from '../lib/WelcomeBack.svelte';
    import DeliveryQuestion from '../lib/DeliveryQuestion.svelte';
    import Navbar from '../lib/Navbar.svelte';
    // your script goes here
</script>

<div class="delivery-page" id="delivery-page">
    <Navbar/>

    <WelcomeBack />
    <DeliveryQuestion />

</div>

<style>
    .delivery-page{
        scroll-snap-align: start;
        background-color: aqua;
        height: 100vh;
    }
</style>

<!-- markup (zero or more items) goes here -->