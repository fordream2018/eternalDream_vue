import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/list',
            name: 'list',
            redirect: '/list/table',
            component: () => import(/* webpackChunkName: "about" */ './views/List.vue'),
            children: [
                {
                    path: '/list/table',
                    name: 'table',
                    component: () => import(/* webpackChunkName: "about" */ './components/list/sublist/Table.vue')
                },
                {
                    path: '/list/listing',
                    name: 'listing',
                    component: () => import(/* webpackChunkName: "about" */ './components/list/sublist/Listing.vue')
                }
            ]
        },
        {
            path: '/graph',
            name: 'graph',
            component: () => import(/* webpackChunkName: "about" */ './views/Graph.vue')
        },
        {
            path: '/map',
            name: 'map',
            redirect: '/map/baidu',
            component: () => import(/* webpackChunkName: "about" */ './views/Map.vue'),
            children: [
                {
                    path: '/map/baidu',
                    name: 'baidu',
                    component: () => import(/* webpackChunkName: "about" */ './components/map/submap/BMap.vue')
                },
                {
                    path: '/map/gaode',
                    name: 'gaode',
                    component: () => import(/* webpackChunkName: "about" */ './components/map/submap/AMap.vue')
                }
            ]
        },
        {
            path: '/three',
            name: 'three',
            component: () => import('./views/Three.vue'),
            redirect: '/three/demo1',
            children: [
                {
                    path: '/three/demo1',
                    name: 'demo1',
                    component: () => import('./components/three/subThree/Demo1.vue')
                }
            ]
        }
    ]
});
