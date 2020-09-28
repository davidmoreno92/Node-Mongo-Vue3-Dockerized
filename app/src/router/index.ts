
import { createRouter, createWebHistory } from 'vue-router';

import { store } from "../store";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const ifAuthenticated = (to: any, from: any, next: any) => {
    console.log(store.state.userLogged.email);
    let isAuthenticated = !!store.state.userLogged.email;
    if (to.path != '/login') next();

    if (!isAuthenticated) {
        router.push({
            name: 'login',
            params: {
                returnTo: to.path,
                query: to.query,
            },
        });
    } else {
        next();
    }
};


const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
