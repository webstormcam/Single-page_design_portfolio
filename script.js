
 document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        classes:{
            arrows: 'splide__arrows button-section',
		arrow : 'splide__arrow button',
		prev  : 'splide__arrow--prev left-button',
		next  : 'splide__arrow--next right-button',
        },


    });

    splide.mount();
});