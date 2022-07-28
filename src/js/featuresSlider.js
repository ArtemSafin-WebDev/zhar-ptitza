import { Swiper, Navigation, EffectFade, Autoplay, Pagination, Grid } from 'swiper';
import { convertRemToPixels } from './utils';
Swiper.use([Navigation, EffectFade, Autoplay, Pagination, Grid]);

export default function featuresSlider() {
    const elements = Array.from(document.querySelectorAll('.js-features-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 800,
            autoHeight: false,

            grid: {
                rows: 2,
                fill: 'column'
            },
            spaceBetween: convertRemToPixels(2),
            navigation: {
                nextEl: element.querySelector('.features__slider-arrow--next'),
                prevEl: element.querySelector('.features__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: convertRemToPixels(14),
                    grid: {
                        rows: 1,
                        fill: 'row'
                    }
                }
            }
        });
    });
}
