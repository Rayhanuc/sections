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
        	navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        });

        $(".product-promotions").owlCarousel({
        	items: 1,
        	loop: true,
        	nav: false,
        	autoplay: false,
        	dots: true,
        });

        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	