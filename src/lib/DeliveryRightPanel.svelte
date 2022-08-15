<script>
    import HandPackage from "../assets/icon_hand_package.svg"
</script>

<div class="panel-wrapper">
    <div class="panel-body">
    <h1 class="header">Take Delivery back into your hands</h1>
    <img src={HandPackage} alt="Package Handling Icon"/>
    <h3 class="subheader"> and into the hands of our trusted carriers</h3>
    <hr/>
    <button class="next">next ></button>
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
            width: 100%;
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

</style>

<!-- markup (zero or more items) goes here -->