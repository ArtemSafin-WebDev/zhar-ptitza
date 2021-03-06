import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const burgers = Array.from(document.querySelectorAll('.page-header__burger'));
    const menu = document.querySelector('.menu');

    const menuClose = document.querySelector('.menu__close');

    window.menuOpen = false;

    console.log(menu, burgers);

    if (!burgers.length || !menu) return;

    const openMenu = () => {
        if (window.menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: false
        });
        window.menuOpen = true;
    };
    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        window.menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    burgers.forEach(burger => {
        burger.addEventListener('click', event => {
            event.preventDefault();
            if (!window.menuOpen) {
                openMenu();
            } 
        });
    });

    menuClose.addEventListener('click', event => {
        event.preventDefault();

        if (window.menuOpen) {
            closeMenu();
        }
    });
}
