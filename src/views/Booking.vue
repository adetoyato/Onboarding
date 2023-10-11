<template>
  <div>
    <div class="card bg-dark text-white" style="max-width: 1920px">
      <img src=../assets/img/carousel6.jpg class="card-img" alt="Stony Beach"/>
      <div
        class="card-img-overlay"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        <h1 class="title">Book Now!</h1>
        <div>
          <div class="booking d-flex justify-content-center">
            <b-container
              id="container"
              class="rounded"
              style="background-color: rgba(255, 255, 255, 0.3)"
            >
              <div>
                <b-button
                  class="pill"
                  block
                  pill
                  v-b-modal.group-modal
                  variant="warning"
                >
                  Choose Destination
                </b-button>
              </div>
              <div>
                <b-modal
                  id="group-modal"
                  ref="modal"
                  hide-footer
                  title="Choose Destination"
                >
                  <b-row class="d-flex justify-content-center">
                    <b-table
                      hover
                      :items="listGroup"
                      :fields="destinationFields"
                      :per-page="perPage"
                      :current-page="currentPage"
                    >
                      <template v-slot:cell(Confirm)="{ item }">
                        <div>
                          <b-button v-b-modal @click="selectGroup(item)">
                            <b-icon icon="check"></b-icon>
                          </b-button>
                        </div>
                      </template>
                    </b-table>
                    <div class="overflow-auto">
                      <div>
                        <h6>Current Page: {{ currentPage }}</h6>
                        <b-pagination
                          align="center"
                          pills
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="listGroup"
                        ></b-pagination>
                      </div>
                    </div>
                  </b-row>
                  <div class="col-xs-3">
                    <b-button
                      class="mt-2 mr-2 position-relative"
                      variant="danger"
                      type="submit"
                      @click="hideModal"
                    >
                      Cancel
                    </b-button>
                  </div>
                </b-modal>
              </div>
              <div class="mt-3">
                Country: <strong>{{ this.destination.country_name }}</strong>
              </div>
              <div class="mt-3">
                City: <strong>{{ this.destination.city_name }}</strong>
              </div>
              <div class="mt-3">
                Group: <strong>{{ this.destination.group_name }}</strong>
              </div>
              <div class="mt-3">
                Airline Carrier:
                <strong>{{
                  listFlights.length > 0 ? listFlights[0].airline_carrier : ""
                }}</strong>
              </div>
              <div class="mb-5">
                <b-form-datepicker
                  :date-format-options="{
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    weekday: 'short',
                  }"
                  v-model="destination.date_confirmed"
                ></b-form-datepicker>
              </div>
              <b-button
                class="btn float-right"
                type="submit"
                variant="success"
                @click="bookTravel"
                >Book Travel</b-button
              >
            </b-container>
            <div class="alert-container mt-3">
              <b-alert dismissible class="alert" v-model="alert.showAlert" @dismissed="alert.showAlert = null" :variant="alert.variant">
                <div class="alertboarder">
                  <b-icon class="mr-2" :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' " fill="black"></b-icon>
                  {{ alert.message }}
                </div>
              </b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { mapState, mapGetters } from "vuex";
import { API_URL } from "@/config/dev.env";
import axios from "axios";

export default {
  components: {
    Footer,
  },
  computed: {
    ...mapState(["groupState"]),
    ...mapGetters({
      cityList: "fetchCity",
      countryList: "fetchCountry",
      groupList: "fetchGroup",
    }),
    rows() {
      return this.groupList.length;
    },
  },
  data() {
    return {
      destination: {
        city_id: "",
        city_name: "",
        country_id: "",
        country_name: "",
        group_id: "",
        group_name: "",
        date_confirmed: "",
      },
      alert: {
        dimissSecs: 0,
        showAlert: 0,
        variant: "",
        message: "",
      },
      perPage: 4,
      currentPage: 1,
      destinationFields: [
        { key: "country_name", label: "Country", sortable: true },
        { key: "city_name", label: "City", sortable: true },
        { key: "group_name", label: "Group", sortable: true },
        { key: "Confirm", label: "Confirm", sortable: false },
      ],
      listGroup: [],
      listFlights: [],
    };
  },

  methods: {
    hideModal() {
      this.$refs["modal"].hide();
    },

    selectGroup(item) {
      this.destination.city_name = item.city_name;
      this.destination.country_name = item.country_name;
      this.destination.group_name = item.group_name;
      this.destination.city_id = item.city_id;
      this.destination.country_id = item.country_id;
      this.destination.group_id = item.group_id;

      //TODO: fetchFlight where city_id ==  item.city_id and country_id ==  item.country_id
      this.fetchFlight();

      this.$bvModal.hide("group-modal");
    },
    setNow() {
      const now = new Date();
    },

    showModal(id) {
      this.index = id;
    },

    async fetchGroup() {
      this.$store.dispatch("fetchGroup").then((res) => {
        this.listGroup = res.data;
      });
    },

    async fetchFlight() {
      this.$store.dispatch("fetchFlight").then((res) => {
        this.listFlights = [];

        res.forEach((val) => {
          if (
            val.country_id == this.destination.country_id &&
            val.city_id == this.destination.city_id
          ) {
            this.listFlights.push(val);
          }
        });
      });
    },

    showAlert(message, variant) {
      this.alert = {
        dismissSecs: 10,
        showAlert: 5,
        message,
        variant
      }
    },

    addTicket() {
      this.$store.dispatch("addTicket", this.destination)
    },


    async bookTravel() {
      const user = JSON.parse(localStorage.user);

      await axios
        .post(`${API_URL}/member`, {
          user_id: user.res[0].user_id,
          group_id: this.destination.group_id,
        })
        .then(
          (res) => {
            axios
              .post(`${API_URL}/ticket`, {
                city_id: this.destination.city_id,
                country_id: this.destination.country_id,
                user_id: user.res[0].user_id,
                date: this.destination.date_confirmed,
                flight_id: this.listFlights[0].flight_id,
                
              })
              .then(
                (res) => {
                  if (!this.validation()) {
                  console.log(res);
                  this.clear();
                  this.$store.dispatch("addTicket", this.ticket);
                  this.ShowAlert("Successfully Booked", "success");
                  }
                  
                },
                (err) => {
                  console.log(err);
                }
              );
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },

  validation() {
    if (
      this.group.country_name === null ||
      this.group.country_name.length < 1
    ) {
      this.state.country_name = false;
    } else {
      this.state.country_name = true;
    }
    if (this.group.city_name === null || this.group.city_name.length < 1) {
      this.state.city_name = false;
    } else {
      this.state.city_name = true;
    }
    if (this.group.group_name === null || this.group.group_name.length < 1) {
      this.state.group_name = false;
    } else {
      this.state.group_name = true;
    }
    if (
      this.group.date_confirmed === null ||
      this.group.date_confirmed.length < 1
    ) {
      this.state.date_confirmed = false;
    } else {
      this.state.date_confirmed = true;
    }
    if (
      this.flight.airline_carrier === null ||
      this.flight.airline_carrier.length < 1
    ) {
      this.state.airline_carrier = false;
    } else {
      this.state.airline_carrier = true;
    }

    if (
      this.group.country_name != null &&
      this.group.city_name != null &&
      this.group.group_name != null &&
      this.group.date_confirmed != null
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchGroup();
  },
};
</script>
<style lang="scss" scoped>
body {
  background-color: #000;
}
div {
  align-self: center;
  justify-content: center;

  .title {
    padding-top: 150px;
    padding-left: 300px;
  }

  .container {
    border-color: black;
    border-width: 3px;
    margin-top: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
  }
}
</style>
