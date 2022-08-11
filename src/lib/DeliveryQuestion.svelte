<script>
    // your script goes here
</script>

<div class="question-wrapper">
    <h4 class="question">How Heavy <span>(or light)</span> is your package?</h4>
    <div class="inputs">
        <input type="text"/>
        <div class="buttons">
        <button class="btn-1 btn-active">kg</button><button class="btn-2">lbs</button>
        </div>
    </div>
</div>

<style type="text/scss">
    .question{
        font-family: 'New Tegomin';

        font-size: 30px;
        color: #F848B8;

        span{
            color: #f848b863;
        }
    }

    input{
        width: 30vw;
        height: 25px;
        padding: 10px;
        font-size: 18px;
        text-align: center;
        color: #fff;
        font-family: 'New Tegomin';
        background: linear-gradient(269.41deg, rgba(255, 68, 208, 0.699)14.82%, #F73DA8 87.27%);
        border-radius: 4px;
        border: 5px solid #F848B8;
    }

    .buttons{

        button{
        border: 4px solid #F848B8;
        color: #fff;
        background-color: #F848B8;
        font-family: 'Roboto Slab', serif;
        font-size: 18px;
        border-radius:5px;

        width:45px;
        height: 40px;
        }

    

    .btn-1{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

    .btn-2{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -5px;
        }

    .btn-active{
        background-color: #fff;
        color: #F848B8;
        font-weight: 500;
    }
    }
</style>

<!-- markup (zero or more items) goes here -->