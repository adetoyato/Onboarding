<template>
<div>
<HeaderA />
<b-conatiner fluid>
    <b-row>
        <b-col xl="10" lg="9" sm="9">
            <b-container fluid class="pt-2">
                <b-row class="my-3">
                    <b-col class="py-2">
                        <b-col class="">
                            <b-container class="container-card rounded p-3">
                                <h4 class="title"> Flight Details </h4>
                                <b-col class="mt-3">
                                    <b-form @submit.prevent>
                                        <div class="form-group mb-3 w-50">
                                            <b-form-group label="Airline Carrier" class="label"></b-form-group>
                                            <b-form-input class="text" id="airlineCarrier" type="text" placeholder="Enter Airline Carrier" required></b-form-input>
                                        </div>
                                    <div>
                                        <b-form-group id="country" label="Destination Country" class="label"></b-form-group>
                                        <b-dropdown id="dropdown-dropright" block menu-class="w-100" variant="dark" text="Destination Country" class="dropdown" required>
                                        </b-dropdown>
                                    </div>
                                        <div class="form-group mb-3">
                                            <b-form-group label="Destination City" class="label"></b-form-group>
                                        <b-dropdown id="dropdown-1" text="Destination City" block menu-class="w-100" variant="dark" class="dropdown" required>
                                        </b-dropdown>
                                        </div>
                                        <b-button class="button" pill variant="success" type="submit" @click="saveFlight"> Submit </b-button>
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
import HeaderA from "../components/HeaderA.vue";
export default {
    name: "flight",
    components: {
        HeaderA,
    }
}
</script>


<style lang="scss" scoped>

.title {
    margin-left: 230px;
    margin-bottom: 40px;
}

.label {
    margin-left: 300px;
}

.text {
    margin-left: 400px;
    margin-bottom: 10px;
}

.dropdown {
    margin-left: 400px;
    margin-bottom: 10px;
    width: 540px;
}
.button {
    margin-left: 840px;
    margin-top: 100px;
    width: 100px;
}

</style>