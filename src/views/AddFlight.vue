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
                    <h4 class="title">Add Flight</h4>
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
                          <b-col><b-form-group label="Enter Airline Carrier:" class="label1"></b-form-group></b-col>
                          <b-col><b-form-input v-model="flight.airline_carrier" class="grpName" placeholder="Enter Airline Carrier"></b-form-input></b-col>
                        </div>
                        </b-form-row>
                        <b-form-row>
                      <div>
                      <b-col><b-button class="grpbtn" variant="success" type="submit" @click="saveFlight"> Add Flight </b-button></b-col>
                      </div>
                        </b-form-row>
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
                                  @click="deleteFlight(row)">
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
    ...mapState(["flightState"]),
    ...mapGetters({ cityList: "fetchCity", countryList: "fetchCountry", flightList: "fetchFlight"}),
    rows() {
      return this.flightList.length;
    },
  },
  data() {
    return {
      flight: {
        flight_id: "",
        flight_number: "",
        airline_carrier: "",
        country_id: "",
        country_name: "",
        city_id: "",
        city_name: "",
      },
      text: "",
      perPage: 4,
      currentPage: 4,
      fields: [
        {
          key: "flight_number",
          label: "Flight Number",
          sortable: true,
        },
        {
          key: "airline_carrier",
          label: "Airline Carrier",
          sortable: true,
        },
        {
          key: "country_name",
          label: "Destination Country",
          sortable: true,
        },
        {
          key: "city_name",
          label: "Destination City",
          sortable: true,
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
    async deleteFlight(row) {
      await this.$store.dispatch("deleteFlight", row.item.flight_id).then(
        (res) => {
          this.fetchFlight();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    
    async fetchFlight() {
      this.$store.dispatch("fetchFlight").then((res) => {
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
        this.flight.country_name = res.data;
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

        this.flight.city_name = res.data;
      });
    },

    async saveFlight(e) {
      e.preventDefault()
      await axios
      .post(`${API_URL}/flight`, {
        airline_carrier: this.flight.airline_carrier,
        country_id: this.selected,
        country_name: this.selected,
        city_id: this.selected1,
        city_name: this.selected1,
      })

      .then (
        (res) => {
        this.fetchFlight();
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
        this.$bvModal.msgBoxOk(err.response.data.error,{
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
    if (this.flight.flight_number === null || this.flight.flight_number.length< 1) {
      this.state.flight_number = false;
    } else {
      this.state.flight_number = true;
    }
    if (this.flight.airline_carrier === null || this.flight.airline_carrier.length< 1) {
      this.state.airline_carrier = false;
    } else {
      this.state.airline_carrier = true;
    }
    if (this.flight.country_name === null || this.flight.country_name.length < 1) {
      this.state.country_name = false;
    } else {
      this.state.country_name = true;
    }
    if (this.flight.city_name === null || this.flight.city_name.length< 1) {
      this.state.city_name = false;
    } else {
      this.state.city_name = true;
    }
    

    if (
      this.flight.flight_number != null &&
      this.flight.airline_carrier != null &&
      this.flight.country_name != null &&
      this.flight.city_name != null
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchFlight();
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
  margin-left: 900px;
  width: 200px;
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
