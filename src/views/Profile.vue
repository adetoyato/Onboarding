<template>
<div>
  <div class="profile">
  <div class="card bg-dark text-white" style="max-width: 1920px;">
  <img src=../assets/img/carouseltest2.jpg class="card-img" alt="Stony Beach"/>
  <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.4)">
  <div>
    <h1 class="details">Travel Details</h1>
  <div class="d-flex justify-content-center">
    <b-container fluid>
      <b-row>
        <b-col xl="10" lg="9" sm="9">
          <b-container fluid class="pt-3 rounded">
            <b-row class="my-3">
              <b-col class="py-2">
                <b-col>
                  <b-container id="container" style="background-color: rgba(0, 0, 0, 0.3)" class="container-card rounded p-3">
                    <b-col class="mt-7">
                      <b-container>
                        <b-col>
                          <b-avatar class="avatar" variant="light" size="10rem"></b-avatar>
                          <b-form-group
                            class="form float-left"
                            id="inputG1"
                            label="First Name"
                            label-for="fName"
                          >
                            <b-form-input
                              disabled
                              id="fName"
                              v-model="fName"
                              placeholder="First Name"
                            >
                            </b-form-input>
                          </b-form-group>
                          <b-form-group
                            class="form float-left"
                            id="inputG2"
                            label="Last Name"
                            label-for="lName"
                          >
                            <b-form-input
                              disabled
                              id="lName"
                              v-model="lName"
                              placeholder="Last Name"
                            >
                            </b-form-input>
                          </b-form-group>
                          <b-form-group
                            class="form float-left"
                            id="inputG3"
                            label="Age"
                            label-for="age"
                          >
                            <b-form-input
                              disabled
                              id="age"
                              v-model="age"
                              placeholder="Age"
                            >
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-container>
                    </b-col>
                  </b-container> 
                  <b-form>
                        <div>
                          <b-table
                            id="table"
                            class="mt-5 text-white"
                            style="background-color: rgba(0, 0, 0, 0.3)"
                            striped
                            hover
                            :items="ticketList"
                            :fields="fields"
                          >
                          <template #cell(delete)="row">
                                <b-button
                                  class="btn btn-danger"
                                  title="Delete"
                                  id="delete"
                                  type="submit"
                                  @click="deleteTicket(row)"
                                >
                                  <b-icon
                                    class="delete-btn"
                                    icon="trash-fill"
                                  ></b-icon>
                                </b-button>
                              </template>
                            </b-table>
                        </div>
                      </b-form>
                </b-col>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </div>
  </div>
  </div>
<Footer />
  </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import { mapState, mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {
    Footer,
  },

  computed: {
      ...mapState(["ticketState"]),
      ...mapGetters({ memberList: "fetchMember"}),
      rows() {
          return this.ticketList.length;
      },
  },

  data() {
    return {
      memberData:[],
      ticketList:[],
      ticket: {
        ticket_id: null,
        city_id: null,
        city_name: null,
        country_id: null,
        country_name: null,
        user_id: null,
        group_id: null,
        group_name: null,
        fname: null,
        lname: null,
        seat_no: null,
        date: null,
        flight_id: "",
        flight_number: ""
      },
      fields: [
        {
          key: "city_name",
          label: "City",
          sortable: true,
        },
        {
          key: "country_name",
          label: "Country",
          sortable: true,
        },
        {
          key: "group_name",
          label: "Group",
          sortable: true,
        },
        {
          key: "seat_no",
          label: "Seat Number",
          sortable: true,
        },
        {
          key: "date",
          label: "Departure Date",
          sortable: true,
        },
        {
          key: "flight_number",
          label: "Flight Number",
          sortable: true,
        },
        {
          key: "delete",
          label: "Delete Flight",
          sortable: false,
        },
      ],
    };
  },
  methods: {
    async deleteTicket(row) {
    this.deleteMember(row)
      await this.$store.dispatch("deleteTicket", row.item.ticket_id).then(
        (res) => {
          this.fetchTicket();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    async deleteMember() {
      await  this.fetchMember();
      await this.$store.dispatch("deleteMember", this.memberData[0].member_id).then(
        (res) => {
              this.fetchTicket();

          },
        (err) => {
          console.log(err);
        }
      );
    },

    async fetchMember () {
      await this.$store.dispatch("fetchMember").then((res) => {
        let userData = JSON.parse(localStorage.getItem('user'))

          console.log("res ", res);
        res.forEach((val) => {
          if (
            val.user_id == userData.res[0].user_id
          ) {
            this.memberData.push(val);
          }
        })
              this.fetchTicket();
      });
  
    },

    async fetchTicket() {
      await this.$store.dispatch("fetchTicket").then((res) => {
        this.items = res;
        let userData = JSON.parse(localStorage.getItem('user'))
      
        res.forEach((val) => {
          if (
            val.user_id == userData.res[0].user_id
          ) {
            this.ticketList.push(val);
          }
        })
      });
    },
  },

  validation() {
    if (this.ticket.city_name === null || this.ticket.city_name.length < 1) {
      this.state.city_name = false;
    } else {
      this.state.city_name = true;
    }
    if (this.ticket.country_name === null || this.ticket.country_name.length < 1) {
      this.state.country_name = false;
    } else {
      this.state.country_name = true;
    }
    if (this.ticket.group_name === null || this.ticket.group_name.length < 1) {
      this.state.group_name = false;
    } else {
      this.state.group_name = true;
    }
    if (this.ticket.seat_no === null || this.ticket.seat_no.username < 1) {
      this.state.seat_no = false;
    } else {
      this.state.seat_no = true;
    }
    if (this.ticket.date === null || this.ticket.date.password < 1) {
      this.state.date = false;
    } else {
      this.state.date = true;
    }
    if (this.ticket.flight_number === null || this.ticket.flight_number.group < 1) {
      this.state.flight_number = false;
    } else {
      this.state.flight_number = true;
    }

    if (
      this.ticket.city_name != null &&
      this.ticket.country_name != null &&
      this.ticket.group_name != null &&
      this.ticket.seat_no != null &&
      this.ticket.date != null &&
      this.ticket.flight_number != null
    ) {
      return true;
    } else {
      return false;
    }
  },

  created() {
    const user = JSON.parse(localStorage.user)
    this.fName=user.res[0].fname
    this.lName=user.res[0].lname
    this.age=user.res[0].age
    this.fetchTicket();
  },
};
</script>

<style lang="scss" scoped>
.prof {
  align-content: center;
  margin-left: 150px;
  margin-top: 50px;
}

div {
  align-self: center;
  justify-content: center;

  .details {
    padding-left: 200px;
    padding-top: 50px;
  }

  .avatar {
    margin-top: 30px;
    margin-left: 150px;
    margin-bottom: 20px;
  }

  .form {
    margin-top: 60px;
    margin-right: 10px;
  }

  .container {
    border-color: black;
    margin-top: -30px;
    border-width: 3px;
    padding-top: 25px;
    padding-bottom: 20px;
  }
}

.table {
  align-content: center;
}

.pill {
  margin-left: 1100px;
  width: 100px;
}

</style>
