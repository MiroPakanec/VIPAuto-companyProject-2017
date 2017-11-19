<template>
  <div class="main-container"
       style="margin-top: 55px;">
    <header class="background">
      <div class="car"
           v-bind:style="getCarStyle"></div>
      <div class="title"
           v-bind:style="getTitleStyle"></div>
    </header>
    <v-container fluid text-xs-center class="no-padding">
      <v-layout row
                wrap
                mt-5>
        <v-flex xs12
                mt-5>
          <v-icon class="standard-color">fingerprint</v-icon>
        </v-flex>
        <v-flex xs12
                class="header-text">
          Kto sme?
        </v-flex>
      </v-layout>
      <v-layout row
                mt-3>
        <v-flex xs10
                offset-xs1
                sm6
                offset-sm3
                class="standard-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium, facere animi itaque odit tempora laborum maxime temporibus ut libero illum ad labore neque. Ad earum quam repellendus voluptatibus omnis?
        </v-flex>
      </v-layout>
      <v-layout row
                mt-5
                mb-5>
        <v-flex xs6
                offset-xs3>
          <hr>
        </v-flex>
      </v-layout>
      <v-layout row
                mb-5>
        <v-flex xs10
                offset-xs1
                sm6
                offset-sm3
                class="standard-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium, facere animi itaque odit tempora laborum maxime temporibus ut libero illum ad labore neque. Ad earum quam repellendus voluptatibus omnis?
        </v-flex>
      </v-layout>
      <v-layout row
                mt-5
                mb-5>
        <v-flex xs6
                offset-xs3>
          <hr>
        </v-flex>
      </v-layout>
      <v-layout row
                mb-5>
        <v-flex mb-5
                xs10
                offset-xs1
                sm6
                offset-sm3
                class="standard-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium, facere animi itaque odit tempora laborum maxime temporibus ut libero illum ad labore neque. Ad earum quam repellendus voluptatibus omnis?
        </v-flex>

      </v-layout>
      <page-footer></page-footer>

    </v-container>

  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  data() {
    return {
      scroll: 0
    };
  },
  components: {
    "page-footer": Footer
  },
  computed: {
    getTitleStyle() {
      return { transform: "translate(0px, " + this.scroll / 25 + "%)" };
    },
    getCarStyle() {
      var num = this.scroll;
      num = num.map(0, 1500, 1, 2);

      var scale = "scale(" + num + "," + num + ")";
      var translation = "translate(0px, " + this.scroll / 10 + "%)";
      return { transform: translation + " " + scale };
    }
  },
  methods: {
    handleScroll: function(event) {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      this.scroll = top;
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
</script>


<style scoped>
/* paralax */
.background {
  position: relative;
  height: 50vw;
  width: 100%;
  overflow: hidden;

  background-image: url("./../../static/parallax/background.jpg");
  background-size: contain;
  background-position: top center;
  background-attachment: fixed;
}

.car {
  width: 100%;
  height: 800px;
  background-image: url("./../../static/parallax/car.png");
  background-position: left top;
  background-size: contain;

  position: absolute;
  top: -25%;
}

.title {
  height: 800px;
  width: 100%;
  background-image: url("./../../static/parallax/auto.png");
  background-position: top center;
  background-size: contain;

  position: absolute;
  top: -45%;
}

</style>
