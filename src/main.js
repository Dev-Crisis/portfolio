import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import VueFeather from 'vue-feather'
router.beforeEach((to, from, next) => {
    document.title =
        to.meta.title + " | Portfolio" || "Portfolio";

    next();
});

createApp(App).component(VueFeather.name, VueFeather).use(router).mount('#app')
