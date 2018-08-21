(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".client-testimonial-carousel").owlCarousel({
        	items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            autoplaySpeed:1200,


        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	