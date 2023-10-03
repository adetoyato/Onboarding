<template>
  <div>
    <div class="form-wrap">
      <!-- <router-link class="back" :to="{ name: 'home' }"> ← Back to Homepage </router-link> -->
      <b-form class="login" @submit="handleLogin">
        <h2>Login your account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Username" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <p class="login-register">
            Don't have an account?
            <router-link class="router-link" :to="{ name: 'register' }">
              Register
            </router-link>
          </p>
        </div>
        <b-button pill type="submit">Login</b-button>
        <div class="angle"></div>
      </b-form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      state: {
        username: null,
        password: null,
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    validation() {
      if (this.username == null || this.username < 1) {
        this.state.username = false;
      } else {
        this.state.username = true;
      }
      if (this.pasword == null || this.password < 1) {
        this.state.password = false;
      } else {
        this.state.password = true;
      }

      return this.username != null && this.password;
    },

    async handleLogin(e) {
      e.preventDefault();
      const user = { username: this.username, password: this.password };
      await this.$store.dispatch("login", user).then(
        (res) => {
          /**
           * TODO:
           * change route
           */
        },
        (err) => {
          //TODO: add show alert
          //   this.showAlert("Invalid credentials!", "danger");
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .back {
    color: #000;
    font-size: 10;
    padding-top: 10px;
    padding-left: 10px;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #e65b0b;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f8;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/img/planebg2.jpg");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
