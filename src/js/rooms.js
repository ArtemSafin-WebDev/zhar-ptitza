import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function rooms() {
    const rooms = document.querySelector('.rooms');
    if (!rooms) return;

    const roomsCards = Array.from(document.querySelectorAll('.rooms__card'));

    if (roomsCards.length !== 2) return;

    console.log('Padding bottom', parseFloat(window.getComputedStyle(rooms).getPropertyValue('padding-bottom')));

    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            roomsCards.forEach((card, cardIndex) => {
                const contentWrapper = card.querySelector('.rooms__card-content-wrapper');
                const cardContent = card.querySelector('.rooms__card-content');
                const title = card.querySelector('.rooms__card-title');
                const zoneTitle = document.querySelector('.zone__heading');
                const zoneHeadingText = document.querySelector('.zone__heading-text')
                const zoneZoomWrapper = document.querySelector('.zone__image-zoom-wrapper');
                const zoneZoomWrapperInner = document.querySelector('.zone__image-zoom-wrapper-inner');
                const zone = document.querySelector('.zone');
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        // start: () => `top-=${document.querySelector('.page-header').offsetHeight} top`,
                        start: () => `top top`,
                        end: () =>
                            `top+=${parseFloat(window.getComputedStyle(rooms).getPropertyValue('padding-bottom')) + cardContent.offsetHeight} top`,
                        pin: card.querySelector('.rooms__card-content'),
                        pinSpacing: false,
                        scrub: true,
                        markers: false,
                        anticipatePin: 1,
                        onLeave: () => {
                            const tl = gsap.timeline();
                            tl.to(title, {
                                autoAlpha: 0,
                                duration: 0
                            }).to(
                                zoneTitle,
                                {
                                    autoAlpha: 1,
                                    duration: 0
                                },
                                '<'
                            ).to(zoneHeadingText, {
                                autoAlpha: 1,
                                duration: 0.3
                            }, '<')
                        },
                        onEnterBack: () => {
                            const tl = gsap.timeline();
                            tl.to(title, {
                                autoAlpha: 1,
                                duration: 0
                            }).to(
                                zoneTitle,
                                {
                                    autoAlpha: 0,
                                    duration: 0
                                },
                                '<'
                            ).to(zoneHeadingText, {
                                autoAlpha: 0,
                                duration: 0.3
                            }, '<')
                        }
                    }
                });

                tl.to(
                    title,
                    {
                        xPercent: cardIndex === 0 ? 32 : -32,
                        // autoAlpha: 0,
                        duration: 2
                    },
                    0.4
                ).to(
                    contentWrapper,
                    {
                        autoAlpha: 0,
                        duration: 0.7
                    },
                    0
                );

                const zoneTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: zone,
                        start: 'top center',
                        endTrigger: zoneZoomWrapper,
                        end: () => `bottom bottom`,
                        scrub: true,
                        markers: false
                    }
                });

                zoneTl.to(zoneZoomWrapperInner, {
                    scale: 1,
                    duration: 1
                });
            });
        }
    });
}
