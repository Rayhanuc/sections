(function ($) {
	"use strict";

    jQuery(document).ready(function($){





        $(".product-list").masonry();
        $(".homepage-slides").owlCarousel({
        	items: 1,
        	loop: true,
        	nav: true,
        	autoplay: false,
        	dots: false,
        	navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i> "],
        });

        $(".product-promotions").owlCarousel({
        	items: 1,
        	loop: true,
        	nav: false,
        	autoplay: false,
        	dots: true,
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	