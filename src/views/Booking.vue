<template>
    <div id="Booking">
        <label for="country">
            Enter Country
        </label>
        <input type="text" v-model="country" name="country" value>

        <label for="city">
            Enter City
        </label>
        <input type="text" v-model="city" name="city" value>

    </div>
</template>
<script>
    export default {
        data () {
            return{
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

</style>