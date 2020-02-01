import Vue from 'vue'
import Router from 'vue-router'

import KtoSme from '@/components/KtoSme'
import Ponuka from '@/components/Ponuka'
import Podmienky from '@/components/Podmienky'
import Kontakt from '@/components/Kontakt'
import Objednavka from '@/components/Objednavka'
import ObjednavkaNotFound from '@/components/ObjednavkaNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/kto-sme",
    },
    {
      path: "/kto-sme",
      name: "KtoSme",
      component: KtoSme
    },
    {
      path: "/ponuka",
      name: "Ponuka",
      component: Ponuka
    },
    {
      path: "/podmienky",
      name: "Podmienky",
      component: Podmienky
    },
    {
      path: "/kontakt",
      name: "Kontakt",
      component: Kontakt
    },
    {
      path: "/objednavka/:id",
      name: "Objednavka",
      component: Objednavka,
      props: true
    },
    {
      path: "/chyba-objednavky",
      name: "ObjednavkaNotFound",
      component: ObjednavkaNotFound
    },
  ]
})
