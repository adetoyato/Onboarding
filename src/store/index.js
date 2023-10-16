import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { API_URL } from "../config/dev.env";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityState: [],
    countryState: [],
    groupState: [],
    memberState: [],
    flightState: [],
    userState: [],
    destinationState: [],
    ticketState: [],
    user: {},
    loggedIn: false,
  },
  getters: {
    fetchCity: (state) => {
      return state.cityState;
    },
    fetchCountry: (state) => {
      return state.countryState;
    },
    fetchGroup: (state) => {
      return state.groupState;
    },
    fetchMember: (state) => {
      return state.memberState;
    },
    fetchFlight: (state) => {
      return state.flightState;
    },
    fetchUser: (state) => {
      return state.userState;
    },
    fetchTicket: (state) => {
      return state.ticketState;
    },
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
      state.status.loggedIn = false;
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
    async fetchUser({ commit }) {
      const response = await axios.get(`${API_URL}/user`);
      commit("SET_USER_LIST", response.data);
      return response;
    },

    async fetchCity({ commit }) {
      const response = await axios.get(`${API_URL}/cities`);
      console.log(response.data);
      commit("FETCH_ALL_CITY", response.data);
      return response;
    },

    async fetchCountry({ commit }) {
      const response = await axios.get(`${API_URL}/country`);
      console.log(response.data);
      commit("FETCH_ALL_COUNTRY", response.data);
      return response;
    },

    async fetchGroup({ commit }) {
      const response = await axios.get(`${API_URL}/group`);
      commit("FETCH_ALL_GROUP", response.data);
      return response;
    },

    async fetchFlight({ commit }) {
      const response = await axios.get(`${API_URL}/flight`);
      return response.data;
    },

    async fetchTicket({ commit }) {
      const response = await axios.get(`${API_URL}/ticket`);
      console.log("action",response.data);
      commit("FETCH_ALL_TICKET", response.data);
      return response.data
    },

    async fetchMember({ commit }) {
      const response = await axios.get(`${API_URL}/member`);
      console.log("action",response.data);
      commit("FETCH_ALL_MEMBER", response.data);
      return response.data
    },

    async addCity({ commit }, data) {
      const response = await axios.post(`${API_URL}/cities`, {
        city_name: data.city_name,
        country_name: data.country_name
      });
      console.log(response);
      commit("ADD_CITY");
    },

    async addCountry({ commit }, data) {
      const response = await axios.post(`${API_URL}/country`, {
        country_name: data.country_name,
      });
      console.log(response);
      commit("ADD_COUNTRY", response.data);
    },

    async addGroup({ commit }, data) {
      const response = await axios.post(`${API_URL}/group`, {
        group_name: data.group_name,
        city_name: data.city_name,
        country_name: data.country_name,
      });
      console.log(response);
      commit("ADD_GROUP");
    },

    async addFlight({ commit }, data) {
      const response = await axios.post(`${API_URL}/flight`, {
        airline_carrier: data.airline_carrier,
        city_name: data.city_name,
        country_name: data.country_name,
      });
      console.log(response);
      commit("ADD_FLIGHT");
    },

    async addTicket({ commit }, data) {
      const response = await axios.post(`${API_URL}/ticket`, {
        fname: data.fname,
        lname: data.lname,
        age: data.age,
        group_name: data.group_name,
        city_name: data.city_name,
        country_name: data.country_name,
        airline_carrier: data.airline_carrier,
        date: data.date,
        flight_number: data.flight_number,
      });
      console.log(response);
      commit("ADD_FLIGHT");
    },

    async deleteUser({ commit }, user_id) {
      const response = await axios.patch(`${API_URL}/user/delete/${user_id}`);
      commit("DELETE_USER", response.data);
      console.log(response.data);
    },

    async deleteCity({ commit }, city_id) {
      const response = await axios.patch(`${API_URL}/cities/delete/${city_id}`);
      commit("DELETE_CITY", response.data);
      console.log(response.data);
    },

    async deleteCountry({ commit }, country_id) {
      const response = await axios.patch(
        `${API_URL}/country/delete/${country_id}`
      );
      commit("DELETE_COUNTRY", response.data);
      console.log(response.data);
    },

    async deleteMember({ commit }, member_id) {
      const response = await axios.patch(
        `${API_URL}/member/delete/${member_id}`
      );
      commit("DELETE_MEMBER", response.data);
      console.log(response.data);
    },

    async deleteTicket({ commit }, ticket_id) {
      console.log("ticket_id", ticket_id)
      const response = await axios.patch(
        `${API_URL}/ticket/delete/${ticket_id}`
      );
      commit("DELETE_TICKET", response.data);
      console.log(response.data);
    },

    //Login
    //city
    // async fetchCity({ commit }) {
    //   const response = await axios.get(`${API_URL}/cities`);
    //   console.log(response.data);
    //   commit("SET_CITY", response.data);
    // },

    // //country
    // async addCity({ commit }, data) {
    //   const response = await axios.post(`${API_URL}/`)
    // }
    // fetchRoles(id) {
    //   const roles = [
    //     { id: 1, role: "admin" },
    //     { id: 2, role: "user" },
    //   ];
    //   return roles.filter((val) => {
    //     return (val.id = id);
    //   });
    // },
    async login({ commit }, user) {
      return await axios
        .post(`${API_URL}/login`, {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            let role_id = response.data.res[0].role_id;
            if (role_id == 1) {
              router.push("/user");
            } else {
              router.push("/dashboard");
            }
          }
          commit("loginSuccess", user);
          return response;
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

  mutations: {
    SET_USER_LIST(state, userState) {
      state.userState = userState;
    },

    //destination
    SET_CITY_LIST(state, cityState) {
      state.cityState = cityState;
    },

    SET_COUNTRY_LIST(state, countryState) {
      state.countryState = countryState;
    },

    SET_GROUP_LIST(state, groupState) {
      state.groupState = groupState;
    },

    ADD_CITY(state, data) {
      state.cityState.push(data);
    },

    ADD_COUNTRY(state, data) {
      state.countryState.push(data);
    },

    ADD_GROUP(state, data) {
      state.groupState.push(data);
    },

    FETCH_ALL_CITY(state, cityState) {
      state.cityState = cityState;
    },

    FETCH_ALL_COUNTRY(state, countryState) {
      state.countryState = countryState;
    },

    FETCH_ALL_GROUP(state, groupState) {
      state.groupState = groupState;
    },

    FETCH_ALL_USER(state, userState) {
      state.userState = userState;
    },

    FETCH_ALL_FLIGHT(state, flightState) {
      state.flightState = flightState;
    },

    FETCH_ALL_MEMBER(state, memberState) {
      state.memberState = memberState;
    },

    FETCH_ALL_TICKET(state, ticketState) {
      console.log("ticketState",ticketState)
      state.ticketState = ticketState;
    },

    DELETE_CITY(state, city_id) {
      let index = state.cityState.findIndex((city) => city.city_id == city_id);
      console.log(index);
      state.cityState.splice(index, 0);
    },

    DELETE_COUNTRY(state, country_id) {
      let index = state.countryState.findIndex(
        (country) => country.country_id == country_id
      );
      console.log(index);
      state.countryState.splice(index, 0);
    },

    DELETE_GROUP(state, group_id) {
      let index = state.userState.findIndex(
        (group) => group.group_id == group_id
      );
      console.log(index);
      state.groupState.splice(index, 0);
    },

    DELETE_USER(state, user_id) {
      let index = state.userState.findIndex((user) => user.user_id == user_id);
      console.log(index);
      state.userState.splice(index, 0);
    },

    DELETE_TICKET(state, ticket_id) {
      let index = state.ticketState.findIndex(
        (ticket) => ticket.ticket_id == ticket_id
      );
      console.log(index);
      state.ticketState.splice(index, 0);
    },

    DELETE_MEMBER(state, member_id) {
      let index = state.memberState.findIndex(
        (member) => member.member_id == member_id
      );
      console.log(index);
      state.memberState.splice(index, 0);
    },
  },

  plugins: [createPersistedState()],
});
