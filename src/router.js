import {createMemoryHistory, createRouter} from 'vue-router'

const HomeView = () => import('./views/HomeView.vue');
const ProjectsView = () => import('./views/ProjectsView.vue');
const AboutView = () => import('./views/AboutView.vue');

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