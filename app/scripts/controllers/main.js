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

  });
