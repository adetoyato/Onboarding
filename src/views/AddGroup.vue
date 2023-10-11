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
                    <h4 class="title">View Destinations</h4>
                    <b-col class="mt-7">
                      <b-form @submit.prevent>
                        <div>
                          <div>
                            <b-table
                              id="table"
                              class="mt-5 text-center"
                              striped
                              hover
                              :items="tableItems"
                              :fields="fields"
                            >
                              <template #cell(delete)="row">
                                <b-button
                                  class="btn btn-danger"
                                  title="Delete"
                                  id="delete"
                                  type="submit"
                                  @click="deleteGroup(row)"
                                >
                                  <b-icon
                                    class="delete-btn"
                                    icon="trash-fill"
                                  ></b-icon>
                                </b-button>
                              </template>
                            </b-table>
                            <!-- <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="user-table"></b-pagination> -->
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
    ...mapState(["groupState"]),
    ...mapGetters({ groupList: "fetchGroup" }),
    rows() {
      return this, groupList.length;
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

    async fetchGroup() {
      this.$store.dispatch("fetchGroup").then((res) => {
        console.log(res);
        this.tableItems = res.data;
      });
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

.pill {
  margin-left: 1200px;
  width: 100px;
}
</style>
