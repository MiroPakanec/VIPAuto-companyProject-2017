<template>
  <v-app light>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
      
    </main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    "nav-bar": Navbar
  }
};
</script>

<style>
@font-face {
  font-family: Intro;
  src: url("./stylus/fonts/Intro.otf");
}

@font-face {
  font-family: Raleway;
  src: url("./stylus/fonts/Raleway-Regular.ttf");
}

.main-container {
  width: 100%;
  max-width: 1500px;
  padding: 0;
  margin: 0;
}

.standard-color {
  color: rgb(197, 18, 48) !important;
}

.standard-background{
  background-color: rgb(197, 18, 48) !important;
}

.standard-text {
  font-family: Raleway;
  font-size: 1em;
  color:rgb(50, 50, 50) !important;
}

.standard-text-white {
  font-family: Raleway;
  font-size: 1em;
  color:rgb(255, 255, 255) !important;
}

.header-text {
  font-family: Intro;
  font-size: 2em;
  color: rgb(197, 18, 48);
}

.header-text-white {
  font-family: Intro;
  color:rgb(255, 255, 255);
}

.header-text-small {
  font-size: 1.5em;
}

.header-text-extrasmall {
  font-size: 1.2em;
}

.light-link {
  color: white;
  font-weight: bolder;
  text-decoration: underline;
}

.no-padding{
  padding: 0 !important; 
}

.no-margin{
  margin: 0 !important; 
}
</style>