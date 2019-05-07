import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import {UPDATE_USER, USER, LOGOUT} from './field'


export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {}
  },
  mutations: {
    [UPDATE_USER] (state, user) {
      console.log(UPDATE_USER, user)
      state.user = user
      localStorage.setItem(USER, JSON.stringify(user))
      state.isLogin = true
    },
    [LOGOUT] (state) {
      state.isLogin = false
      state.user = {}
      localStorage.removeItem(USER)
      console.log('退出登陆')
    }
  },
  actions: {
    loadUser (context) {
      console.log('loadUser', context)
      let user = JSON.parse(localStorage.getItem(USER))
      if(user !== null) {
        context.commit(UPDATE_USER, user)
      }
    }
  }
})
