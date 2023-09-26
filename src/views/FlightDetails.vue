<template>
<b-conatiner fluid>
    <b-row>
        <b-col xl="10" lg="9" sm="9">
            <b-container fluid class="pt-2">
                <b-row class="my-3">
                    <b-col class="py-2">
                        <b-col class="">
                            <b-container class="container-card rounded p-3">
                                <h4 class="px-3"> Flight Details </h4>
                                <b-col class="mt-3">
                                    <b-form @submit.prevent>
                                        <div class="form-group mb-3">
                                            <b-form-group label="Airline Carrier" class="dc-1"></b-form-group>
                                            <b-form-input id="airlineCarrier" type="text" placeholder="Enter Airline Carrier" required></b-form-input>
                                        </div>
                                    <div>
                                        <b-form-group label="Destination Country" class="dc-1"></b-form-group>
                                        <b-dropdown id="dropdown-dropright" dropright="true" text="Destination Country" class="m-2" required>
                                            <b-dropdown-item>China</b-dropdown-item>
                                            <b-dropdown-item>Philippines</b-dropdown-item>
                                            <b-dropdown-item>Malaysia</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                        <div class="form-group mb-3">
                                            <b-form-group label="Destination City" class="dc-1"></b-form-group>
                                            <b-dropdown id="dropdown-1" dropright="true" text="Destination City" class="m-md-2" required>
                                            <b-dropdown-item>Beijing</b-dropdown-item>
                                            <b-dropdown-item>Manila</b-dropdown-item>
                                            <b-dropdown-item>Kuala Lumpur</b-dropdown-item>
                                        </b-dropdown>
                                        </div>
                                        <button> Submit </button>
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
</template>

<script>
export default {

}


</script>

<style lang="scss" scoped>

</style>