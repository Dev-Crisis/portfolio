import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
    {path: '/', component: HomeView, meta: {title: "Home"}},
    {path: '/projects', component: ProjectsView, meta: {title: "Projects"}},
    {path: '/about', component: AboutView, meta: {title: "About"},},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router