<template>
    <header class="header">
       <h1>{{ title }}</h1>
    <div>
        <ul>
            <li v-for="nav1 in navItems" :key="nav1">
                {{nav}}
            </li>
        </ul>
    </div>
    </header>
</template>
<script>
    export default {
        name: 'Header', 
        data () {
            return {
                navItems:['Dashboard', 'Booking', 'Profile'],
                title: 'LOU GEH TRAVEL'
            }
        }
    }
</script>
<style>
header {
    background-color: #e3580e;
    color: #fff;
    padding-top: 25px;
    padding-left: 100px;
    height: 100px;
    text-align: left;
    font-family: impact;
}

html {
  min-height: 100%;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
}

body {
    background-image: url("https://get.pxhere.com/photo/sky-air-travel-airplane-aerospace-engineering-aviation-cloud-vehicle-aircraft-airline-airliner-evening-sunset-morning-sunrise-flight-business-jet-aircraft-engine-takeoff-landing-wide-body-aircraft-afterglow-dusk-jet-engine-narrow-body-aircraft-general-aviation-light-aircraft-jet-aircraft-dawn-wing-airport-1612630.jpg");
    background-position: center;
    background-size: 2500px;
    background-color: #000;
    color: #fff;
}

.box {
    border-color: #fff;
    border-width: 3px;
}

</style>
