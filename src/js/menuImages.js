export default function menuImages() {
    const btns = Array.from(document.querySelectorAll('.menu__nav-list-item'));
    const imagesContainer = document.querySelector('.menu__images-list');
    const images = Array.from(document.querySelectorAll('.menu__images-card'));

    

    btns.forEach((btn, btnIndex) => {
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('active');
            imagesContainer.classList.add('active');

            images.forEach(image => image.classList.remove('active'));
            images[btnIndex].classList.add('active');
        })
        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('active');
            imagesContainer.classList.remove('active');
            images.forEach(image => image.classList.remove('active'));
        })
    })
}