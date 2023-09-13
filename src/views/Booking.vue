<template>
    <div id="Booking">
        <Header />
        <label for="country" id="country">
            Enter Country:
        </label>
        <input type="text" v-model="country" name="country" value>

        <label for="city" id="city">
            Enter City:
        </label>
        <input type="text" v-model="city" name="city" value>
    <b-form-datepicker id="datepicker" class="date" v-model="newDate"
        :date-format-options="{
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            }" disabled>
    </b-form-datepicker>
    </div>

</template>
<script>
import Header from "../components/Header.vue"
    export default {
        components: {
            Header
        },
        data () {
            return{
                newDate: new Date(),
                city: '',
                country: '',
            }
        },
        methods: {
            login () {
                this.$store.dispatch('login', {
                    city: this.city,
                    country: this.country
                })
                .then( () => {
                    this.$router.push({ name: 'dashboard' })
                })
            }
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
    margin-left: 800px;
}

#city {
    margin-top: 250px;
    margin-left: 250px;
}
</style>