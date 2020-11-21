import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quiz: {}
    },
    mutations: {
        setQuiz(state, payload) {
            state.quiz = payload
        }
    },
    actions: {},
    modules: {}
})
