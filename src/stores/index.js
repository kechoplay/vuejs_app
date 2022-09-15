import Vue from 'vue'
import Vuex from 'vuex'
import auth_users from '@/stores/auth_users'
import common from '@/stores/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth_users,
    common
  }
})

export default store
