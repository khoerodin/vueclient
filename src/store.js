import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/store'

Vue.use(Vuex)
const debug = process.env.MODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userStore
    },
    strict: debug
})
