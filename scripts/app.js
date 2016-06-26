'use strict';

/**
 * @ngdoc overview
 * @name mainCdfApp
 * @description
 * # mainCdfApp
 *
 * Main module of the application.
 */
angular
    .module('appName', [
        'ngRoute',
        'pascalprecht.translate'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
        $translateProvider
            .useStaticFilesLoader({
                prefix: '/translations/',
                suffix: '.json'
            })
            .preferredLanguage('fr')
            .useMissingTranslationHandlerLog()
    });
