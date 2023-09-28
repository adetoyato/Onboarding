<template>
<div class="card bg-white text-white" style="max-width: 1920px;">
  <img src="../assets/img/carousel1.jpg" class="card-img" alt="beach1" style="max-height:830px;"/>
  <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.3); max-height:830px;">
    <h1 class="title">Weekend Getaway!</h1>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br>Soluta, labore velit, vel dolor obcaecati ratione fugit 
      vero quod magnam. <br>Consectetur, repudiandae?
    <p class="text1">Last updated 3 mins ago</p>
  </div>
<div>
  <b-card-group columns class="crdgrp">
    <b-card class="card1" style="max-width: 32rem;" bg-variant="danger" title="Past or Present" :img-src="require('../assets/img/carousel4.jpg')" img-alt="Image" img-top>
      <b-card-text>
        Just let it be.
      </b-card-text>
      <b-button variant= "warning" id="btn"> Proceed </b-button>
    </b-card>

    <b-card class="card2" style="max-width: 35rem;" header="「 No Longer Human 」" bg-variant="dark">
      <blockquote class="blockquote mb-0">
        <p>“Whenever I was asked what I wanted my first impulse was to answer "Nothing." The thought went through my mind that it didn't make any difference, that nothing was going to make me happy.”</p>
        <footer class="blockquote-footer">
          太宰 治 in <cite title="Source Title">『 人間失格 』</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card class="card3" style="max-width: 35rem;" bg-variant="dark" title="Tomorrow" :img-src="require('../assets/img/carousel 5.jpg')" img-alt="Image" img-top>
      <b-card-text>
        After all that's said and done, I wanted to share my tomorrows with him.
      </b-card-text>
      <b-button variant= "info" id="btn"> Check it out! </b-button>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card class="card4" style="max-width: 30rem;" bg-variant="success" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Pray forgive the discourtesy of filling my hallowed chalice.</p>
        <footer>
          <small>Barok van Zieks, <cite title="Source Title">Prosecutor</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card class="card5" style="max-width: 33rem;" bg-variant="dark">
      <b-card-title>The Honored One</b-card-title>
      <b-card-text>
        Along heaven and earth, I alone am the honored one.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card class="card6" bg-variant="light" :img-src="require('../assets/img/carousel2.jpg')" img-alt="Image" style="max-width: 32rem;" overlay></b-card>

    <b-card class="card7" bg-variant="warning" :img-src="require('../assets/img/carousel3.jpg')" style="max-width: 34rem;" img-alt="Image" img-top>
      <b-card-text>
        Smile spikey, you look better when you smile.
      </b-card-text>
      <b-button variant= "danger" id="btn"> Read More </b-button>
      <template #footer>
        <small class="text-muted">Travel &copy; 2023</small>
      </template>
    </b-card>
  </b-card-group>
</div>
<Footer/>
</div>
</template>



<script>
import Footer from "../components/Footer.vue"
export default {
    components: {
      Footer,
    },
    methods:  {
        prev() {
            this.$refs.myCarousel.prev()
        },
        next() {
            this.$refs.myCarousel.next()
        }
    }
}
</script>

<style lang="scss" scoped>

div {
  text-align: center;
  justify-content: center;
  overflow: hidden;

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

  /*.card1 {
    margin-left: 40px;
  }

  .card2{
    margin-right: 50px;
  }

  .card3 {
    margin-top: 10px;
  }

  .card4 {
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 30px;
  }

  .card5 {
    margin-right: 50px;
  }

  .card6 {
    margin-left: 30px;
  }*/

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