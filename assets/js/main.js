(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $('#progres-productone').circleProgress({
            value: 0.6,
            size: 200,
            fill: '#16a05d',
            thickness: 5,
          }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.percentis').html(Math.round(90 * progress) + '<i>%</i>');
          });
        $('#progres-producttwo').circleProgress({
            value: 0.6,
            size: 200,
            fill: '#dc4e41',
            thickness: 5,
          }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.percentis').html(Math.round(75 * progress) + '<i>%</i>');
          });
        $('#progres-productthree').circleProgress({
            value: 0.6,
            size: 200,
            fill: '#ffce45',
            thickness: 5,
          }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.percentis').html(Math.round(50 * progress) + '<i>%</i>');
          });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	