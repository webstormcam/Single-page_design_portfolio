
const left = document.querySelector('.left-button')
const right = document.querySelector('.right-button')


 document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        pagination:Boolean=false,
        // gap:'1em',
        autoWidth: true,
        arrowPath:'M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z',
     
        classes:{
            arrows: 'splide__arrows button-section',
		arrow : 'splide__arrow button',
		prev  : 'splide__arrow--prev left-button',
		next  : 'splide__arrow--next right-button',
        },
     


    });

    splide.mount();
});



