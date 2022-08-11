<script>
    import NavLogo from "../assets/NavbarLogo.svg"
    import AccountIcon from "../assets/icon_account.svg"
    import DeliveriesIcon from "../assets/icon_mail.svg"
    import SettingsIcon from "../assets/icon_settings.svg"
    import DarkModeIcon from "../assets/icon_darkmode.svg"
</script>


<nav>
    
    <img class="navbar-logo" src={NavLogo} alt="Flock Navbar Logo"/>

    <ul class="navbar-icons">
        <li>
            <img src={AccountIcon} alt="Account"/>
        </li>
        <li>
            <img src={DeliveriesIcon} alt="Deliveries"/>
        </li>
        <li>
            <img src={SettingsIcon} alt="Settings"/>
        </li>
        <li>
            <img src={DarkModeIcon} alt="Dark Mode"/>
        </li>
    </ul>
</nav>


<style type="text/scss">
    nav{
        height: 55px;
        background-color: #F8489D;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px 50px 20px 20px;
        
        
        img:hover{
            cursor: pointer;
        }

        .navbar-logo{
            display: flex;
            height: 35px;
            margin-right: auto;
            image-rendering: auto;
        }

        .navbar-icons{
            position: relative;
            display: flex;
            align-items: center;
            gap: 30px;
            list-style: none;
            padding-inline-start: 0;

            img{
                height: 35px;
                image-rendering: auto;
            }
        }
    }


</style>

