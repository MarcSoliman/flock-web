<script>
    // your script goes here
</script>

<div class='welcome-back-wrapper'>
    <h2 class="welcome-back">Welcome Back <span class="username">Cark </span>!</h2>
</div>

<style type="text/scss">
.welcome-back-wrapper {
    flex:.2 0 auto;
    .welcome-back{
        margin-top: 50px;
        margin-left: 50px;
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 50px;
        display: flex;
        gap: 20px;
        color: #F8489D;

        span{
            color:#fff;
            font-weight: 600;
            text-shadow: -2px -2px 0 #F8489D, 2px -2px 0 #F8489D, -2px 2px 0 #F8489D, 2px 2px 0 #F8489D;
        }
    }
}

@media (max-width: 1173px){
     .welcome-back{
        font-size: 6vw!important;
     }   
    }
</style>

<!-- markup (zero or more items) goes here -->