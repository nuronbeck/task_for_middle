import Vue from 'vue'
import Vuex from 'vuex'

import apartments from './modules/apartments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    strict: true,
    apartments
  }
})