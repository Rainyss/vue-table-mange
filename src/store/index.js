import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import users from './modules/users/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  },
  state: {
  },
  getters,
  actions: {
  },
  mutations: {
  }
})
