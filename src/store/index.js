import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from './module/common-store'

Vue.use(Vuex)

// init empty store
var store = {}

var modules = {
  commonStore
}

store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
