var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.8,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
        // Small screens (up to 768px) - 1 slide
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // Medium screens (769px to 991px) - 2 slides
        769: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        // Large screens (992px and above) - 3.8 slides
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // Large screens (992px and above) - 3.8 slides
        1024: {
            slidesPerView: 3.8,
            spaceBetween: 30
        }
    }
});


// Close menu functionality
document.getElementById('three-dot').addEventListener('click', function () {
    document.querySelector('.mobile-menu').style.display = 'block';
});
document.getElementById('close-icon').addEventListener('click', function () {
    document.querySelector('.mobile-menu').style.display = 'none';
});