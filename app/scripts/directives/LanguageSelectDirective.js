/**
 * @ngdoc function
 * @name translateApp.directive:LanguageSelectDirective
 * @description
 * # LanguageSelectDirective
 * Directive to append language select and set its view and behavior
 */
angular.module('miamiApp')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+
        //'<div class="language-select" ng-if="visible">'+
          //'<label>'+
            //'{{"directives.language-select.Language" | translate}}:'+
            '<div class="col-md-12 languagePicker">' +
              '<div ng-repeat="languageName in localesDisplayNames">'+
                '<img class="pull-right flags"  ng-src="images/flags/{{languageName}}.png" ng-click="changeLanguage(languageName)" alt="{{languageName}} flag">'+
              '</div>'+
            '</div>' +
            //'<select ng-model="currentLocaleDisplayName"'+
            //  'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
            //  'ng-change="changeLanguage(currentLocaleDisplayName)">'+
           // '</select>'+
         // '</label>'+
       // '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
        $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }
    };
  });
