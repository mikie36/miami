'use strict';

/**
 * @ngdoc directive
 * @name miamiApp.directive:headerNavBar
 * @description
 * # headerNavBar
 */
angular.module('miamiApp')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: `
                `,
      controller: function ($scope) {
        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }
    };
  });