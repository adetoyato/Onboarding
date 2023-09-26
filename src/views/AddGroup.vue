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
                                                <div class="col-md-12 bg-light text-right">
                                                    <b-button class="sticky-sm-right" pill v-b-modal.modal-prevent-closing> Add </b-button>
                                                </div>
                                                <div>
                                                <b-modal id="modal-prevent-closing" ref="modal" hide-footer title="Create Group" @show="resetModal" @hidden="resetModal" @ok="handleOk">
                                                    <form ref="form" @submit.stop.prevent="handleSubmit">
                                                        <b-form-group label="Destination Country" label-for="info-input" invalid-feedback="Please select Country." :state="infoState">
                                                            <b-dropdown id="dropdown-dropright" dropright text="Select Country" variant="primary" class="m-2" required>
                                                            <b-dropdown-item> Test </b-dropdown-item>
                                                        </b-dropdown>
                                                        </b-form-group>
                                                        <b-form-group label="Destination City" label-for="info-input" invalid-feedback="Please select City." :state="infoState">
                                                            <b-dropdown id="dropdown-dropright" dropright text="Select City" variant="primary" class="m-2" required>
                                                            <b-dropdown-item> Test </b-dropdown-item>
                                                        </b-dropdown>
                                                        </b-form-group>
                                                        <b-form-group label="Group Name" label-for="grpName1" invalid-feedback="Please input Group Name." :state="infoState">
                                                            <b-form-input id="grpName1" v-model="name" :state="nameState" required>
                                                        </b-form-input>
                                                        </b-form-group>
                                                <div class="col-xs-3">
                                                <b-button class="mt-2 mr-2" variant="success" id="create" @click="hideModal"> Create </b-button>
                                                <b-button class="mt-2" variant="danger" id="cancel" @click="toggleModal"> Cancel </b-button>
                                                </div>
                                                    </form>
                                                </b-modal>
                                                <div>
                                                <b-table class="mt-5" striped hover :items="items" :fields="fields"></b-table>
                                                </div>
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
    data() {
        return {
            name: '',
            infoState: null,

            fields: [
                {
                    key: 'Destination Country',
                    sortable: true
                },
                {
                    key: 'Destination City',
                    sortable: true
                },
                {
                    key: 'Group Name',
                    sortable: true
                }
            ]
        }
    },
    methods: {

        showModal() {
            this.$refs['form'].show()
        },
        hideModal() {
            this.$refs['form'].hide()
        },
        checkFormValidity() {
            const valid = tyhis.$refs.form.checkValidity()
            this.infoState = valid
            return valid
        },
        resetModal() {
            this.info = ''
            this.infoState = null
        },
        handleOk(bvModalEvent) {
            bvModalEvent.preventDefault()
            this.handleSubmit()
        },
        handleSubmit() {
            if(!this.checkFormValidity()) {
                return
            }
            this.submittedInfo.push(this.info)
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }
    }
}


</script>

<style lang="scss" scoped>

</style>