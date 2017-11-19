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
            <auto :car="car" ></auto>
        </v-container>
    </div>
</template>

<script>

import Auto from './Auto'

export default {
  data() {
    return {
      car: {
        id: 1,
        title: "Supermodel",
        stars: 4,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure laboriosam numquam molestiae libero, excepturi ducimus sequi quos.",
        attributes: [
          { name: "Model", value: "Something x3.14" },
          { name: "Typ", value: "Automat" },
          { name: "Neviem", value: "Neviem" },
          { name: "Neviem2", value: "Nieco ine" }
        ],
        price: 20,
        pictures: [
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" },
          { src: "/static/cars/sample-car.png" }
        ],
        visiblePriceList: false,
        prices: [
          { title: "1-2 dni", price: "40 eur/ den" },
          { title: "2-7 dni", price: "35 eur/ den" },
          { title: "7-14 dni", price: "30 eur/ den" },
          { title: "14-30 dni", price: "20 eur/ den" }
        ]
      }
    };
  },
  components:{
      'auto' : Auto
  }
};
</script>
