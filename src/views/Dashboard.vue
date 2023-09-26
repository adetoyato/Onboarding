<template>
<div class="card bg-dark text-white" style="max-width: 1920px;">
    <div class="collapse">
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>
  <img src="../assets/img/carousel1.jpg" class="card-img" alt="beach1" style="max-height:500px;"/>
  <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.3)">
    <h1 class="card-title">Weekend Getaway!</h1>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Soluta, labore velit, vel dolor obcaecati ratione fugit 
      vero quod magnam. Consectetur, repudiandae?
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</template>

<script>
export default {
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