<template>
<b-conatiner fluid>
    <b-row>
        <b-col xl="10" lg="9" sm="9">
            <b-container fluid class="pt-2">
                <b-row class="my-3">
                    <b-col class="py-2">
                        <b-col class="">
                            <b-container class="container-card rounded p-3">
                                <h4 class="px-3"> Add Destination </h4>
                                <b-col class="mt-3">
                                    <b-form @submit.prevent>
                                        <div class="form-group mb-3">
                                            <b-form-group label="Destination Country" class="dc-1"></b-form-group>
                                            <b-form-input id="destinationCountry" type="text" placeholder="Enter Destination Country" required></b-form-input>
                                        </div>
                                        <div class="form-group mb-3">
                                            <b-form-group label="Destination City" class="dc-1"></b-form-group>
                                            <b-form-input id="destinationCity" type="text" placeholder="Enter Destination City" required></b-form-input>
                                        </div>
                                         <div class="form-group mb-3">
                                            <b-form-group label="Group" class="dc-1"></b-form-group>
                                            <b-form-input id="group" type="text" placeholder="Enter Group Name" required></b-form-input>
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
</template>

<script>
export default {

}


</script>

<style lang="scss" scoped>

</style>