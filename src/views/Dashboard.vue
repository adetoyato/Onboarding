<template>

  <div class="card bg-white text-white" style="max-width: 1908px">
    <Header />
  <img
      src="../assets/img/carousel1.jpg"
      class="card-img"
      alt="beach1"
      style="max-height: 900px; max-width: 1908px"
    />
    <div
      class="card-img-overlay"
      style="background-color: rgba(0, 0, 0, 0.3); max-height: 955px"
    >
      <h1 class="title">Need a weekend getaway?</h1>
      <p class="text">
        Come and view where you could plan the perfect vacation!
      </p>

      <!-- <p class="text1">Last updated 3 mins ago</p> -->
    </div>
    <div>
      <b-card-group columns class="crdgrp">
        <b-card
          class="card1"
          style="max-width: 32rem"
          bg-variant="info"
          title="Past or Present"
          :img-src="require('../assets/img/carousel4.jpg')"
          img-alt="Image"
          img-top
        >
          <b-card-text> Just let it be. </b-card-text>
          <b-button variant="light" id="btn"> Proceed </b-button>
        </b-card>

        <b-card
          class="card2"
          style="max-width: 35rem; background-color: rgba(0, 0, 0, 0.3)"
          header="「 No Longer Human 」"
          bg-variant="dark"
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
          bg-variant="dark"
          title="Tomorrow"
          :img-src="require('../assets/img/carousel 5.jpg')"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            After all that's said and done, I wanted to share my tomorrows with
            him.
          </b-card-text>
          <b-button variant="light" id="btn"> Check it out! </b-button>
          <b-card-text class="small text-muted"
            >Last updated 3 mins ago</b-card-text
          >
        </b-card>

        <b-card
          class="card4"
          style="max-width: 30rem"
          bg-variant="info"
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

        <b-card class="card5" style="max-width: 33rem" bg-variant="dark">
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
          bg-variant="info"
          :img-src="require('../assets/img/carousel3.jpg')"
          style="max-width: 34rem"
          img-alt="Image"
          img-top
        >
          <b-card-text> If God won't save you, then I will. </b-card-text>
          <b-button variant="light" id="btn"> Read More </b-button>
          <template #footer>
            <small class="text-black">Travel &copy; 2023</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
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
