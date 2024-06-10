$(document).ready(function(){
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        
        smartSpeed:5000,
        autoplay:true,
        autoplayTimeout:5000,
        animateIn:'animate__fadeInLeft',
        animateOut:'animate__fadeOutRight',
        
       
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }}
   
    })
    var owl = $('#slider1');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        new WOW().init();
    })
    new WOW().init();
    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
       
        dotsEach:true,     
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }}
    })
    $('#slider3').owlCarousel({
        loop:true,
        margin:10,
        dotsEach:2,
        center:true, 

        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }}
    })
    $('#slider4').owlCarousel({
       
        margin:10,
        
        dots:false,
        
          
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }}
    })
    $('#slider5').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#slider6').owlCarousel({
        loop:true,
        margin:10,
        dotsEach:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});