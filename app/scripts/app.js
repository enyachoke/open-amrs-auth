'use strict';

/**
 * @ngdoc overview
 * @name openAmrsAuthApp
 * @description
 * # openAmrsAuthApp
 *
 * Main module of the application.
 */
angular
  .module('openAmrsAuthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64',
    'ngStorage'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          login: function(AuthService) {
            return AuthService.isAuthenticated();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        resolve: {
          login: function(AuthService) {
            return AuthService.isAuthenticated();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'Login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
