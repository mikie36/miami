'use strict';

/**
 * @ngdoc function
 * @name miamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miamiApp
 */
angular.module('miamiApp')
  .controller('MainCtrl', function ($scope, LocaleService) {

        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();




    //     $(document).ready(function() {
     
	   //    $("#owl-demo").owlCarousel({
	     
	   //        navigation : false, // Show next and prev buttons
	   //        slideSpeed : 500,
			 //  autoPlay : 3000,
	   //        paginationSpeed : 400,
	   //        singleItem:true
	     
	   //        // "singleItem:true" is a shortcut for:
	   //        // items : 1, 
	   //        // itemsDesktop : false,
	   //        // itemsDesktopSmall : false,
	   //        // itemsTablet: false,
	   //        // itemsMobile : false
	     
	   //    });
     
    // });
    $(".owl-carousel").owlCarousel({
	      autoPlay: 3000,
	      items : 4, // THIS IS IMPORTANT
	      responsive : {
	            480 : { items : 3  }, // from zero to 480 screen width 4 items
	            768 : { items : 4  }, // from 480 screen widthto 768 6 items
	            1024 : { items : 5 }, // from 768 screen width to 1024 8 items
	            1366 : { items : 6 }
	        },
	      lazyLoad:true,

		    margin:10
	  });

	$(document).ready(function(){
	  // Add smooth scrolling to all links in navbar + footer link
	  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 900, function(){

	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	    });
	  });
	})


  });
