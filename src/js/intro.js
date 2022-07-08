import { Swiper, Navigation, EffectFade, Autoplay, Controller, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay, Controller, Pagination]);

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
    });
}
