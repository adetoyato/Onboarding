<template>
    <div class="card bg-black text-black" style="max-width: 1920px;">  
    <img src="../assets/img/carousel6.jpg" class="card-img" alt="beach1" style="max-height:900px;"/>
    <div class="card-img-overlay" style="background-color: rgba(255, 255, 255, 0.3); max-height:900px;">
    <h1 class="title">Book Now!</h1>
    <div>
    <div class="booking">
        <b-container id="container">
        <div class="form-group mb-3">
            <b-form-group label="Destination Country" class="dc-1"></b-form-group>
            <b-form-input id="destCountry" type="text" placeholder="Choose Destination Country" required></b-form-input>
        </div>
        <div class="form-group mb-3">
            <b-form-group label="Destination City" class="dc-1"></b-form-group>
            <b-form-input id="destCity" type="text" placeholder="Choose Destination City" required></b-form-input>
        </div>
        <div>
            <label for="depDate">Depart on:</label>
            <b-form-datepicker id="depDate" placeholder="Choose Departure Date" locale="en"></b-form-datepicker>
        </div>
        <b-row>
            <label for="depTime">Time of Departure: </label>
            <b-col md="auto">
            <b-time v-model="value" class="border rounded p-2" locale="en" @context="onContext"></b-time>
            <b-button size="sm" variant="danger" v-if="value" @click="clearTime"> Clear Time </b-button>
            <b-button size="sm" variant="primary" class="ml-auto" @click="setNow"> Set Time </b-button>
        </b-col>
        </b-row>
        <b-button class="btn float-right">Book Travel</b-button>
        </b-container>
    </div>
</div>
</div>
</div>


</template>
<script>
    export default {
        components: {
        },
        data () {
            return{
                value: null,
                city: '',
                country: '',
            }
        },
        methods: {
            setNow() {
                const now = new Date ()
                this.value = now.toTimeString().slice(0,8)
            },
            clearTime() {
                this.value = ''
            }
        }
    }
</script>
<style lang="scss" scoped>

body {
    background-color: #000;
}
div {
    align-self: center;
    justify-content: center;
    margin: 10px;
    
    .title {
        padding-top: 150px;
        padding-left: 20px;
    }

    .container {
        border-color: black;
        border-width: 3px;
        margin-top: 10px;
        padding-top: 20px;
    }
    
}
</style>