<template>
  <v-app light>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar.vue"
  export default {
    components:{
      'nav-bar' : Navbar
    }
  }
</script>

<style>

  @font-face {
    font-family: Intro;
    src: url('./stylus/fonts/Intro.otf');
  }
</style>