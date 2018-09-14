(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slides").owlCarousel({
        	items: 1,
        	loop: true,
        	nav: true,
        	dots: true,
        	autoplay: true,
        	animateOut: 'fadeOut',
        	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        	smartSpeed: 200,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	