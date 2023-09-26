<template>
  <div class="profile">
    <b-container fluid id="profile">
        <b-col class="prof">
            <b-form-group id="inputG1" label="First Name" label-for="firstName">
                <b-form-input id="firstName" v-model="fName" placeholder="First Name">
                </b-form-input>
            </b-form-group>
             <b-form-group id="inputG2" label="Last Name" label-for="lastName">
                <b-form-input id="lastName" v-model="fName" placeholder="Last Name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="inputG3" label="Age" label-for="age">
                <b-form-input id="age" v-model="fName" placeholder="Age">
                </b-form-input>
            </b-form-group>
        </b-col>
    </b-container>
    <b-container>
    <b-form-group id="table" label="Travel Details" class="dc-1"></b-form-group>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                age: '',
                checked: []
            },
            fields: [
            {
            key: 'lastName',
            sortable: true
            },
            {
            key: 'firstName',
            sortable: true
            },
            {
            key: 'age',
            label: 'Age',
            sortable: false,
            },
            {
            key: 'group',
            label: 'Group',
            sortable: true,
            },
            {   
            key: 'destinationCity',
            label: 'Destination City',
            sortable: true,
            },
            {
            key: 'destinationCountry',
            label: 'Destination Country',
            sortable: true,
            },
                {   
            key: 'airCarrier',
            label: 'Airline Carrier',
            sortable: true,
            },
            {
            key: 'departureDate',
            label: 'Departure Date',
            sortable: true,
            },
            {
            key: 'flightNo',
            label: 'Flight Number',
            sortable: true,
            },
        ],
        }
    },
    methods: {
    }
}
</script>

<style>

</style>