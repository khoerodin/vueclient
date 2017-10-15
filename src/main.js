import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import DashboardPage from './pages/Dashboard.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
    {path: '/', component: App, name: 'app'},
    {path: '/dashboard', component: DashboardPage, name: 'dashboard'}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router
}).$mount('#app')
