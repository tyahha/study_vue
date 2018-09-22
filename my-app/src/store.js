import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '初期のメッセージ'
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