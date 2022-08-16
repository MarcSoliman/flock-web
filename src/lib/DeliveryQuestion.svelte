<script>
    // your script goes here
    var current = ""
</script>

<div class="question-wrapper">
    <h4 class="question">How Heavy <span>(or light)</span> is your package?</h4>
    <div class="inputs">
        <input type="text"/>
        <div class="buttons">
        <button class="btn-1 {current === 'kg' ? 'selected' : ''}" on:click="{() => current = 'kg'}">kg</button>
        
        <button class="btn-2 {current === 'lbs' ? 'selected' : ''}" on:click="{() => current = 'lbs'}">lbs</button>
        </div>
    </div>
</div>

<style type="text/scss">
.question-wrapper{
    margin-bottom: 0;
    margin-left:50px;
    display: flex;
    align-items: center;
    flex:.3 0 auto;
    gap: 20px;
    .question{
        font-family: 'New Tegomin';

        font-size: 40px;
        width: 460px;
        color: #F848B8;

        span{
            color: #f848b863;
        }
    }
    .inputs{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    input{
        margin-top: 30px;
        width: 24vw;
        height: 30px;
        padding: 20px 10px;
        font-size: 25px;
        text-align: center;
        color: #fff;
        font-family: 'New Tegomin';
        background: linear-gradient(269.41deg, rgba(255, 68, 208, 0.699)14.82%, #F73DA8 87.27%);
        border-radius: 4px;
        border: 9px solid #F848B8;
        outline: none;
    }

    .buttons{

        button{
        cursor: pointer;
        border: 4px solid #F848B8;
        color: #fff;
        background-color: #F848B8;
        font-family: 'Roboto Slab', serif;
        font-size: 2vw;
        border-radius:10px;
        border-width: 6px;

        width:5vw;
        height: 4vw;

        outline: none;
        }

    }

    .btn-1{
            border-top-right-radius: 0!important;
            border-bottom-right-radius: 0!important;

        }

    .btn-2{
            border-top-left-radius: 0!important;
            border-bottom-left-radius: 0!important;
            margin-left: -5px;

        }

    .selected{
        background-color: #fff!important;
        color: #F848B8!important;
        font-weight: 500!important;
    }

    }

}
@media (max-width: 1173px){
        .question-wrapper{
            margin-top: 50px;
            
        }
        

        .buttons{
        button{
        width:8vw!important;
        height: 8vw!important;
        font-size: 4vw!important;
        }
    }

        .question{
            font-size: 4vw!important;
        }
    }
    @media (max-width: 760px){
        .question-wrapper{
            margin-top: 2vh;
            margin-left:auto;
            margin-right: auto;
            gap:0!important;
        }
        

        .buttons{
        button{
        width:8vw!important;
        height: 8vw!important;
        font-size: 4vw!important;
        }
    }

        .inputs{
            flex:.5;
        }
        .question{
            font-size: 5vw!important;
            flex:.5;
            width:auto!important;
            margin-left: 30px;
        }
}
@media (max-width: 430px){
    .question-wrapper{
        margin-top: 2vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left:0;
        
    }

    input{
        width: 60vw!important;
        padding: 15px 10px!important;
        font-size: 5vw!important;
        margin-top: 2vh!important;
       
        
    }
    .buttons{
        button{
        width:10vw!important;
        height: 10vw!important;
        font-size: 4vw!important;
        }
    }
    .question{
            font-size: min(5vw,2vh)!important;
            text-align: center!important;
            margin-left: 0;
        }
}
</style>

<!-- markup (zero or more items) goes here -->