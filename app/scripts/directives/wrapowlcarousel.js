'use strict';

/**
 * @ngdoc directive
 * @name miamiApp.directive:headerNavBar
 * @description
 * # headerNavBar
 */
angular.module('miamiApp')
  .directive('wrapOwlcarousel', function () { 

 return { 

 restrict: 'E', 

 link: function (scope, element, attrs) { 

 var options = scope.$eval($(element).attr('data-options')); 

 $(element).owlCarousel(options); 

 } 

 }; 

}); 