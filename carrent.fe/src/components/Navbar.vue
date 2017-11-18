<template>
  <div>
    <v-layout>
      <v-navigation-drawer temporary
                           v-model="drawer"
                           light fixed
                           absolute>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://deltafonts.com/wp-content/uploads/Levis-Logo.png" />
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0"
                dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in menuItems"
                       :key="item.title"
                       @click="''" class="menu-item">
            <v-list-tile-action>
              <v-icon class="standard-color">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="standard-color">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-toolbar color="white"
               flat fixed
               class="border-bottom">
      <v-toolbar-side-icon @click.stop="sideIconClick()"
                           class="hidden-md-and-up standard-color"></v-toolbar-side-icon>
      <v-layout justify-center
                fill-height
                row
                wrap
                class="hidden-sm-and-down">
        <v-spacer></v-spacer>
        <v-flex xs3
                md2
                text-xs-center
                v-for="item in menuItems"
                :key="item.title">
          <v-btn block
                 flat
                 class="fill ver-align-center menu-item standard-color">
            <v-layout row
                      wrap>
              <v-flex xs12>
                <v-icon>{{ item.icon }}</v-icon>
              </v-flex>
              <v-flex xs12>
                <span>{{ item.title }}</span>
              </v-flex>
            </v-layout>
          </v-btn>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
import NavbarDrawer from "./../components/Navbar.vue";

export default {
  data() {
    return {
      menuItems: [
        { title: "Ponuka", icon: "directions_car" },
        { title: "Kto sme", icon: "fingerprint" },
        { title: "Podmienky", icon: "assignment_turned_in" },
        { title: "Kontakt", icon: "phone" }
      ],
      drawer: null
    };
  },
  methods:{
    sideIconClick(){

      this.drawer = !this.drawer;
    }
  }
};
</script>


<style scoped>
.menu-item {
  font-family: Intro;
  font-size: 1.3em;
  
}

.fill {
  height: 100%;
}
.ver-align-center {
  margin: 0 auto;
}

.border-bottom {
  border-bottom: 1px solid black;
}
</style>

