import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { API_URL } from '../config/dev.env';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    loggedIn: false,
  },
  getters: {

  },
  mutations: {

    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    // SET_USER_DATA(state, userData) {
    //     state.user=userData
    //     localStorage.setItem('user', JSON.stringify(userData))
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${
    //         userData.token
    //     }`
    // }
  },
  actions: {
    async login({ commit }, user) {
      return await axios
        .post(`${API_URL}/login`, {
          username: user.username,
          password: user.password,
        }).then(res => {
          commit('loginSuccess', user);
        });
    },


    logout({ commit }) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("logout");
    },
    /*register({ commit }, credentials) {
        return axios
        .post('//localhost:8000/register', credentials)
        .then(({data}) => {
                commit('SET_USER_DATA', data)
            })
    },
    login ({ commit }, credentials) {
        return axios
        .post('//localhost:8000/login', credentials)
        .then(({ data }) => {
            commit('SET_USER_DATA', data)
        })
    },*/
  },


  plugins: [createPersistedState()]
});