var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
        //swiper adjustments based on screen size
        310: {
            slidesPerView: .75,
            spaceBetween: 20
        },
        350: {
            slidesPerView: .9,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2.7,
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