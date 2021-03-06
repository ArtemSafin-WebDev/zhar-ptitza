export default function apartmentsVideo() {
    const elements = Array.from(document.querySelectorAll('.apartments__slider-card-image-container'));

    elements.forEach(element => {
        const video = element.querySelector('video');
        element.addEventListener('mouseenter', () => {
            video.pause();
            video.currentTime = 0;
            video.play();
            element.classList.add('video-shown')
        })

        element.addEventListener('mouseleave', () => {
            video.pause();
            element.classList.remove('video-shown')
        })
    })
}