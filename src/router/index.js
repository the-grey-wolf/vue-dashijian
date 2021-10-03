import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        component: () =>
            import ('@/views/login')
    },
    {
        path: '/index',
        component: () =>
            import ('@/views/index'),
        children: [{
            path: '/echars',
            component: () =>
                import ('@/views/echars')
        }]
    },
    { path: '/index', redirect: '/index/echars' },

]

const router = new VueRouter({
    routes
})

export default router