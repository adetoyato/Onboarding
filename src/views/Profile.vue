<template>
<div class="profile">
    <b-conatiner fluid>
    <b-row>
        <b-col xl="10" lg="9" sm="9">
            <b-container fluid class="pt-3">
                <b-row class="my-3">
                    <b-col class="py-2">
                        <b-col class="">
                            <b-container class="container-card rounded p-3">
                                <h4 class="px-10"> Travel Details </h4>
                                <b-col class="mt-7">
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
                                    <b-form @submit.prevent>
                                            <div>
                                                <b-button class="pill" pill v-b-modal.modal-prevent-closing variant="outline-info"> Save </b-button>
                                                </div>
                                                <div>
                                                <b-table id="table" class="mt-5" striped hover :items="items" :fields="fields"></b-table>
                                            </div>
                                    </b-form>
                                </b-col>
                            </b-container>
                        </b-col>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
</b-conatiner>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: "Profile",
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

<style lang="scss" scoped>
    .prof {
        align-content: center;
        margin-left: 150px;
        margin-top: 50px;
    }

    .table {
        align-content: center;
        margin-left: 150px;
    }

    .pill {
        margin-left: 1100px;
        width: 100px;
    }

</style>