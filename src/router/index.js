import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
import Booking from '../views/Booking.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import AddGroup from '../views/AddGroup.vue'
import ViewUser from '../views/ViewUser.vue'
import FlightDetails from '../views/FlightDetails.vue'
import User from '../views/User.vue'


Vue.use(VueRouter);

const routes = [
        {
            path: '/Home',
            name: 'home',
            component: Home,
            meta: {
                title: "Home",
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                title: "Dashboard",
            },
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterUser,
            meta: {
                title: "Register",
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: "Login",
            },
        },
        {
            path: '/booking',
            name: 'booking',
            component: Booking,
            meta: {
                title: "Booking",
            },
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                title: "Profile",
            },
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                title: "Admin",
            },
        },
        {
            path: '/add',
            name: 'add',
            component: AddGroup,
        },
        {
            path: '/user',
            name: 'user',
            component: ViewUser,
        },
        {
            path: '/flight',
            name: 'flight',
            component: FlightDetails,
        },
        {
            path: '/user',
            name: 'user',
            component: User,
        },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router;