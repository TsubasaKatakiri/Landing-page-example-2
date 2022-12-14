import animations from './modules/animations.js';
import dropdown from './modules/dropdown.js';
import heroSlider from './modules/heroSlider.js';
import navbar from './modules/navbar.js';
import ribbon from './modules/ribbon.js';

window.addEventListener('DOMContentLoaded', () => {
    navbar();
    animations();
    heroSlider('.slider', '.slider__content', '.slider__slide');
    ribbon('.ribbon', '.ribbon__content');
    ribbon('.ribbon_agents', '.agents__content');
    dropdown('.menu-button', '.navbar')
})