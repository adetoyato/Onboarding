<template>
    <header class="header">
       <h1>{{ title }}</h1>
       <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">Lou Geh Travel</router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link" to="#"> Dashboard </router-link>
                    <router-link class="link" to="#"> Booking </router-link>
                    <router-link class="link" to="#"> Profile </router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'navigation',
        components: {
        }
    };
        /*name: 'Header', 
        data () {
            return {
                navItems:['Dashboard', 'Booking', 'Profile'],
                title: 'LOU GEH TRAVEL'
            }
        }*/
    
</script>
<style lang="scss">
header {
    background-color: #e3580e;
    color: #fff;
    padding-top: 25px;
    padding-left: 60px;
    height: 100px;
    text-align: left;
    font-family: impact;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6);
    z-index: 99;

    .link {
        font-weight: 500;
        padding: 0 8px;
        transition: .3 color ease;

            &:hover {
             color: #531fb5;
            }
    }

    nav {
        display: flex;
        padding: 25px 0;

        .branding {
            display: flex;
            align-items: center;

            .header {
                font-weight: 600;
                font-size: 24px;
                color: #000;
                text-decoration: none;
            }
        }
    }
}

/*html {
  min-height: 100%;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
}*/

body {
    /*background-image: url("https://get.pxhere.com/photo/sky-air-travel-airplane-aerospace-engineering-aviation-cloud-vehicle-aircraft-airline-airliner-evening-sunset-morning-sunrise-flight-business-jet-aircraft-engine-takeoff-landing-wide-body-aircraft-afterglow-dusk-jet-engine-narrow-body-aircraft-general-aviation-light-aircraft-jet-aircraft-dawn-wing-airport-1612630.jpg");
    background-position: center;
    background-size: 2500px;*/
    background-color: #fff;
    color: #fff;
}

.box {
    border-color: #fff;
    border-width: 3px;
}

</style>
