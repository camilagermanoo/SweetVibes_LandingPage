const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = 370; 

slide.style.width = `${size * images.length}px`;

setInterval(() => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slide.style.transform = `translateX(${-size * counter}px)`;
}, 3000);

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })
})