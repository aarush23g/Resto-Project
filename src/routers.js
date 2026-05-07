import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        alias: '/home',
        beforeEnter() {
            if (window.location.pathname === '/login') {
                return { name: 'LoginPage' };
            }
        }
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
        alias: '/signup'
    },
    {
        name: 'LoginPage',
        component: Login,
        path: '/login',

    },
    {
        name: 'AddPage',
        component: Add,
        path: '/add'
    },
    {
        name: 'UpdatePage',
        component: Update,
        path: '/update/:id' 
    },
    {
        name: 'AboutUsPage',
        component: AboutUs,
        path: '/about-us'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router; 
