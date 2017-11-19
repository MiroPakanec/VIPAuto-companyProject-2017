<template>
  <v-layout mt-5
                class="standard-background">
        <v-flex xs12>
          <v-layout row
                    wrap
                    mt-5
                    standard-text-white>
            <v-flex xs10
                    offset-xs1
                    md4
                    offset-md0
                    mb-5>
              <v-layout row>
                <v-flex xs12>
                  <v-icon dark
                          large>public</v-icon>
                  <h1 class="header-text-white header-text-small"> Sociálne siete</h1>
                </v-flex>
              </v-layout>
              <v-layout row
                        mt-4>
                <v-flex xs12>
                  <p class="standard-text-white ">Sledujte aktuálne dianie v našej spoločnosti.<br>Sme na
                    <a class="light-link">facebook</a> -u!</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs10
                    offset-xs1
                    md4
                    offset-md0
                    mb-5>
              <v-layout row>
                <v-flex xs12>
                  <v-icon dark
                          large>assignment_turned_in</v-icon>
                  <h1 class="header-text-white header-text-small"> Podmienky</h1>
                </v-flex>
              </v-layout>
              <v-layout row
                        mt-4>
                <v-flex xs12>
                  <p class="standard-text-white ">Je dôležité, aby ste vedeli o podmienkach a pravidlách spoločnosti VIP Auto.<br>Nájdete ich
                    <a class="light-link">TU</a>.</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs10
                    offset-xs1
                    md4
                    offset-md0
                    mb-5>
              <v-layout row>
                <v-flex xs12>
                  <v-icon dark
                          large>phone</v-icon>
                  <h1 class="header-text-white header-text-small"> Kontakt</h1>
                </v-flex>
              </v-layout>
              <v-layout row
                        mt-4>
                <v-flex xs12>
                  <p class="standard-text-white ">Potrebujete poradiť?<br>Neváhajte a
                    <a class="light-link">Kontaktujte</a> nás!
                  </p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
</template>

<style>
.light-link {
  color: white !important;
  font-weight: bolder;
  text-decoration: underline;
}
</style>
