angular.module('miamiApp')
  .directive('navBar', function () {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      template: ''+

            '<div ng-repeat="languageName in localesDisplayNames">'+
              '<img class="pull-right"  ng-src="images/flags/{{languageName}}.png" ng-click="changeLanguage(languageName)" alt="{{languageName}} flag">'+
            '</div>'+

      '',
      controller: function ($scope) {
        $scope.currentNavItem = 'page1';
      }
    };
  });