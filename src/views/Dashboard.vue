<template>
<div>
  <Spinner />
  <b-overlay :show="show" rounded="sm">
  <div class="card bg-white text-white" style="max-width: 1908px">
    <Header />
  <img
      src="../assets/img/carousel1.jpg"
      class="card-img"
      alt="beach1"
      style="max-height: 600px; max-width: 1908px"
    />
    <div
      class="card-img-overlay"
      style="background-color: rgba(0, 0, 0, 0.3); max-height: 655px"
    >
      <h1 class="title">Need a weekend getaway?</h1>
      <p class="text">
        Come and view where you could plan the perfect vacation!
      </p>
    </div>

    <div class="pt-4">
      <b-card-group columns class="crdgrp">
        <b-card
          class="card1"
          style="max-width: 32rem"
          bg-variant="white"
          text-variant="dark"
          title="Check it out!"
          :img-src="require('../assets/img/carousel4.jpg')"
          img-alt="Image"
          img-top
        >
          <b-card-text> There's a new attraction at [place!] </b-card-text>
          <b-button variant="dark" id="btn"> See More </b-button>
        </b-card>

        <b-card
          class="card2"
          style="max-width: 35rem; background-color: rgba(0, 0, 0, 0.3)"
          header="「 No Longer Human 」"
          bg-variant="white"
          text-variant="dark"
        >
          <blockquote class="blockquote mb-0">
            <p>
              “Whenever I was asked what I wanted my first impulse was to answer
              "Nothing." The thought went through my mind that it didn't make
              any difference, that nothing was going to make me happy.”
            </p>
            <footer class="blockquote-footer">
              太宰 治 in <cite title="Source Title">『 人間失格 』</cite>
            </footer>
          </blockquote>
        </b-card>

        <b-card
          class="card3"
          style="max-width: 35rem"
          bg-variant="white"
          text-variant="dark"
          title="Event"
          :img-src="require('../assets/img/carousel 5.jpg')"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            There will be an event tomorrow!
          </b-card-text>
          <b-button variant="dark" id="btn"> Check it out! </b-button>
          <b-card-text class="small text-muted"
            >Last updated 3 mins ago</b-card-text
          >
        </b-card>

        <b-card
          class="card4"
          style="max-width: 30rem"
          bg-variant="dark"
          text-variant="white"
        >
          <blockquote class="card-blockquote">
            <p>Pray forgive the discourtesy of filling my hallowed chalice.</p>
            <footer>
              <small
                >Barok van Zieks,
                <cite title="Source Title">Prosecutor</cite></small
              >
            </footer>
          </blockquote>
        </b-card>

        <b-card class="card5" style="max-width: 33rem" bg-variant="white" text-variant="dark">
          <b-card-title>The Honored One</b-card-title>
          <b-card-text>
            Along heaven and earth, I alone am the honored one.
          </b-card-text>
          <b-card-text class="small text-muted"
            >Last updated 3 mins ago</b-card-text
          >
        </b-card>

        <b-card
          class="card6"
          bg-variant="light"
          :img-src="require('../assets/img/carousel2.jpg')"
          img-alt="Image"
          style="max-width: 32rem"
          overlay
        ></b-card>

        <b-card
          class="card7"
          bg-variant="white"
          text-variant="dark"
          :img-src="require('../assets/img/carousel3.jpg')"
          style="max-width: 34rem"
          img-alt="Image"
          img-top
        >
          <b-card-text> Check out the new plants blooming this season! </b-card-text>
          <b-button variant="dark" id="btn"> Read More </b-button>
          <template #footer>
            <small class="text-black">Travel &copy; 2023</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
  </b-overlay>
  <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: {
    Header,
    Footer,
    Spinner,
  },
  data() {
    return{
      show: true,
    }
  },
  mounted() {
        this.showToggle();
  },

  methods: {
    showToggle() {
            setTimeout(() => {
                this.show = false;
            },
            1000);
        }
    },
  created() {
    localStorage.role;
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
}

div {
  text-align: center;
  justify-content: center;

  .card {
    margin: -5px;
    top: -4px;
    left: -0.2px;
    overflow-x: hidden;
  }

  .btn {
    margin-bottom: 10px;
  }

  .title {
    font-size: 100px;
    font-family: impact;
    padding-top: 300px;
  }

  .text {
    font-size: 25px;
  }

  .text1 {
    padding-top: 100px;
  }

  .crdgrp {
    margin-top: 10px;
    overflow: hidden;
    @media (min-width: 900px) {
    }
  }

  .card-title {
    font-family: impact;
    font-size: 30px;
    padding-top: 20px;
  }

  .card-text {
    font-size: 15px;
    overflow: hidden;
    justify-content: center;
    text-align: center;
  }

  .card-text1 {
    padding-top: 100px;
  }

  .card1 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card2 {
    margin-top: 30px;
  }

  .card3 {
    margin-top: 10px;
  }

  .card4 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .card5 {
    margin-bottom: 20px;
  }

  .card6 {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
/*.background {
        display: none;
        flex: 2;
        z-index: 1;
        background-color: #fff;
        background-size: 1920px 600px;
        background-repeat: no-repeat;
        background-image: url("../assets/img/carousel1.jpg");
        height: 200%;
        @media (min-width: 900px) {
            display: initial;
        }

}*/
</style>
