<template>
    <div id="Booking">
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
            <b-time v-model="value" locale="en" @context="onContext"></b-time>
        </b-col>
        </b-row>

    </div>

</template>
<script>
    export default {
        components: {
        },
        data () {
            return{
                city: '',
                country: '',
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
.date {
    margin-top: 300px;
    margin-left: 800px;
    width: 350px;
}

#country {
    margin-top: 250px;
    margin-left: 500px;
}

#city {
    margin-top: 250px;
    margin-left: 250px;
}
</style>