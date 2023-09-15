<template>
    <div class="app-wrapper">
      <div class="app">
        <Navigation />
        <router-view />
      </div>
    </div>
</template>

<script>
import Navigation from './components/Header';
export default {
  name: "app",
  components: { Navigation },
  data () {
    return {};
  },
  created() {},
  mounter() {},
  methods: {},
  watch: {}
} 

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap");

/* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

.conatiner {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
