import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        register({commit}, credentials) {
            return axios.post('///localhost:8000/register', credentials).then(
                ({data}) => {
                    console.log('user data is:', data)
                }
            )
        }
    }
})