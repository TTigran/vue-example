import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coins: [],
        authors: []
    },
    actions: {
        loadCoins({commit}) {
            axios
                .get('http://localhost:4000/results')
                .then(r => r.data)
                .then(coins => {
                    console.log(coins);
                    commit('GET_COINS', coins);
                })
        },
        loadAuthors({commit}) {
            let authors = [
                {id: 1, name: 'Tigran1', surname: 'Martirosyan1'},
                {id: 2, name: 'Tigran2', surname: 'Martirosyan2'},
                {id: 3, name: 'Tigran3', surname: 'Martirosyan3'}
            ];
            commit('GET_AUTHORS', authors)
        },
        addAuthors({commit}, payload) {
            commit('ADD_AUTHORS', payload)
        },
    },
    mutations: {
        GET_COINS(state, coins) {
            state.coins = coins
        },
        GET_AUTHORS(state, authors) {
            state.authors = authors
        },
        ADD_AUTHORS(state,payload){
            let authors = state.authors
            authors.push(payload);
            state.authors = authors
        }
    }
})