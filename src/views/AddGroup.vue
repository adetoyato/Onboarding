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
                                                <b-button class="mt-2 mr-2 position-relative" variant="success" type="submit" @click="saveGroup"> Create </b-button>
                                                <b-button class="mt-2 position-fixed" variant="danger" @click="toggleModal"> Cancel </b-button>
                                                </div>
                                                    </form>
                                                </b-modal>
                                                <div>
                                                <b-table id="table" class="mt-5 text-center" striped hover :items="items" :fields="fields">
                                                    <template #cell(delete)="row">
                                                        <b-button class="btn btn-danger" title="Delete" id="delete" type="submit" @click="deleteUser(row)">
                                                        <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                        </b-button>
                                                    </template>
                                                </b-table>
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
import HeaderA from "../components/HeaderA.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "table",
  components: {
    HeaderA,
  },
  computed: {
    ...mapState(["userState"]),
    ...mapGetters({ userList: "fetchUser" }),
    rows() {
      return this, userList.length;
    },
  },
  data() {
    return {
      user: {
        country_id: null,
        city_id: null,
        group_id: null,
        country_name: null,
        city_name: null,
        group_name: null,
      },
      item: {
        country_id: null,
        city_id: null,
        group_id: null,
        country_name: null,
        city_name: null,
        group_name: null,
      },
      state: {
        country_name: null,
        city_name: null,
        group_name: null,
      },
      fields: [
        {
          key: "country_id",
          label: "Destination Country",
          sortable: true,
        },
        {
          key: "city_id",
          label: "Desitnation City",
          sortable: true,
        },
        {
          key: "group_id",
          label: "Group",
          sortable: false,
          thStyle: {
            width: "20px",
          },
        },
        {
          key: "delete",
          label: "Delete",
        },
      ],
      tableItems: [],
    };
  },
  methods: {
    async deleteUser(row) {
      await this.$store.dispatch("deleteUser", row.item.user_id).then(
        (res) => {
          this.fetchUser();
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async fetchUser() {
      this.$store.dispatch("fetchUser").then((res) => {
        console.log(res);
        this.tableItems = res.data;
      });
    },
  },

  validation() {
    if (this.user.fname === null || this.user.fname.length < 1) {
      this.state.fname = false;
    } else {
      this.state.fname = true;
    }
    if (this.user.lname === null || this.user.lname.length < 1) {
      this.state.lname = false;
    } else {
      this.state.lname = true;
    }
    if (this.user.age === null || this.user.age.length < 1) {
      this.state.age = false;
    } else {
      this.state.age = true;
    }
    if (this.user.username === null || this.user.age.username < 1) {
      this.state.username = false;
    } else {
      this.state.username = true;
    }
    if (this.user.password === null || this.user.age.password < 1) {
      this.state.password = false;
    } else {
      this.state.password = true;
    }
    if (this.user.group === null || this.user.age.group < 1) {
      this.state.group = false;
    } else {
      this.state.group = true;
    }

    if (
      this.user.fname != null &&
      this.user.lname != null &&
      this.user.age != null &&
      this.user.username != null &&
      this.user.password != null &&
      this.user.group != null
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchUser();
  },
};
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


