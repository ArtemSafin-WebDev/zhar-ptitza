import { Swiper, Navigation, EffectFade, Autoplay, Controller, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay, Controller, Pagination]);

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function intro() {
    const elements = Array.from(document.querySelectorAll('.js-intro'));
    elements.forEach(element => {
        const mainContainer = element.querySelector('.intro__content-slider .swiper');
        const bgContainer = element.querySelector('.intro__bg-slider .swiper');

        const mainInstance = new Swiper(mainContainer, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: element.querySelector('.intro__pagination'),
                type: 'bullets',
                clickable: true
            }
        });

        const bgSlider = new Swiper(bgContainer, {
            effect: 'fade',
            fadeEffect: {
                crossFade: false
            }
        });

        mainInstance.controller.control = bgSlider;
        bgSlider.controller.control = mainInstance;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: '.intro__parallax-wrapper',
                markers: false,
                pinSpacing: false
                
            }
        });

        tl.to(element.querySelector('.intro__bg-slider'), {
            scale: 1.05,
            duration: 0.4
        })
    });
}
