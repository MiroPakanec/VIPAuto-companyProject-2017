<template>
    <div class="container">
        <header class="background">
            <div class="car"
                 v-bind:style="getCarStyle"></div>
            <div class="title"
                 v-bind:style="getTitleStyle"></div>
        </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: 0
    };
  },
  computed: {
    getTitleStyle() {
      return { transform: "translate(0px, " + this.scroll / 20 + "%)" };
    },
    getCarStyle() {
      var num = this.scroll;
      num = num.map(0, 1500, 1, 2);

      var scale = "scale(" + num + "," + num + ")";
      var translation = "translate(0px, " + this.scroll / 40 + "%)";
      return { transform: scale + " " + translation }
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


<style>
.container {
  height: 3000px;
  width: 100%;
  max-width: 1500px;
  padding: 0;
  margin: 0;
}

/* paralax */
.background {
  position: relative;
  height: 50vw;
  width: 100%;
  overflow: hidden;

  background-image: url("./../../static/parallax/background.jpg");
  background-size:contain;
  background-position: top center;
  background-attachment: fixed;
}

.car {
  width: 100%;
  height:  800px;
  background-image: url("./../../static/parallax/car.png");
  background-position: left top;
  background-size: contain;

  position: absolute;
  top: -25%;
}

.title {
  height:  800px;
  width: 100%;
  background-image: url("./../../static/parallax/auto.png");
  background-position: top center;
  background-size: contain;

  position: absolute;
  top: -45%;
}
</style>
