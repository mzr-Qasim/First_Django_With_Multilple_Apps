

const choiceArray = document.querySelectorAll(".choice")



let playButton = document.getElementById("play_button");
let pauseButton = document.getElementById("pause_button");




jQuery(document).ready(function($) {


    $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');




    var $owl = $('.product-owl-carousel-about-page');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:true,
            loop:true,
            dots:false,
            autoplay:true
        },
        600:{
            items:3,
            nav:true,
            loop:true,
            dots:true,
            center:true,
            autoplay:true
        },
        831:{
            items:3,
            nav:true,
            loop:true,
            dots:true,
            center:true,
            autoplay:true
        },
        1464:{
            center:true,
            loop:true,
            items:5,
            nav:false,
            autoplay:true,
            dots:true,
        },
        1800:{
            center:true,
            loop:true,
            items:5,
            nav:false,
            autoplay:true,
            dots:true,
        },

    }
      
    });

    $(".testimonial-owl-carousel-about-page").owlCarousel({
        autoplay: true,
        slideSpeed:1000,
        items : 2,
        loop: true,
        nav:true,
        navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        margin: 30,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
                autoplay:true,
            },
            1199:{
                items:1,
                autoplay:true,
            },
            1200:{
                items:2,
                autoplay:true,
            },
        }
        
    });


    $('.owl-carousel-blog-section').owlCarousel({
        nav:true,
        //loop:true,
        slideBy:'page',
        rewind:false,
        responsive:{
            0:{
                items:1,
                autoplay:true,
                loop:true,
                center:true
            },
            480:{
                items:1,
                autoplay:true,
                loop:true,
                center:true
            },
            600:{
                items:1,
                autoplay:true,
                loop:true,
                center:true
            },
            767:{
                items:2,
                autoplay:true,
                loop:true,
            },
            1000:{
                items:2,
                autoplay:true,
                loop:true,
            },
            1199:{
                items:3,
                autoplay:true,
                center:true,
                loop:true
            }
        },
        smartSpeed:70,
        onInitialized:function(e){
            $(e.target).find('img').each(function(){
                if(this.complete){
                    $(this).closest('.mhn-inner').find('.loader-circle').hide();
                    $(this).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
                }else{
                    $(this).bind('load',function(e){
                        $(e.target).closest('.mhn-inner').find('.loader-circle').hide();
                        $(e.target).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
                    });
                }
            });
        },
        navText:['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>','<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>']
    });



    var $owl = $('.owl-carousel5');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:true,
            loop:true,
            dots:false,
            autoplay:true,
        },
        600:{
            items:2,
            nav:true,
            dots:true,
        },
        1000:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            autoplay:true,
        },

    }
      
    });
    





    
});


