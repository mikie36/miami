'use strict';

/**
 * @ngdoc function
 * @name miamiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the miamiApp
 */
angular.module('miamiApp')
  .controller('GalleryCtrl', function ($scope, Lightbox) {

  	$scope.images = [
    {
      'url': 'images/gallery1/1.jpg',
      'thumbUrl': 'images/gallery1/1.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/gallery1/2.jpg',
      'thumbUrl': 'images/gallery1/2.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    }
    ];

    $scope.imagesOfCanne = [
    {
      'url': 'images/canne/1.jpg',
      'thumbUrl': 'images/Canne/1.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/2.jpg',
      'thumbUrl': 'images/canne/2.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/3.jpg',
      'thumbUrl': 'images/canne/3.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/4.jpg',
      'thumbUrl': 'images/canne/4.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/5.jpg',
      'thumbUrl': 'images/canne/5.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/6.jpg',
      'thumbUrl': 'images/canne/6.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/7.jpg',
      'thumbUrl': 'images/canne/7.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/8.jpg',
      'thumbUrl': 'images/canne/8.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'images/canne/9.jpg',
      'thumbUrl': 'images/canne/9.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    }
    ];

    $scope.imagesOfExhibition = [
    {
      'url': 'images/exhibition/1.jpg',
      'thumbUrl': 'images/exhibition/1.jpg'
    },
    {
      'url': 'images/exhibition/2.jpg',
      'thumbUrl': 'images/exhibition/2.jpg'
    },
    {
      'url': 'images/exhibition/4.jpg',
      'thumbUrl': 'images/exhibition/4.jpg'
    },
    {
      'url': 'images/exhibition/5.jpg',
      'thumbUrl': 'images/exhibition/5.jpg'
    },
    {
      'url': 'images/exhibition/6.jpg',
      'thumbUrl': 'images/exhibition/6.jpg'
    },
    {
      'url': 'images/exhibition/7.jpg',
      'thumbUrl': 'images/exhibition/7.jpg'
    },
    {
      'url': 'images/exhibition/8.jpg',
      'thumbUrl': 'images/exhibition/8.jpg'
    },
    {
      'url': 'images/exhibition/9.jpg',
      'thumbUrl': 'images/exhibition/9.jpg'
    }
    ];

    $scope.imagesOfApparition = [
    {
      'url': 'images/apparition/1.jpg',
      'thumbUrl': 'images/apparition/1.jpg'
    },
    {
      'url': 'images/apparition/2.jpg',
      'thumbUrl': 'images/apparition/2.jpg'
    },
    {
      'url': 'images/apparition/3.jpg',
      'thumbUrl': 'images/apparition/3.jpg'
    },
    {
      'url': 'images/apparition/4.jpg',
      'thumbUrl': 'images/apparition/4.jpg'
    },
    {
      'url': 'images/apparition/5.jpg',
      'thumbUrl': 'images/apparition/5.jpg'
    },
    {
      'url': 'images/apparition/6.jpg',
      'thumbUrl': 'images/apparition/6.jpg'
    },
    {
      'url': 'images/apparition/7.jpg',
      'thumbUrl': 'images/apparition/7.jpg'
    },
    {
      'url': 'images/apparition/8.jpg',
      'thumbUrl': 'images/apparition/8.jpg'
    }
    ];
    

    $scope.imagesOfVictoria = [
    {
      'url': 'images/victoria/1.jpg',
      'thumbUrl': 'images/victoria/1.jpg'
    },
    {
      'url': 'images/victoria/2.jpg',
      'thumbUrl': 'images/victoria/2.jpg'
    },
    {
      'url': 'images/victoria/3.jpg',
      'thumbUrl': 'images/victoria/3.jpg'
    },
    {
      'url': 'images/victoria/4.jpg',
      'thumbUrl': 'images/victoria/4.jpg'
    },
    {
      'url': 'images/victoria/5.jpg',
      'thumbUrl': 'images/victoria/5.jpg'
    },
    {
      'url': 'images/victoria/6.jpg',
      'thumbUrl': 'images/victoria/6.jpg'
    },
    {
      'url': 'images/victoria/7.jpg',
      'thumbUrl': 'images/victoria/7.jpg'
    },
    {
      'url': 'images/victoria/8.jpg',
      'thumbUrl': 'images/victoria/8.jpg'
    },
    {
      'url': 'images/victoria/9.jpg',
      'thumbUrl': 'images/victoria/9.jpg'
    },
    {
      'url': 'images/victoria/10.jpg',
      'thumbUrl': 'images/victoria/10.jpg'
    }
    ];

    $scope.openLightboxModal = function () {
    	Lightbox.openModal($scope.images, 0);
  	};
    


    $(".owl-carousel").owlCarousel({
	      autoPlay: 2000,
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

   //  .on('click', '.owl-item', function(e) {
	  //   var carousel = $('.owl-carousel').data('owl.carousel');
	  //   e.preventDefault();
	  //   var n = $(this).index();
	  //   console.log(n);
	  //   Lightbox.openModal($scope.images, n);
	  //   carousel.to(carousel.relative(n));
	  // });


	  $(".canne-clik").on('click', '.owl-item', function(e) {
	    var carousel = $('.canne-clik').data('canne-clik');
	    e.preventDefault();
	    var n = $(this).index();
	    console.log(n);
	    Lightbox.openModal($scope.imagesOfCanne, n);
	    //carousel.to(carousel.relative(n));
	  });

	  $(".exhibition-clik").on('click', '.owl-item', function(e) {
	    var carousel = $('.exhibition-clik').data('exhibition-clik');
	    e.preventDefault();
	    var n = $(this).index();
	    console.log(n);
	    Lightbox.openModal($scope.imagesOfExhibition, n);
	    //carousel.to(carousel.relative(n));
	  });

	  $(".apparition-clik").on('click', '.owl-item', function(e) {
	    var carousel = $('.apparition-clik').data('apparition-clik');
	    e.preventDefault();
	    var n = $(this).index();
	    console.log(n);
	    Lightbox.openModal($scope.imagesOfApparition, n);
	    //carousel.to(carousel.relative(n));
	  });

	  $(".victoria-clik").on('click', '.owl-item', function(e) {
	    var carousel = $('.victoria-clik').data('victoria-clik');
	    e.preventDefault();
	    var n = $(this).index();
	    console.log(n);
	    Lightbox.openModal($scope.imagesOfVictoria, n);
	    //carousel.to(carousel.relative(n));
	  });


	  



	  


	   $(".owl-carousel-canne").owlCarousel({
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
	  }).on('click', '.owl-item', function(e) {
	    var carousel = $('.owl-carousel-canne').data('owl-carousel-canne');
	    e.preventDefault();
	    var n = $(this).index();
	    console.log(n);
	    Lightbox.openModal($scope.imagesOfCanne, n);
	    carousel.to(carousel.relative(n));
	  });
  });
