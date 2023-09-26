<template>
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
            <b-button size="sm" variant="outline-danger" v-if="value" @click="clearTime"> Clear Time </b-button>
            <b-button size="sm" variant="outline-primary" class="ml-auto" @click="setNow"> Set Time </b-button>
        </b-col>
        </b-row>
        <b-button>Book Travel</b-button>
        </b-container>
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
div {
    align-self: center;
    justify-content: center;
    margin: 10px;

    .container {
        border-color: black;
        border-width: 3px;
        margin-top: 10px;
    }

    
}
</style>