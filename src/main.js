import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// Implementing simple carousel functionality
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    let items = carousel.querySelectorAll('.carousel-item');
    let index = 0;

    function showItem() {
        items.forEach((item, i) => {
            item.classList.add('hidden');
            if (i === index) item.classList.remove('hidden');
        });
    }

    showItem();

    // Ajout d'un interval pour changer automatiquement chaque seconde
    setInterval(() => {
        index = (index + 1) % items.length;
        showItem();
    }, 4500); // 1000ms = 1 seconde
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('hidden');
});

window.onscroll = () => {
    window.scrollY > 1 ? document.querySelector("header").classList.add("fixed") : document.querySelector("header").classList.remove("fixed");
}