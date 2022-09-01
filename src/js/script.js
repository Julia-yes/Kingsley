const about = document.querySelector(".about-us");
const journal = document.querySelector(".journals__content");
const hair = document.querySelector(".hair-guide");

let toggleSliderAbout = () => {
    if ( window.innerWidth <= 768) {
        about.classList.add("owl-carousel");
        about.classList.add("about-us-carousel");
        about.classList.add("owl-theme");
    }
}

let toggleSliderJournal = () => {
    if ( window.innerWidth <= 992) {
        journal.classList.add("owl-carousel");
        journal.classList.add("journal-carousel");
        journal.classList.add("owl-theme")
    }
}

let toggleSliderHair = () => {
    if ( window.innerWidth <= 768) {
        hair.classList.add("owl-carousel");
        hair.classList.add("hair-carousel");
        hair.classList.add("owl-theme")
    }
}

let initSliderAboutUs = () => {
    toggleSliderAbout();
    $('.about-us-carousel').trigger('destroy.owl.carousel');
    $('.about-us-carousel').owlCarousel({
        loop: false,
        center: true,
        items: 1,
        margin: 20,
    });

}

let initSliderBestseller = () => {
    $('.bestsellers-carousel').trigger('destroy.owl.carousel');
    $('.bestsellers-carousel').owlCarousel({
        items:3,
        loop:false,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
        }
    });
}

let initSliderReasons = () => {
    $('.reasons-carousel').trigger('destroy.owl.carousel');
    $('.reasons-carousel').owlCarousel({
        items: 9,
        dot: true,
        nav: false,
        stagePadding: 60,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:5
            },
            992:{
                items:7
            },
            1400:{
                items:9
            },
            
        }
    });
}

let initSliderJournal = () => {
    toggleSliderJournal();
    $('.journal-carousel').trigger('destroy.owl.carousel');
    $('.journal-carousel').owlCarousel({
        stagePadding: 30,
        items: 5,
        dots: false,
        margin: 20,
        autoplay: true,
        responsive:{      
            300:{
                items:1
            },      
            576:{
                items:5
            },            
        }
    });
}

let initSliderHair = () => {
    toggleSliderHair();
    $('.hair-carousel').trigger('destroy.owl.carousel');
    $('.hair-carousel').owlCarousel({
        loop: false,
        center: true,
        items: 1,
        margin: 20,
    })
}

let initSliders = () => {
    initSliderAboutUs();
    initSliderBestseller();
    initSliderReasons();
    initSliderJournal();
    initSliderHair();
}

$(document).ready(() => {
    initSliders();

    window.addEventListener('resize', () => {
        initSliders();
    });
});
