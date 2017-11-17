<template>
  <div>
      <v-toolbar color="white" flat class="border-bottom">
        <v-toolbar-side-icon class="hidden-md-and-up standard-color"></v-toolbar-side-icon>
        <v-layout justify-center fill-height row wrap class="hidden-sm-and-down">
            <v-spacer></v-spacer>
            <v-flex xs3 md2 text-xs-center 
                v-for="item in menuItems" 
                :key="item.title">
                <v-btn block flat class="fill ver-align-center menu-item standard-color">
                    {{ item.title }}
                </v-btn>
            </v-flex>     
                        <v-spacer></v-spacer>
                                                                 
        </v-layout>
      </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "ponuka", icon: "home" },
        { title: "kto sme", icon: "home" },
        { title: "podmienky", icon: "home" },
        { title: "kontakt", icon: "home" }
      ]
    };
  }
};
</script>


<style>
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

.standard-color {
  color: rgb(197, 18, 48) !important;
}
</style>