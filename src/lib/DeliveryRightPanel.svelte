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
    border-radius: 61px 0px 0px 0px;
    /* width: 823px; */
    width:40vw;
    height: 830px;
    position: absolute;
    right:0;
    bottom: 0;
    padding: 0 30px 0 30px;
    

    .panel-body{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;

        .header{
            font-size: 64px;
            font-weight: 500;
            line-height: 116px;
            text-align: center;
            font-family:'Roboto Slab', serif;
            color: #fff;
        }

        .subheader{
            font-size: 30px;
            font-weight: 500;
            line-height: 116px;
            text-align: center;
            font-family:'Roboto Slab', serif;
            color: #fff;
        }

        hr{
            border-radius: 20px;
            border-style: solid;
            border-color: #fff;
            border-width: 4px;
            width:450px;
        }

        .next{
            margin-top: 30px;
            outline: none;
            border: solid #fff;
            border-radius: 20px;
            border-width: 6px;
            background-color: transparent;
            color: #fff;
            font-style: 'Roboto Slab', serif;
            font-weight: 500;
            font-size: 80px;
            text-align: center;
            padding: 10px 20px;

            cursor: pointer;
            transition: all .15s ease-out;

            &:hover{
                font-size: 85px;
                font-weight: 600;
            }

            &:active{
                font-size: 75px;
                font-weight: 600;
            }
        }
    }

   }

</style>

<!-- markup (zero or more items) goes here -->