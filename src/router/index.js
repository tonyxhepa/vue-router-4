import { createRouter, createWebHistory } from "vue-router";

import Vuejs from '../components/Vuejs.vue';

const routes = [
    {path: '/', name: 'Vue', component: Vuejs},
    {path: '/laravel', name: 'Laravel', component: () => import('../components/Laravel.vue')},
    {path: '/tailwind', name: 'Tailwind', component: () => import('../components/Tailwindcss.vue')},
    {path: '/courses/:cid', name: 'Courses', component: () => import('../components/Courses.vue'), props:true}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    //linkActiveClass: 'bg-gray-600 text-gray-300 p-2'
});

export default router;