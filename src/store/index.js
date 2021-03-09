import Vue from 'vue'
import Vuex from 'vuex'

import session from './modules/session'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session
  },
  strict: process.env.NODE_ENV !== 'production' //@see https://vuex.vuejs.org/guide/strict.html#development-vs-production
})