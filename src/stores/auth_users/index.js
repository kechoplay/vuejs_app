import { UserService } from '@/services'
import router from '@/routers'

import {
  ACTION_LOGIN_USER,
  ACTION_SAVE_AUTH_USER,
  CLEAR_DATA_LOGOUT,
  UPDATE_PROFILE,
  ACTION_USER_LOGOUT,
  ACTION_SET_ACCESS_TOKEN
} from './actions'

import { SAVE_AUTH_USER, SET_ACCESS_TOKEN } from './mutations'

const data_state = {
  authUser: null,
  accessToken: null
}

const getters = {
  authMe(state) {
    return state.authUser
  },
  authUser(state) {
    return (state.authUser && state.authUser.id) ? state.authUser : JSON.parse(localStorage.getItem('userInfo'));
  },
  accessToken(state) {
    return state.accessToken
  }
}
const actions = {
  async [ACTION_LOGIN_USER](context, payload) {
    const {data} = await UserService.login(payload)
    if (data && data.data.user) {
      const userInfo = {...data.data.user, role: payload.role}
      context.commit(SAVE_AUTH_USER, userInfo);
      context.commit(SET_ACCESS_TOKEN, data.data.access_token);
    }
  },
  [CLEAR_DATA_LOGOUT](context) {
    context.commit(SAVE_AUTH_USER, null)
    context.commit(SET_ACCESS_TOKEN, null)
    router.push({name: 'Login'}, () => {})
  },
  [UPDATE_PROFILE](context, payload) {
    context.commit(SAVE_AUTH_USER, payload);
  },
  async [ACTION_USER_LOGOUT](context) {
    await UserService.logout()
    context.commit(SAVE_AUTH_USER, null)
    context.commit(SET_ACCESS_TOKEN, null)
  },
  [ACTION_SAVE_AUTH_USER](context, payload) {
    context.commit(SAVE_AUTH_USER, payload)
  },
  [ACTION_SET_ACCESS_TOKEN](context, payload) {
    context.commit(SET_ACCESS_TOKEN, payload)
  }
}

const mutations = {
  [SAVE_AUTH_USER](state, data) {
    state.authUser = data ? data : null
    if (data) {
      localStorage.setItem('userInfo', JSON.stringify(data))
    } else {
      localStorage.removeItem('userInfo')
    }
  },
  [SET_ACCESS_TOKEN](state, access_token) {
    state.accessToken = access_token ? access_token : null
    if (access_token) {
      localStorage.setItem('accessToken', access_token)
    } else {
      localStorage.removeItem('accessToken')
    }
  },
}

export default {
  state: data_state,
  actions,
  mutations,
  getters
}
