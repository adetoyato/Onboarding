<template>
    <div class="app-wrapper">
      <div class="app">
        <Navigation v-if="!navigation" />
        <router-view />
      </div>
    </div>
</template>

<script>
import Navigation from './components/Header';
export default {
  name: "app",
  components: { 
    Navigation,
  },
  data () {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
  },
  mounter() {},
  methods: {
    checkRoute() {
      if (
          this.$route.name === "flight" ||
          this.$route.name === "user" ||
          this.$route.name === "add" ||
          this.$route.name === "dashboard" ||
          this.$route.name === "booking" ||
          this.$route.name === "profile" ||
          this.$route.name === "login" || 
          this.$route.name === "register" ||
          this.$route.name === "home"
      ) {
        this.navigation = true;
        return;
      } this.navigation - false;
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  }
} 
</script>

<style lang="scss">
/*@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap");*/

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2a8aeb;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
}

.link-light {
  color: #fff;
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(240, 106, 7, 0.8);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 20px;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rba(128, 128, 128, 0.5) !important;
}

.conatiner {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
