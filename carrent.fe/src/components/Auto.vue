<template>
    <v-card flat
            class="transparent"
            color=""
            v-model="car">
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
                            <p class="">{{car.title}}</p>
                            <p>
                                <v-icon v-for="n in car.stars"
                                        :key="n"
                                        class="standard-color">star</v-icon>
                            </p>
                        </div>
                        <div class="standard-text">
                            <div>
                                <p>{{car.description}}</p>
                            </div>
                            <div>
                                <p class="no-margin"
                                   v-for="attribute in car.attributes"
                                   :key="attribute.name">
                                    <b>{{attribute.name}}:</b> {{attribute.value}}<br/>
                                </p>
                            </div>
                            <br>
                            <div class="header-text header-text-extrasmall">
                                <p>Cena: od {{car.price}} eur / den</p>
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
                                          v-bind:class="{'table-cennik-show' : car.visiblePriceList}">
                                    <v-flex xs12>
                                        <v-layout row
                                                  wrap
                                                  v-for="item in car.prices"
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
                                                    offset-md1>{{item.price}}
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
                            <v-carousel-item v-for="(item,i) in car.pictures"
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
</template>

<script>
export default {
  props: ["car"],
  methods: {
    CennikClick() {
      this.car.visiblePriceList = !this.car.visiblePriceList;
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