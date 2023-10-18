<template>
  <div>
    <Header />
    <div class="card bg-dark text-white" style="max-width: 1920px">
      <img src=../assets/img/carousel9.jpg class="card-img" alt="Stony Beach"/>
      <div
        class="card-img-overlay"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        <h2 class="title">Book your flight here:</h2>
        <div>
          <div class="booking d-flex justify-content-center">
            <b-container 
              sm="auto"
              id="container"
              class="rounded"
              style="background-color: rgba(255, 255, 255, 0.3)"
            >
            <b-form-row>
              <div>
                <b-col>
                <b-button
                  id="chooseBtn"
                  class="pill"
                  v-b-modal.group-modal
                  variant="light"
                >
                  Choose Destination
                </b-button>
                </b-col>
              </div>
              <b-col>
                <div>
                <div class="row">
                  <div class="ml-4 col">
              <div class="select">
                Country: <strong>{{ this.destination.country_name }}</strong>
              </div>
              </div>
              <div class="select">
                City: <strong>{{ this.destination.city_name }}</strong>
              </div>
              </div>
              </div>
              </b-col>
              <div>
                <b-modal
                  centered
                  id="group-modal"
                  ref="modal"
                  hide-footer
                  title="Choose Destination"
                >
                  <b-row class="text-center">
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
                      @click="hideModal">
                      Cancel
                    </b-button>
                  </div>
                </b-modal>
              <b-form-datepicker
                  name="date"
                  placeholder= "Choose Destination Date"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  :min="new Date()"
                  today-button
                  reset-button
                  close-button
                  v-model="destination.date_confirmed"
                >
                </b-form-datepicker>
              </div>
              
              <b-col>
                <b-button
                class="bookBtn float-right"
                type="submit"
                variant="warning"
                @click="bookTravel">Book Travel</b-button></b-col>
                <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="w-50 text-center"
    >
      {{ alertMessage}}
    </b-alert>
    </b-form-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapState, mapGetters } from "vuex";
import { API_URL } from "@/config/dev.env";
import axios from "axios";

export default {
  components: {
    Header,
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
      boxTwo: '',
      alertMessage:'',
      dismissSecs: 5,
      dismissCountDown: 0,
      destination: {
        city_id: "",
        city_name: "",
        country_id: "",
        country_name: "",
        group_id: "",
        group_name: "",
        date_confirmed: "",
      },
      perPage: 3,
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
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
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
                  this.$router.push("/profile");
                  console.log(res);
                },
                (err) => {
                  console.log(err);
                }
              );
          },
          (err) => {
            console.log(err.response.data.error);
            this.boxTwo = ''
            this.$bvModal.msgBoxOk('You have already booked a flight!',{
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
    padding-top: 500px;
    padding-left: 390px;
  }

  .pill {
    width: 230px;
  }

  .container {
    border-color: black;
    border-width: 3px;
    width: 1100px;
    margin-top: 30px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 15px;
  }
}
</style>
