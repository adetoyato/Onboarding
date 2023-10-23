import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
import Booking from '../views/Booking.vue'
import Profile from '../views/Profile.vue'
import AddGroup from '../views/AddGroup.vue'
import ViewUser from '../views/ViewUser.vue'
import Destinations from '../views/Destinations.vue'
import Footer from '../components/Footer.vue'
import Spinner from '../components/Spinner.vue'
import AddFlight from '../views/AddFlight.vue'


Vue.use(VueRouter);

const routes = [
        {
            path: '/',
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
            path: '/destinations',
            name: 'destinations',
            component: Destinations,
        },
        {
            path: '/footer',
            name: 'footer',
            component: Footer,
        },
        {
            path: '/spinner',
            name: 'spinner',
            component: Spinner,
        },
        {
            path: '/flights',
            name: 'flights',
            component: AddFlight,
        }
]

const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
    });

router.beforeEach((to, from, next)=> {
    const publicPages = ["/", "/login", "/register"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    if (authRequired && !loggedIn) {
        return next ("/dashboard");
    }

    next();
});

export default router;