'use strict';

/**
 * @ngdoc function
 * @name openAmrsAuthApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the openAmrsAuthApp
 */
angular.module('openAmrsAuthApp')
  .controller('LoginCtrl', function ($scope,AuthService,$location) {
    $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function () {
      $location.path('/');
    }, function () {

    });
  };
  $scope.logout = function () {
    AuthService.logout().then(function () {
      //Session.destroy();
    }, function () {

    });
  };
  });
