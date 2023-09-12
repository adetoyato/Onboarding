import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
import Booking from '../views/Booking.vue'

Vue.use(VueRouter);

const routes = [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterUser
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/booking',
            name: 'booking',
            component: Booking
        }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router;