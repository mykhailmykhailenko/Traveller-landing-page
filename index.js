// Carousel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    startPosition: 0,
    items: 1,
    responsive : {
        650: {
            startPosition: 1,
            items: 3,
        },
        850: {
            startPosition: 1,
            items: 3,
            margin: 15,
        },
        1000: {
            items: 3,
            margin: 20,
        },
        1200: {
            items: 3,
            margin: 30,
        }
    }
});
$('.slider-btn-prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon

const navBtn = document.querySelector('.nav-toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav')

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}