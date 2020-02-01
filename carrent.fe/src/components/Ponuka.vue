<template>
    <div class="main-container">
        <v-container fluid
                     text-xs-center
                     class="no-padding"
                     text-xs-center
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
            <auto :car="cars[0]"></auto>
            <auto :car="cars[1]"></auto>
            <auto :car="cars[2]"></auto>
            <auto :car="cars[3]"></auto>

            <page-footer></page-footer>
        </v-container>
    </div>
</template>

<script>
import Auto from "./Auto";
import Footer from "./Footer";

export default {
  data() {
    return {};
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  components: {
    auto: Auto,
    "page-footer": Footer
  }
};
</script>
