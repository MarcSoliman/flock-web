<script>
    import HandPackage from "../assets/icon_hand_package.svg"
    import {pageAnswers} from "./stores";
    import {currentDeliveryPage} from "./stores";

    let currentPage;
    currentDeliveryPage.subscribe(value => {
		currentPage = value;
	});

    let localPageAnswers;
    pageAnswers.subscribe(value => {
        localPageAnswers = value;
    }); 
    function updateCurrentPage() {
        if (localPageAnswers[currentPage] == 0 || localPageAnswers[currentPage] == "") return
            
        
        if (currentPage > 2) return
        currentDeliveryPage.update(()=>currentPage + 1)

        console.log(localPageAnswers[currentPage-1])
    }

    $: panelBodyTop = () => {
        switch (currentPage){
            case (0):
                return 'Take Delivery back into your hands'
                break;
            case (1):
                return 'Not too heavy, great!'
                break;
            case (2):
                return 'perfect! '
                break;
            case (3):
                return 'Almost there!'
                break;
        }
    }
    $: panelBodyBottom = () => {
        switch (currentPage){
            case (0):
                return 'and into the hands of our trusted carriers'
                break;
            case (1):
                return 'Now how wide is the package?'
                break;
            case (2):
                return 'and finally how tall is the package?'
                break;
            case (3):
                return 'who are you sending it to?'
                break;
        }
    }
</script>

<div class="panel-wrapper">
    <div class="panel-body">
    <h1 class="header">{@html panelBodyTop()}</h1>
    <img src={HandPackage} alt="Package Handling Icon"/>
    <h3 class="subheader"> {@html panelBodyBottom()}</h3>
    <hr/>

    <button class="next" on:click={updateCurrentPage}>next ></button>
    </div>
</div>

<style type="text/scss">
   .panel-wrapper{
    background: linear-gradient(297.2deg, #F42C8D 47.1%, #F848BB 103.13%);
    border-radius: 61px 0 0 0;
    /* width: 823px; */
    width:30vw;
    height: 100%;
    padding: 0 30px 0 30px;
    flex:.2 0 auto;
    

    .panel-body{
        
        display: flex;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow: hidden;


        .header{
            display: flex;
            margin-top: 30px;
            font-size: 2.5vw;
            font-weight: 500;
            line-height: 60px;
            text-align: center;
            font-family:'Roboto Slab', serif;
            color: #fff;
            flex: .2 ;
        }

        img{
            display: flex;
        width: 10vw;
        flex: .3 ;
       }

        .subheader{
            display: flex;
            font-size: 1.5vw;
            font-weight: 500;
            line-height: 50px;
            text-align: center;
            font-family:'Roboto Slab', serif;
            
            color: #fff;
            flex: .1;
        }

        hr{
            display: flex;
            border-radius: 20px;
            border-style: solid;
            border-color: #fff;
            border-width: 4px;
            width:60%;
            margin-bottom: 20px;
            
        }

        .next{
            display: flex;
            outline: none;
            border: solid #fff;
            border-radius: 20px;
            border-width: 6px;
            background-color: transparent;
            color: #fff;
            font-family: 'Roboto Slab', serif;
            font-weight: 500;
            font-size: 4vw;
            text-align: center;
            padding: 10px 20px;

            cursor: pointer;
            transition: all .15s ease-out;
            flex: .1 1 0;
            &:hover{
                font-size: 5vw;
                font-weight: 600;
            }

            &:active{
                font-size: 4.3vw;
                font-weight: 600;
            }
        }
    }
   }
    @media (max-width: 1173px){
        .panel-wrapper{
            width: 92vw;
            border-radius: 61px;
            padding: 0 30px 30px 30px;

            .header{
                font-size: 3vw!important;
                line-height: 50px!important;
            }

            .subheader{
                font-size: 3vw!important;
                line-height: 50px!important;
            }
        }
    }

    @media (max-width: 760px){
        .panel-wrapper{
            .header{
                font-size: 5vw!important;
                line-height: 35px!important;
            }
            img{
                margin: 20px 0!important;
            }
        .subheader{
                font-size: 5vw!important;
                line-height: 35px!important;
            }
        }
    }


</style>

<!-- markup (zero or more items) goes here -->