import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';
import { convertRemToPixels, IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade, Autoplay]);

export default function spaSlider() {
    const elements = Array.from(document.querySelectorAll('.js-spa-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            navigation: {
                nextEl: element.querySelector('.spa-slider__arrow--next'),
                prevEl: element.querySelector('.spa-slider__arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 4,
                    spaceBetween: convertRemToPixels(8)
                }
            }
        });
    });
}
