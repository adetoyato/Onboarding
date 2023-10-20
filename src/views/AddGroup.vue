<template>
  <div>
    <HeaderA />
    <b-container fluid>
      <b-row>
        <b-col xl="10" lg="9" sm="9">
          <b-container fluid class="pt-3">
            <b-row class="my-3">
              <b-col class="py-2">
                <b-col class="">
                  <b-container class="container-card rounded p-3">
                    <h4 class="title">Add Destination</h4>
                    <b-col class="mt-7">
                      <b-form-row>
                        <div>
                          <b-col><b-form-group label="Choose Country:" class="label1"></b-form-group></b-col> 
                          <b-col><b-form-select @change="fetchCity()"  class="select" v-model="selected" :options="options"></b-form-select></b-col>
                          <div class="select1 mt-3">Country ID: <strong>{{ selected }}</strong></div>
                        </div>
                        <div>
                          <b-col><b-form-group label="Choose City:" class="label1"></b-form-group></b-col>
                          <b-col><b-form-select class="select" v-model="selected1" :options="options1"></b-form-select></b-col>
                          <div class="select1 mt-3">City ID: <strong>{{ selected1 }}</strong></div>
                        </div>
                        <div>
                          <b-col><b-form-group label="Enter Group Name:" class="label1"></b-form-group></b-col>
                          <b-col><b-form-input v-model="group.group_name" class="grpName" placeholder="Enter Group Name"></b-form-input></b-col>
                        </div>
                      </b-form-row>
                      <b-button class="grpbtn" variant="success" type="submit" @click="saveGroup"> Submit </b-button>
                      <b-form>
                        <div>
                          <div>
                            <b-table
                              id="table"
                              class="mt-5 text-center"
                              striped
                              hover
                              :per-page="perPage"
                              :current-page="currentPage"
                              :items="tableItems"
                              :fields="fields">
                              <template #cell(delete)="row">
                                <b-button
                                  class="btn btn-danger"
                                  title="Delete"
                                  id="delete"
                                  type="submit"
                                  @click="deleteGroup(row)">
                                  <b-icon
                                    class="delete-btn"
                                    icon="trash-fill"></b-icon>
                                </b-button>
                              </template>
                            </b-table>
                            <b-pagination
                                class="pagination"
                                align="center"
                                pills
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                aria-controls="tableItems"></b-pagination>
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
    </b-container>
  </div>
</template>

<script>
import HeaderA from "../components/HeaderA.vue";
import { mapState, mapGetters } from "vuex";
import { API_URL } from "@/config/dev.env";
import axios from "axios";

export default {
  name: "table",
  components: {
    HeaderA,
  },
  computed: {
    ...mapState(["groupState"]),
    ...mapGetters({ groupList: "fetchGroup",  cityList: "fetchCity", countryList: "fetchCountry"}),
    rows() {
      return this.groupList.length;
    },
  },
  data() {
    return {
      group: {
        city_id: "",
        city_name: "",
        country_id: "",
        country_name: "",
        group_id: "",
        group_name: "",
      },
      text: "",
      perPage: 4,
      currentPage: 4,
      fields: [
        {
          key: "city_name",
          label: "Destination City",
          sortable: true,
        },
        {
          key: "country_name",
          label: "Destination Country",
          sortable: true,
        },
        {
          key: "group_name",
          label: "Group",
          sortable: false,
          thStyle: {
            width: "20px",
          },
        },
        {
          key: "delete",
          label: "Delete",
          sortable: false,
        },
      ],
      selected: null,
      selected1: null,
      options: [],
      options1: [],
      tableItems: [],
    };
  },
  methods: {
    // async deleteUser(row) {
    //   await this.$store.dispatch("deleteUser", row.item.user_id).then(
    //     (res) => {
    //       this.fetchUser();
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // },
    async deleteGroup(row) {
      await this.$store.dispatch("deleteGroup", row.item.group_id).then(
        (res) => {
          this.fetchGroup();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    
    async fetchGroup() {
      this.$store.dispatch("fetchGroup").then((res) => {
        console.log(res);
        this.tableItems = res.data;
      });
    },

    async fetchCountry() {
      this.options = [];
      this.$store.dispatch("fetchCountry").then((res) => {
        console.log(res.data)
        

        res.data.forEach((val) => {
          this.options.push({ value: val.country_id, text: val.country_name });
        });

        console.log(this.options);
        this.group.country_name = res.data;
      });
    },

    async fetchCity() {
      this.options1 = [];
      this.$store.dispatch("fetchCity").then((res) => {

        res.data.forEach((val) => {
          if (
            this.selected == val.country_id
          )
          {
            this.options1.push({ value: val.city_id, text: val.city_name });
          }
          
            // this.selected = this.options1.country_name
            // this.options1.push({ value: val.city_id, text: val.city_name });
        });
        console.log("city", this.options1)

        this.group.city_name = res.data;
      });
    },

    async saveGroup(e) {
      e.preventDefault()
      await axios
      .post(`${API_URL}/group`, {
        country_id: this.selected,
        city_id: this.selected1,
        group_name: this.group.group_name,
      })
      .then (
        (res) => {
        this.fetchGroup();
        console.log(res);
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Successfully added!',{
            title: 'Success',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'success',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
        })
        .then(value => {
            this.boxTwo = value
        })
      },
      (err)=> {
        console.log(err);
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Group already exists!',{
            title: 'Error',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
        })
        .then(value => {
            this.boxTwo = value
        })
      })
      
    },
  },

  

  validation() {
    if (this.group.city_name === null || this.user.group.city_name< 1) {
      this.state.city_name = false;
    } else {
      this.state.city_name = true;
    }
    if (this.group.country_name === null || this.group.country_name.length < 1) {
      this.state.country_name = false;
    } else {
      this.state.country_name = true;
    }
    if (this.group.group_name === null || this.group.group_name.length < 1) {
      this.state.group_name = false;
    } else {
      this.state.group_name = true;
    }

    if (
      this.group.city_name != null &&
      this.group.country_name != null &&
      this.group.group_name != null
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchGroup();
    this.fetchCountry();
    // this.fetchCity();
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-left: 150px;
  margin-bottom: 40px;
}

.select {
  margin-left: 150px;
  margin-top: 5px;
}

.label1 {
  margin-left: 150px;
}

.grpName {
  margin-left: 150px;
  margin-top: 20px;
}

.grpbtn {
  margin-top: 10px;
  margin-left: 1150px;
}

.select1 {
  margin-left: 165px;
  margin-bottom: 10px;
}

.table {
  align-content: center;
  margin-left: 150px;
  overflow-x: hidden;
}

.pagination {
  margin-left: 300px;
}

.pill {
  margin-left: 1200px;
  width: 100px;
}
</style>
