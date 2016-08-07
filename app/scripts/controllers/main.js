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

  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });


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
