import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import App from './App.vue'
import LoginPage from './pages/Login.vue'
import DashboardPage from './pages/Dashboard.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component('app', App)

const routes = [
    {path: '/', component: LoginPage, name: 'home'},
    {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth:true }}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const authUser = JSON.parse(window.localStorage.getItem('authUser'))
        if (authUser && authUser.access_token) {
            next()
        } else {
            next({name: 'home'})
        }
    }
    next()
})

new Vue({
    router, store
}).$mount('#app')
