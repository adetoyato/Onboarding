<template>
<div>
<HeaderA />
<b-conatiner fluid>
    <b-row>
        <b-col xl="10" lg="9" sm="9">
            <b-container fluid class="pt-3">
                <b-row class="my-3">
                    <b-col class="py-2">
                        <b-col class="">
                            <b-container class="container-card rounded p-3">
                                <h4 class="px-8"> Add Destination </h4>
                                <b-col class="mt-7">
                                    <b-form @submit.prevent>
                                                <div>
                                                    <b-button class="pill" pill v-b-modal.modal-prevent-closing variant="outline-danger"> Add </b-button>
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
                                                <b-button class="mt-2 mr-2 position-relative" variant="success" @click="hideModal"> Create </b-button>
                                                <b-button class="mt-2 position-fixed" variant="danger" @click="toggleModal"> Cancel </b-button>
                                                </div>
                                                    </form>
                                                </b-modal>
                                                <div>
                                                <b-table id="table" class="mt-5 text-center" striped hover :items="items" :fields="fields"></b-table>
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
</div>
</template>

<script>

import HeaderA from "../components/HeaderA.vue"
export default {
    components: {
        HeaderA,
    },
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
            this.$refs['modal'].show()
        },
        hideModal() {
            this.$refs['modal'].hide()
        },
        toggleModal() {
            this.$refs['modal'].hide()
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

    .table {
    align-content: center;
    margin-left: 150px;
    }

    .pill {
    margin-left: 1200px;
    width: 100px;
    }

</style>


