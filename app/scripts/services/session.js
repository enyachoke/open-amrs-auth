'use strict';

/**
 * @ngdoc service
 * @name openAmrsAuthApp.session
 * @description
 * # session
 * Service in the openAmrsAuthApp.
 */
angular.module('openAmrsAuthApp')
  .service('Session', function($sessionStorage) {
    this.create = function(user) {
      $sessionStorage.user = user;
    };
    this.get = function() {
      return $sessionStorage.user;
    };
    this.destroy = function() {
      $sessionStorage.$reset();
    };
  });
