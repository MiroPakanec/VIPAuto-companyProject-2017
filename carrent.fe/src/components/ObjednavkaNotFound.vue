<template>
    <div class="main-container" style="margin-top:100px">
        <v-container fluid
                     text-xs-center
                     class="no-padding"
                     text-xs-center
                     mt-5>
            <v-layout row
                      wrap
                      mt-5>
                <v-flex xs12
                        mt-5>
                    <v-icon class="standard-color">error</v-icon>
                </v-flex>
                <v-flex xs12
                        class="header-text">
                    Nastala chyba
                </v-flex>
            </v-layout>
            <v-layout row
                      mt-4>
                <v-flex xs10
                        offset-xs1
                        sm6
                        offset-sm3
                        class="standard-text">
                    Auto, ktoré ste sa pokúsili objednať neexistuje. Uistite sa, ze ste zadali správne údaje. V prípade, že chyba naďalej pretrváva, kontaktujte administrátora:<br/>
                    <b>miropakanec@gmail.com</b>
                </v-flex>
            </v-layout>
            <v-layout row
                      mt-4>
                <v-flex xs10
                        offset-xs1
                        sm6
                        offset-sm3
                        md2
                        offset-md5
                        class="standard-text">
                    <v-btn :to="'ponuka'"
                           flat
                           block
                           class="standard-background standard-text-white">Spať na ponuku</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
