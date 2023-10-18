<template>
  <div>
    <HeaderA />
    <b-container fluid>
      <b-row>
        <b-col xl="10" lg="9" sm="9">
          <b-container fluid class="pt-2">
            <b-row class="my-3">
              <b-col class="py-2">
                <b-col class="">
                  <b-container class="container-card rounded p-3">
                    <h4 class="title">Add Country and City</h4>
                    <b-col class="mt-3">
                      <b-form>
                        <div>
                          <div class="form-group mb-1 w-50">
                            <b-form-group
                              label="Add City:"
                              class="label"
                            ></b-form-group>
                            <div>
                              <b-form-group
                                label="Choose Country:"
                                class="label1"
                              ></b-form-group>
                              <b-form-select
                                class="country"
                                v-model="selected"
                                :options="options"
                              ></b-form-select>
                              <div class="country1 mt-1">
                                Country ID: <strong>{{ selected }}</strong>
                              </div>
                            </div>
                            <b-form-input
                              v-model="city.city_name"
                              class="text"
                              id="City"
                              type="text"
                              placeholder="Enter City"
                            ></b-form-input>
                            <b-button
                              class="button"
                              pill
                              variant="success"
                              type="submit"
                              @click="saveCity"
                            >
                              Submit
                            </b-button>
                          </div>
                          <b-button
                            class="btn1"
                            pill
                            v-b-modal.country-modal
                            variant="dark"
                          >
                            Add Country
                          </b-button>
                          <b-modal
                            id="country-modal"
                            ref="modal"
                            hide-footer
                            centered
                            title="Add Country Here"
                          >
                            <div class="form-group mb-1">
                              <b-form-input
                                v-model="country.country_name"
                                class="text1"
                                id="Country"
                                type="text"
                                placeholder="Enter Country"
                                required
                              ></b-form-input>
                            </div>
                            <b-button
                              class="float-right mt-3"
                              variant="success"
                              type="submit"
                              @click="saveCountry"
                            >
                              Submit
                            </b-button>
                            <b-alert
                              :show="dismissCountDown"
                              dismissible
                              :variant="variant"
                              @dismissed="dismissCountDown = 0"
                              @dismiss-count-down="countDownChanged"
                              class="w-50 text-center"
                            >
                              {{ alertMessage }}
                            </b-alert>
                          </b-modal>
                        </div>
                      </b-form>
                      <b-table
                        @submit.prevent
                        class="text-center"
                        id="table"
                        :items="listCity"
                        :fields="cityFields"
                        :per-page="perPage"
                        :current-page="currentPage"
                      >
                        <template #cell(delete)="row">
                          <b-button
                            class="btn btn-danger"
                            title="Delete"
                            id="delete"
                            type="submit"
                            @click="deleteCity(row)"
                          >
                            <b-icon
                              class="delete-btn"
                              icon="trash-fill"
                            ></b-icon>
                          </b-button>
                        </template>
                      </b-table>
                      <b-pagination
                        class="cityNav"
                        align="center"
                        pills
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="listCity"
                      ></b-pagination>
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
  name: "flight",
  components: {
    HeaderA,
  },

  computed: {
    ...mapState(["cityState"]),
    ...mapGetters({
      cityList: "fetchCity",
      countryList: "fetchCountry",
    }),
    rows() {
      return this.cityList.length;
    },
    textState() {
      return this.text.length > 2 ? true : false;
    },
  },

  data() {
    return {
      variant: "",
      alertMessage: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      boxTwo: '',
      city: {
        city_id: "",
        city_name: "",
        country_id: "",
        country_name: "",
      },
      country: {
        country_name: "",
      },
      // countryFields: [
      //     { key: "country_id", label: "ID", sortable: false, thStyle: { width: "50%" }},
      //     { key: "country_name", label: "Country", sortable: true, thStyle: { width: "50%" } },
      // ],
      text: "",
      perPage: 3,
      currentPage: 1,
      cityFields: [
        { key: "country_name", label: "Country", sortable: true },
        { key: "city_name", label: "City", sortable: true },
        { key: "delete", label: "Remove", sortable: false,},
      ],
      listCity: [],
      selected: null,
      options: [],
    };
  },

  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert(variant) {
      this.variant = variant;
      this.dismissCountDown = this.dismissSecs;
    },

    // hideModal() {
    //   this.$refs["modal"].hide();
    // },

async deleteCity(row) {
      await this.$store.dispatch("deleteCity", row.item.city_id).then(
        (res) => {
          this.fetchCity();
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async fetchCity() {
      this.$store.dispatch("fetchCity").then((res) => {
        this.listCity = res.data;
      });
    },
    async fetchCountry() {
      this.options = [];
      this.$store.dispatch("fetchCountry").then((res) => {
        console.log(res.data);

        res.data.forEach((val) => {
          this.options.push({ value: val.country_id, text: val.country_name });
        });

        console.log(this.options);
        this.city.country_name = res.data;
      });
    },

    addOptions() {
      this.callFetchCountry();
    },

    async saveCountry() {
      console.log(this.country.country_name);
      await axios
        .post(`${API_URL}/country`, {
          country_name: this.country.country_name,
        })
        .then(
          (res) => {
            this.fetchCountry();
            console.log(res);
            this.alertMessage = "Successfully added!";
            this.showAlert("success");
          },
          (err) => {
            console.log(err);
            console.log(err.response.data.error);
            this.alertMessage = err.response.data.error;
            this.showAlert("warning");
          }
        );
    },

    async saveCity(e) {
      e.preventDefault()
      await axios
      .post(`${API_URL}/cities`, {
        country_id: this.selected,
        city_name: this.city.city_name,
      })
      .then (
        (res) => {
        this.fetchCity();
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
        this.$bvModal.msgBoxOk('City already exists!',{
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
    if (this.city.city_name === null || this.city.city_name.length < 1) {
      this.state.city_name = false;
    } else {
      this.state.city_name = true;
    }
    if (this.city.country_name === null || this.city.country_name.length < 1) {
      this.state.country_name = false;
    } else {
      this.state.country_name = true;
    }

    if (this.city.city_name != null && this.city.country_name != null) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchCity();
    this.fetchCountry();
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: -25px;
  margin-left: 230px;
  margin-bottom: 40px;
}

.btn1 {
  margin-left: 200px;
}

.label {
  margin-left: 300px;
}

.label1 {
  margin-left: 400px;
  margin-bottom: -5px;
}

.table {
  margin-left: 200px;
  margin-top: 30px;
}

.text {
  margin-left: 400px;
  margin-bottom: 10px;
}

.cityNav {
  margin-left: 300px;
}

.country {
  margin-left: 400px;
  margin-bottom: 10px;
}

.country1 {
  margin-left: 400px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.dropdown {
  margin-left: 400px;
  margin-bottom: 10px;
  width: 540px;
}
.button {
  margin-left: 840px;
  margin-top: 5px;
  width: 100px;
}
</style>
