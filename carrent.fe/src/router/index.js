import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Catalogue from '@/components/Catalogue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/domov",
    },
    {
      path: "/domov",
      name: "Home",
      component: Home
    },
    {
      path: "/ponuka",
      name: "Catalogue",
      component: Catalogue
    }
  ]
})
