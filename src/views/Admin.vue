<template>
  <div class="booking">
    <h1 class="pg-header"> View Users </h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th> Destination </th>
                <th> Date of Departure </th>
                <th> Time of Departure </th>
                <th> Group </th>
                <th></th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'bookings',

    data () {
        return {
            bookings: []
        }
    },
    methods: {
        fetchBookings(){
            this.$stoe.get('')
            .then(function(response){
                console.log(response.body);
                this.customers = JSON.parse(response.body);
            });
        }
    },
    created: function(){
        this.fetchBookings();
    }
}
</script>

<style lang="scss" scoped>

</style>