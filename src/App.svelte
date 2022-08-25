<script lang="ts">

  import {Router, Link, Route} from 'svelte-routing';

  import LandingPage from "./pages/Landing.svelte"
  import DeliveryPage from "./pages/Delivery.svelte";

  
</script>

<div class="app">
  <div class="sections">
  <LandingPage/>
  <DeliveryPage/>
  </div>
</div>


<style type="text/scss">

.app {
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
  display: none;
}

  .sections {
    scroll-snap-stop: always;
    width: 100%;
    height: calc(100vh - 55px);

    position: relative;


    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    }
  }




</style>