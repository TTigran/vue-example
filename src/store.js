import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coins: []
    },
    actions: {
        loadCoins({commit}) {
            axios
                .get('http://localhost:4000/results')
                .then(r => r.data)
                .then(coins => {
                    console.log(coins);
                    commit('SET_COINS', coins);
                })
        }
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        }
    }
})