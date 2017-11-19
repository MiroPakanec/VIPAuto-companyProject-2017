<template>
    <div class="main-container">
        <v-container text-xs-center
                     mt-4>
            <v-layout row
                      wrap
                      mt-5>
                <v-flex xs12
                        mt-5>
                    <v-icon class="standard-color">directions_car</v-icon>
                </v-flex>
                <v-flex xs12
                        class="header-text">
                    Aká je naša ponuka?
                </v-flex>
            </v-layout>
            <v-layout row
                      mt-4>
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
            <v-card flat
                    class="transparent"
                    color="">
                <v-container fluid
                             grid-list-lg>
                    <v-layout row
                              wrap
                              text-md-left
                              text-xs-center>
                        <v-flex xs12
                                sm10
                                offset-sm1
                                md5
                                offset-md1>
                            <div>
                                <div class="header-text">
                                    <p class="">Supermodel </p>
                                    <p class="">
                                        <v-icon class="standard-color">star</v-icon>
                                        <v-icon class="standard-color">star</v-icon>
                                        <v-icon class="standard-color">star</v-icon>
                                        <v-icon class="standard-color">star</v-icon>
                                    </p>
                                </div>
                                <div class="standard-text">
                                    <div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure laboriosam numquam molestiae libero, excepturi ducimus sequi quos.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <b>Model:</b> Something x3.14<br/>
                                            <b>Typ:</b> Automat<br/>
                                            <b>Nieco ine:</b> Este nieco<br/>
                                        </p>
                                    </div>
                                    <div class="header-text header-text-extrasmall">
                                        <p class="no-margin">Cena: od 20 eur / den</p>
                                    </div>
                                    <div>

                                        <v-layout row
                                                  mt-1>
                                            <v-flex xs12
                                                    sm4
                                                    offset-sm4
                                                    md5
                                                    offset-md0>
                                                <a class="btn-cennik standard-text"
                                                   @click="CennikClick()">
                                                    <v-icon>keyboard_arrow_down</v-icon>
                                                    Cenník
                                                </a>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row
                                                  wrap
                                                  class="table-cennik"
                                                  v-bind:class="{'table-cennik-show' : active}">
                                            <v-flex xs12>
                                                <v-layout row
                                                          wrap
                                                          v-for="item in items"
                                                          :key="item.title">
                                                    <v-flex xs5
                                                            sm2
                                                            offset-sm4
                                                            md5
                                                            offset-md0>
                                                        {{item.title}}
                                                    </v-flex>
                                                    <v-flex xs5
                                                            sm2
                                                            offset-sm0
                                                            offset-xs1
                                                            md5
                                                            offset-md1>{{item.cena}}
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </div>
                            </div>
                        </v-flex>

                        <v-flex xs12
                                md5>
                            <div class="carousel-wrapper">
                                <v-carousel class="carousel"
                                            cycle
                                            hide-delimiters
                                            light>
                                    <v-carousel-item v-for="(item,i) in carPictures1"
                                                     v-bind:src="item.src"
                                                     class="carousel-item"
                                                     :key="i">
                                    </v-carousel-item>
                                </v-carousel>
                            </div>
                        </v-flex>
                        <v-flex xs12
                                sm4
                                offset-sm4
                                md3
                                offset-md1>
                            <v-btn block
                                   flat
                                   class="standard-background standard-text-white ">Objednať</v-btn>
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
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      items: [
        { title: "1-2 dni", cena: "40 eur/ den" },
        { title: "2-7 dni", cena: "35 eur/ den" },
        { title: "7-14 dni", cena: "30 eur/ den" },
        { title: "14-30 dni", cena: "20 eur/ den" }
      ],
      carPictures1: [
        { src: "/static/cars/sample-car.png" },
        { src: "/static/cars/sample-car.png" },
        { src: "/static/cars/sample-car.png" },
        { src: "/static/cars/sample-car.png" },
        { src: "/static/cars/sample-car.png" }
      ],
      car: {
        id: 1,
        stars: 4,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure laboriosam numquam molestiae libero, excepturi ducimus sequi quos.",
        model: "Something x3.14",
        typ: "Automat",
        neviem: "Neviem",
        price: "20 eur/ den",
        pictures: [
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" }
        ],
        prices: [
        { title: "1-2 dni", cena: "40 eur/ den" },
        { title: "2-7 dni", cena: "35 eur/ den" },
        { title: "7-14 dni", cena: "30 eur/ den" },
        { title: "14-30 dni", cena: "20 eur/ den" }
      ]
      }
    };
  },
  methods: {
    CennikClick() {
      this.active = !this.active;
    }
  }
};
</script>


<style scoper>
.transparent {
  background-color: rgba(255, 255, 255, 0);
}

.carousel-wrapper {
  height: 300px;
  text-align: center;
  border: 1px solid rgb(197, 18, 48);
}

.carousel {
  height: 100%;
  color: red;
}

.carousel-item {
  display: block;
  background-size: contain;
}

.btn-cennik {
  border-bottom: 1px solid rgb(50, 50, 50);
  border-radius: 0;
  padding: 0px 10px 5px 0px;
}

.table-cennik {
  max-height: 0px;
  height: 150px;
  transition: max-height 2s ease;
  overflow: hidden;
}

.table-cennik-show {
  max-height: 150px;
  transition: max-height 2s;
  transition-timing-function: ease;
}
</style>
