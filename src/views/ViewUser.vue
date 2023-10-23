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
                    <h4 class="title">View Users</h4>
                    <b-col class="mt-7">
                      <b-form @submit.prevent>
                        <div>
                          <div>
                            <b-table
                              id="table"
                              class="mt-5 text-center"
                              striped
                              :per-page="perPage"
                              :current-page="currentPage"
                              :items="tableItems"
                              :fields="fields"
                            >
                              <template #cell(delete)="row">
                                <b-button
                                  class="btn btn-danger"
                                  title="Delete"
                                  id="delete"
                                  type="submit"
                                  @click="deleteUser(row)"
                                >
                                  <b-icon
                                    class="delete-btn"
                                    icon="trash-fill"
                                  ></b-icon>
                                </b-button>
                              </template>
                            </b-table>
                            <b-pagination
                              id="pagination"
                              align="center"
                              pills
                              v-model="currentPage"
                              :total-rows="rows"
                              :per-page="perPage"
                              aria-controls="tableItems"
                            ></b-pagination>
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
export default {
  name: "table",
  components: {
    HeaderA,
  },
  computed: {
    ...mapState(["userState"]),
    ...mapGetters({ userList: "fetchUser" }),
    rows() {
      return this.userList.length;
    },
  },
  data() {
    return {
      user: {
        user_id: '',
        fname: '',
        lname: '',
        age: '',
        username: '',
        password: '',
        group: '',
      },
      perPage: 6,
      currentPage: 1,
      fields: [
        {
          key: "fname",
          label: "First Name",
          sortable: true,
        },
        {
          key: "lname",
          label: "Last Name",
          sortable: true,
        },
        {
          key: "age",
          label: "Age",
          sortable: false,
          thStyle: {
            width: "20px",
          },
        },
        {
          key: "username",
          label: "Username",
          sortable: false,
        },
        {
          key: "password",
          label: "Password",
          sortable: false,
        },
        {
          key: "group_name",
          label: "Group",
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
    if (this.user.username === null || this.user.username.length  < 1) {
      this.state.username = false;
    } else {
      this.state.username = true;
    }
    if (this.user.password === null || this.user.password.length  < 1) {
      this.state.password = false;
    } else {
      this.state.password = true;
    }
    if (this.user.group_name === null || this.user.group_name.length  < 1) {
      this.state.group_name = false;
    } else {
      this.state.group_name = true;
    }

    if (
      this.user.fname != null &&
      this.user.lname != null &&
      this.user.age != null &&
      this.user.username != null &&
      this.user.password != null &&
      this.user.group_name != null
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
.title {
  margin-left: 100px;
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
