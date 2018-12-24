(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".thme-1-select").on('click', function(){
            $("body").addClass("theme-1").removeClass("theme-2");

            return false;
        });

        $(".thme-2-select").on('click', function(){
            $("body").addClass("theme-2").removeClass("theme-1");

            $("html").css("height", "160%");

            return false;
        });
        
    });

    jQuery(window).load(function(){

    });

}(jQuery));	