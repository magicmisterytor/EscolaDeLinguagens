document.addEventListener('DOMContentLoaded', function () {
    let carouselElement = document.getElementById('carousel-main');
    let carousel = new bootstrap.Carousel(carouselElement);
    let accordionElement = document.getElementById('accordionFlushExample');

    let isSyncingCarousel = false;
    let isSyncingAccordion = false;

    // Sincronizar o carrossel com o acordeão
    carouselElement.addEventListener('slide.bs.carousel', function (event) {
        if (isSyncingAccordion) return;
        isSyncingCarousel = true;
        let index = event.to;
        let accordions = accordionElement.querySelectorAll('.accordion-collapse');
        accordions.forEach(function (accordion, i) {
            if (i === index) {
                // Removendo a sincronização automática do acordeão
                // let collapse = new bootstrap.Collapse(accordion, {
                //     toggle: true
                // });
            } else {
                accordion.classList.remove('show');
            }
        });
        isSyncingCarousel = false;
    });

    // Sincronizar o acordeão com o carrossel
    accordionElement.addEventListener('show.bs.collapse', function (event) {
        if (isSyncingCarousel) return;
        isSyncingAccordion = true;
        let accordions = accordionElement.querySelectorAll('.accordion-collapse');
        let index = Array.from(accordions).indexOf(event.target);
        carousel.to(index);
        isSyncingAccordion = false;
    });
});

  /*--------------------------------------------------------------------------------------------------------*/
