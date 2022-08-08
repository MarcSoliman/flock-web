<script>
    import WelcomeBack from '../components/WelcomeBack.svelte';
    import DeliveryQuestion from '../components/DeliveryQuestion.svelte';
    import Navbar from '../components/navbar.svelte';
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