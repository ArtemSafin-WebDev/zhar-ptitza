
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function header() {
    const header = document.querySelector('.page-header');
    const changeColorBlock = document.querySelector('.js-change-header-color');
    if (!header || !changeColorBlock || header.classList.contains('fixed')) return;

    

    ScrollTrigger.create({
        trigger: changeColorBlock,
        start: () => `bottom-=${header.offsetHeight} top`,
        markers: false,
        onEnter: () => {
            header.classList.add('fixed')
        },
        onLeaveBack: () => {
            header.classList.remove('fixed')
        }
    })
}