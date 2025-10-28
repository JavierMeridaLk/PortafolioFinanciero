import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component:  async () => await import('./components/Index.vue') },
    { path: '/team', component:  async () => await import('./components/Team.vue') },
    { path: '/stock/:name', component:  async () => await import('./components/DetailPage.vue') },
    { path: '/info', component:  async () => await import('./components/Informacion.vue') },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})