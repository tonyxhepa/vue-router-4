import { createRouter, createWebHistory } from "vue-router";

import Vuejs from '../components/Vuejs.vue';
import Laravel from '../components/Laravel.vue';
import Tailwind from '../components/Tailwindcss.vue'

const routes = [
    {path: '/', name: 'Vue', component: Vuejs},
    {path: '/laravel', name: 'Laravel', component: Laravel},
    {path: '/tailwind', name: 'Tailwind', component: Tailwind}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;