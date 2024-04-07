import {createRouter, createMemoryHistory} from 'vue-router'

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';
import NotFound from "./components/NotFound.vue";

const routes = [
    {path: '/', component: HomeView, meta: {title: "Accueil"}},
    {path: '/projects', component: ProjectsView, meta: {title: "Projets"}},
    {path: '/about', component: AboutView, meta: {title: "A Propos"},},
    {path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router