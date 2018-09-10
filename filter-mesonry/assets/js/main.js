(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        

        $(".projects-titles li").on('click', function(){

        	$(".projects-titles li").removeClass("active");
        	$(this).addClass("active");

        	var selector = $(this).attr('data-filter');
        	$(".project-list").isotope({
        		filter: selector
        	});
        });

    });


    jQuery(window).load(function(){

    	jQuery(".project-list").isotope();
        
    });


}(jQuery));	