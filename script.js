
const left = document.querySelector('.left-button')
const right = document.querySelector('.right-button')


 document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        pagination:Boolean=false,
        gap:'1em',
        autoWidth: true,
     
        classes:{
            arrows: 'splide__arrows button-section',
		arrow : 'splide__arrow button',
		prev  : 'splide__arrow--prev left-button',
		next  : 'splide__arrow--next right-button',
        },
     


    });

    splide.mount();
});