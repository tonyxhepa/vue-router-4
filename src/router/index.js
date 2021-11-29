import { createRouter, createWebHistory } from "vue-router";

import Vuejs from '../components/Vuejs.vue';

const routes = [
    {path: '/', name: 'Vue', component: Vuejs},
    {path: '/laravel', name: 'Laravel', component: () => import('../components/Laravel.vue')},
    {path: '/tailwind', name: 'Tailwind', component: () => import('../components/Tailwindcss.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;