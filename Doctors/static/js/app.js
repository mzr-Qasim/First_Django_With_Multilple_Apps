jQuery(document).ready(function($) {
    var $owl = $('.owl-carousel5');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:false,
            loop:true,
            dots:false,
            autoplay:true
        },
        600:{
            items:1,
            nav:false,
            loop:true,
            dots:false,
            center:true,
            autoplay:true
        },
        831:{
            items:2,
            nav:false,
            loop:true,
            dots:false,
            center:false,
            autoplay:true
        },
        1464:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            autoplay:true,
            dots:false
        },
        1800:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            autoplay:true,
            dots:false,

        },

    }
      
    });
    var $owl = $('.owl-carousel6');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:false,
            loop:true,
            dots:false,
            autoplay:true
        },
        600:{
            items:1,
            nav:false,
            loop:true,
            dots:false,
            center:true,
            autoplay:true
        },
        831:{
            items:2,
            nav:false,
            loop:true,
            dots:false,
            center:false,
            autoplay:true
        },
        1464:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            autoplay:true,
            dots:false
        },
        1800:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            autoplay:true,
            dots:false,

        },

    }
      
    });


    
});
