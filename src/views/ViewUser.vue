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
                                <h4 class="px-8"> View Users </h4>
                                <b-col class="mt-7">
                                    <b-form @submit.prevent>
                                                <div>
                                                    <b-button class="pill" pill v-b-modal.modal-prevent-closing variant="outline-danger"> Delete </b-button>
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
                                                <b-table id="table" class="mt-5 text-center" striped hover :items="tableItems" :fields="fields"></b-table>
                                                  <!-- <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
                                                    <b-form-datepicker v-if="field.type === 'date' && tableItems[data.index].isEdit" :key="index" :type="field.type" :value="tableItems[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)"></b-form-datepicker>
                                                    <b-form-select v-else-if="field.type === 'select' && tableItems[data.index].isEdit" :key="index" :value="tableItems[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)" :options="field.options"></b-form-select>
                                                    <b-button :key="index" v-else-if="field.type === 'edit'" @click="editRowHandler(data)">
                                                        <span v-if="!tableItems[data.index].isEdit">Edit</span>
                                                        <span v-else>Done</span>
                                                    </b-button>
                                                    <b-form-input v-else-if="field.type && tableItems[data.index].isEdit" :key="index" :type="field.type" :value="tableItems[data.index][field.key]" @blur="(e) => inputHandler(e.target.value, data.index, field.key)"></b-form-input>
                                                        <span :key="index" v-else>{{data.value}}</span>
                                                  </template> -->
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
import { mapGetters, mapState } from 'vuex'
  export default {
    name: "table",
    components: {
      HeaderA,
    },
    computed: {
      ...mapState(['userState']),
      ...mapGetters({
        mechanicList: "fetchMechanic"
      }),
      rows() {
        return this.userList.length
      }
    },
    data() {
      return {
        value: '',
        props: ["value"],
        model: {
          prop: "value",
          event: "update",
        },
        state: {
          fName: null,
          lName: null,
          age: null,
          username: null,
          password: null,
        },
        fields: [
          {
            key: 'last_name',
            sortable: true,
          },
          {
            key: 'first_name',
            sortable: true
          },
          {
            key: 'age',
            label: 'Age',
            sortable: false,
            thStyle: {
              width: '20px',
            }
          },
          {   
            key: 'username',
            label: 'Username',
            sortable: false,
          },
          {
            key: 'password',
            label: 'Password',
            sortable: false,
          },
          {
            key: 'group',
            label: 'Group',
            sortable: false,
          }
        ],
    }
  },
  computed: {
    ...mapState(['userState']),
    ...mapGetters({
      userList: "fetchUser",
    }),
    rows() {
      return this.userList.length
    }
  },
  async mounted() {
    await this.$store.dispatch("fetchUser");
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.table {
    align-content: center;
    margin-left: 150px;
    overflow-x: hidden;
    }

.pill {
    margin-left: 1200px;
    width: 100px;
    }

</style>