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
                                <h4 class="title"> Flight Details </h4>
                                <b-col class="mt-3">
                                    <b-form>
                                        <div class="form-group mb-1 w-50">
                                            <b-form-group label="Submit Country Here:" class="label"></b-form-group>
                                            <b-form-input v-model="country.country_name" class="text" id="country" type="text" placeholder="Enter Country" required></b-form-input>
                                            <b-button class="button" pill variant="success" type="submit" @click="saveCountry"> Submit </b-button>
                                        </div>
                                        
                                    <div>
                                        <div class="form-group mb-1 w-50">
                                        <b-form-group label="Choose Country and City:" class="label"></b-form-group>
                                        <!-- <div>
                                        <b-form-select class="country" v-model="selected" value-field="value" text-field="text" :options="options" multiple :select-size="3"></b-form-select>
                                        <div class="country mt-3">Selected: <strong>{{ selected }}</strong></div>
                                        </div> -->
                                        <b-form-input class="text" id="City" type="text" placeholder="Enter City"></b-form-input>
                                        <b-button class="button" pill variant="success" type="submit" @click="saveCity"> Submit </b-button>
                                        </div>
                                    </div>
                                    </b-form>
                                    <!-- <b-table
                                    hover
                                    id="table"
                                    :items="listCountry"
                                    :fields="countryFields"
                                    :per-page="perPage"
                                    :current-page="currentPage"
                                >
                                <template #cell(delete)="row">
                                <b-button
                                class="btn btn-danger"
                                title="Delete"
                                id="delete"
                                type="submit"
                                @click="deleteCountry(row)"
                                >
                                <b-icon
                                    class="delete-btn"
                                    icon="trash-fill"
                                ></b-icon>
                                </b-button>
                            </template>
                            </b-table> -->
                                <b-table
                                    class="text-center"
                                    hover
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
            countryList: "fetchCountry"
        }),
        rows() {
            return this.cityList.length;
        },
        textState() {
            return this.text.length > 2 ? true : false
        }
    },

    data () {
        return {
            city: {
                city_id: '',
                city_name: '',
                country_id: '',
                country_name: '',
            },
            country: {
                country_name: '',
            },
            // countryFields: [
            //     { key: "country_id", label: "ID", sortable: false, thStyle: { width: "50%" }},
            //     { key: "country_name", label: "Country", sortable: true, thStyle: { width: "50%" } },
            // ],
            text: '',
            perPage: 3,
            currentPage: 1,
            cityFields: [
                { key: "country_name", label: "Country", sortable: true },
                { key: "city_name", label: "City", sortable: true },
                { key: "delete", label: "Remove", sortable: false },
            ],
            listCity: [],
            options: ['country_name'],
        };
    },

    methods: {
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
        this.$store.dispatch("fetchCountry").then((res) => {
        this.options = res.data;
      });
    },

    async saveCountry() {
        console.log(this.country.country_name)
        await axios
        .post(`${API_URL}/country`, {
          country_name: this.country.country_name,
        })
    },

    async saveCity() {
        console.log(error.response)
        await axios
        .post(`${API_URL}/country`, {
          country_name: this.city.city_name,
          city_name: this.city.city_name,
        })
    }
    
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

    if (
      this.city.city_name != null &&
      this.city.country_name != null 
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    this.fetchCity();
    this.fetchCountry();
  },
}
</script>


<style lang="scss" scoped>

.title {
    margin-left: 230px;
    margin-bottom: 40px;
}

.label {
    margin-left: 300px;
}

.table{
    margin-left: 200px;
    margin-top: 30px;
}

.text {
    margin-left: 400px;
    margin-bottom: 10px;
}

.cityNav{
    margin-left: 300px;
}

.country{
    margin-left: 400px;
    margin-bottom: 10px;
}

.dropdown {
    margin-left: 400px;
    margin-bottom: 10px;
    width: 540px;
}
.button {
    margin-left: 840px;
    margin-top: 10px;
    width: 100px;
}

</style>