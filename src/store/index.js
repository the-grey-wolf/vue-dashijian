import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: getItem('userToken')
    },
    mutations: {
        getuser(state, data) {
            state.user = data
            setItem('userToken', state.user)
        }
    },
    actions: {},
    modules: {}
})