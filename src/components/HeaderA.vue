<template>
<div>
  <b-navbar id="nav" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>LOU GEH TRAVEL</b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
    <b-collapse id="nav-collapse" is-nav>
  
  <div>
      <b-navbar-nav>
          <b-nav-item exact-active-class="active" to="user"> Users </b-nav-item>
          <b-nav-item exact-active-class="active" to="destinations"> Destination </b-nav-item>
          <b-nav-item exact-active-class="active" to="add"> Group </b-nav-item>
      </b-navbar-nav>
  </div>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            Profile
          </template>
          <b-dropdown-item @click="logout"> Log out </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <!-- <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'dashboard' }"
          >LOU GEH TRAVEL</router-link
        >
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" :to="{ name: 'dashboard' }"> Dashboard </router-link>
          <router-link class="link" :to="{ name: 'booking' }">
            Booking
          </router-link>
          <router-link v-if="!user" class="link" :to="{ name: 'login' }">
            Login
          </router-link>
          <router-link class="link" :to="{ name: 'profile' }"> Profile </router-link>
        </ul>
      </div>
    </nav>
  </header> -->
</template>
<script>
export default {
  name: "navigation",
  components: {

  },
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("user")),
    }
  },
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
      computed: {
        user() {
          return this.$store.response.data.res[0].role_id;
        }
      }
};
/*name: 'Header', 
        data () {
            return {
                navItems:['Dashboard', 'Booking', 'Profile'],
                title: 'LOU GEH TRAVEL'
            }
        }*/
</script> 
<style lang="scss" scoped>

div {
  nav {
    z-index: 101;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

/*header {
  background-color: #000000;
  font-weight: bold;
  color: #fff;
  padding: 0 25px;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3 color ease;
    color: #fff;

    &:hover {
      color: #e65b0b;
      transition: 0.5s color ease;
    }
  }

  nav {
    display: flex;
    padding: 25px 0px;

    .branding {
      display: flex;
      align-items: center;
      position: relative;
      right: 350px;

      .header {
        font-weight: 300;
        font-size: 40px;
        letter-spacing: 2px;
        color: #fff;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      left: 400px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      font-size: 20px;

      ul {
        margin-right: 35px;

        .link {
          margin-right: 35px;
        }

        .link:last-child {
          margin-right: 35px;
        }
      }
    }
  }
} */

/*html {
  min-height: 100%;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
}*/
</style>
