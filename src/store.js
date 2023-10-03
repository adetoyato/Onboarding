import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_URL } from "./config/dev.env";
import createPersistedState from "vuex-persistedstate";
import auth from "./store/modules/auth";
import router from "./router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupState: [],
    destinationState: [],
    timeState: [],
    flightDetailsState: [],
    bookingState: [],
    admin: {},
    user: {},
    loggedIn: false,
  },
  getters: {
    fetchGroup: (state) => {
      return state.groupState;
    }
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
    registerSuccess(state) {},
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
      console.log('reach')
      return await axios
        .post(`${API_URL}/login`, {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          console.log(response)
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            router.push("/dashboard");
          }

          commit("loginSuccess", localStorage.getItem("user"));
          return response.data;
        })
        // .catch((error) => {
        //   commit("loginFailure", { user: null });
        //   console.log("Invalid credentials!", error);
        //   return error.message;
        // });
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

  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
