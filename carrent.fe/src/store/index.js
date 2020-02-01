import Vue from 'vue'
import Vuex from 'vuex'

import Cars from './cars'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cars: Cars.getCars()
    }
});