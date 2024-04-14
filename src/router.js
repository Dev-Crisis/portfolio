import {createRouter, createMemoryHistory} from 'vue-router'

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from "./views/ContactView.vue";

const routes = [
    {path: '/', component: HomeView, meta: {title: "Accueil"}},
    {path: '/projects', component: ProjectsView, meta: {title: "Projets"}},
    {path: '/about', component: AboutView, meta: {title: "A Propos"},},
    {path: '/contact', component: ContactView, meta: {title: "Contact"},},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            left: 0, top: 0,
            behavior: 'smooth',
        }
    }
})

export default router