<template>
  <div>
    <div class="form-wrap">
      <!-- <router-link class="back" :to="{ name: 'home' }"> ← Back to Homepage </router-link> -->
      <form @submit="handleSubmit" method="post" class="register">
        <h2>Create an account now!</h2>

        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First Name" id="fname" v-model="form.fname" />
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" id="lname" v-model="form.lname" />
          </div>
          <div class="input">
            <input type="number" placeholder="Age" id="age" v-model="form.age" />
          </div>
          <div class="input">
            <input type="text" placeholder="Username" id="username" v-model="form.username" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" id="username" v-model="form.password" />
          </div>
          <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          class="text-center"
          >
          {{ alertMessage}}
          </b-alert>
          <p class="login-register">
            Already have an account?
            <router-link class="router-link" :to="{ name: 'login' }">
              Login
            </router-link>
          </p>
        </div>
        <b-button class="btn" pill type="submit">Sign Up</b-button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "@/config/dev.env";

export default {
  name: "Registration",
  components: {},
  data() {
    return {
      form: {
        alertMessage:"",
        dismissSecs: 5,
        dismissCountDown: 0,
        fname: "",
        lname: "",
        age: "",
        username: "",
        password: "",
      },
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

    handleSubmit(e) {
      e.preventDefault();
      axios
        .post(`${ API_URL }/user`, {
        fname: this.form.fname,
        lname: this.form.lname,
        age: this.form.age,
        username: this.form.username,
        password: this.form.password,
        })
        .then(
          (res) => {
            this.success = 'Welcome';
            this.response = JSON.stringify(res);
            this.$router.push("/login");
            // this.$store.dispatch("login", user);
            // this.$router.push("/dashboard");
        },
        (err) => {
          console.log(err);
          console.log(err.response.data.error);
          this.alertMessage = err.response.data.error;
          this.showAlert();
          },
        );
        this.form.fname = '';
        this.form.lname = '';
        this.form.age = '';
        this.form.username = '';
        this.form.password = '';
        
        // .catch(error => {
        //     this.response = 'Error: ' + error.response.status
        // })
        
        },
    },
}
</script>

<style lang="scss" scoped>
.form-wrap {
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100vh;
  right: 160px;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 100%;
  z-index: 99;
  @media (min-width: 1080px) {
    width: 100%;
  }

  .back {
    position: relative;
    left: 1280px;
    z-index: 101;
    color: #000;
  }

  .login-register {
    left: 10px;
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
    order: 2;
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
      transform: rotateZ(183deg);
      width: 60px;
      left: -30px;
      height: 101%;
      z-index: 100;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .btn {
    width: 150px;
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/img/travel2.jpg");
    width: 100%;
    height: 100%;
    z-index: 99;
    order: 1;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
