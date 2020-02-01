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
                    <v-icon class="standard-color">description</v-icon>
                </v-flex>
                <v-flex xs12
                        class="header-text">
                    Nová objednávka
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
            <!--
            <v-layout row
                      text-xs-center
                      mt-5
                      mb-5>
                <v-flex xs4
                        offset-xs4>
                    <ul id="example-1">
                        <li v-for="attribute in car.attributes"
                            :key="attribute.name">
                            <b>{{ attribute.name }}:</b> {{ attribute.value }}
                        </li>
                    </ul>

                </v-flex>
            </v-layout>
            -->
            <v-layout row
                      text-xs-center
                      mt-5
                      mb-5>
                <v-flex xs4
                        offset-xs4>

                    <order-form></order-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ObjednavkaFormular from "./ObjednavkaFormular";

export default {
  props: ["id"],
  computed: {
    car() {
      var carId = this.id;
      var found = false;
      var car = this.$store.state.cars.find(function(item) {
        if (item.id == carId) {
          found = true;
          return item;
        }
      });

      if (!found) {
        this.$router.push("/chyba-objednavky");
        return null;
      }

      return car;
    }
  },
  components: {
    "order-form": ObjednavkaFormular
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
