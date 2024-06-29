function setActiveCarouselItem(card){
    var target = card.querySelector('.carousel-item'),
        firstIndicator = card.querySelector('.carousel-indicators > li')
    target.classList.add('active');
    if (firstIndicator) firstIndicator.classList.add('active');
} 



function initTestimonialsCarousel(card) {
    var target = card,
        carouselID = target.getAttribute('id') + '-carousel',
        bs5 = target.getAttribute('data-bs-version') && target.getAttribute('data-bs-version').startsWith('5');
    target.querySelectorAll('.carousel').forEach(el => el.setAttribute('id', carouselID));
    if (target.querySelector('.carousel-controls')) target.querySelectorAll('.carousel-controls').forEach(el => {
        el.querySelectorAll('a').forEach(el => {
            el.setAttribute('href', '#' + carouselID);
            bs5 ? el.setAttribute('data-bs-target', '#' + carouselID)
            : el.setAttribute('data-target', '#' + carouselID);
        }); 
    })
    target.querySelectorAll('.carousel-indicators > li').forEach(el => {
        bs5 ? el.setAttribute('data-bs-target', '#' + carouselID)
        : el.setAttribute('data-target', '#' + carouselID);
    });
    setActiveCarouselItem(target);
}

// Mobirise initialization
var $,
    isJQuery = typeof jQuery == 'function';
if (isJQuery) $ = jQuery;
var isBuilder = document.querySelector('html').classList.contains('is-builder');

if (isBuilder && isJQuery) {
    $(document).on('add.cards', function(event) {
        if($(event.target).hasClass('testimonials-slider')){
            initTestimonialsCarousel(event.target);
        }

    }).on('changeParameter.cards', function(event, paramName, value) {
        if (paramName === 'testimonialsSlides') {
            if ($(event.target).find('.carousel-item.active').length==0) {
                setActiveCarouselItem(event.target);
            }
        }
    });
} else {
    if(typeof window.initTestimonialsPlugin === 'undefined'){
        window.initTestimonialsPlugin = true;
        document.querySelectorAll('.testimonials-slider').forEach(function(el){
            initTestimonialsCarousel(el);
        });      
    }
}