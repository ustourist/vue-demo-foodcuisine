import { createRouter, createWebHistory } from 'vue-router'
import Food_Page from './../views/Food_Page.vue'

const routes = [
    {
        path: '/',
        name: 'Food_Page',
        component: Food_Page
    },
    {
        path: '/Food_Page',
        name: 'Food_Page',
        component: Food_Page,
    },
    {
        path: '/Cuisine_Page',
        name: 'Cuisine_Page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './../views/Cuisine_Page.vue')
    },
    {
        path: '/Nutrition_Page',
        name: 'Nutrition_Page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './../views/Nutrition_Page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
