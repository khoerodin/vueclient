import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import DashboardPage from './pages/Dashboard.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
    {path: '/', component: App, name: 'home'},
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
    router
}).$mount('#app')
