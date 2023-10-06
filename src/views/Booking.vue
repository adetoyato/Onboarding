<template>
<div>
    <div class="card bg-black text-white" style="max-width: 1920px;">
    <img src="../assets/img/carousel6.jpg" class="card-img" alt="beach1" style="max-height:900px;"/>
    <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.3); max-height:900px;">
    <h1 class="title">Book Now!</h1>
    <div>
    <div class="booking">
        <b-container id="container">
            <div>
                <b-form-group id="country" label="Destination Country" class="dc-1"></b-form-group>
                <b-dropdown id="dropdown-dropright" variant="light" block menu-class="w-100" text="Destination Country" class="m-1" required>
                    <b-dropdown-item>China</b-dropdown-item>
                    <b-dropdown-item>Philippines</b-dropdown-item>
                    <b-dropdown-item>Malaysia</b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="form-group mb-3">
                <b-form-group label="Destination City" class="dc-1"></b-form-group>
                    <b-dropdown id="dropdown-1" text="Destination City" block menu-class="w-100" variant="light" class="m-md-1" required>
                    <b-dropdown-item>Beijing</b-dropdown-item>
                    <b-dropdown-item>Manila</b-dropdown-item>
                    <b-dropdown-item>Kuala Lumpur</b-dropdown-item>
                </b-dropdown>
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