import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gallerySlider from './gallerySlider';
import intro from './intro';
import news from './news';
import apartments from './apartments';
import maps from './maps';
import header from './header';
import scrollToTop from './scrollToTop';
import menuImages from './menuImages';
import footerNav from './footerNav';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    footerNav();
    accordions();
    modals();
    tabs();
    menu();
    gallerySlider();
    intro();
    news();
    apartments();
    maps();
    header();
    scrollToTop();
    menuImages();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
