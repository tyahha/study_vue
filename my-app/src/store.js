import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '初期のメッセージ'
  },
  modules: {
    product,
  },
  getters: {
    message: state => state.message
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({ commit }, message) {
      commit('setMessage', { message })
    }
  }
})

export default store