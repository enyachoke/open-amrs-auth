'use strict';

/**
 * @ngdoc service
 * @name openAmrsAuthApp.CurrentUser
 * @description
 * # CurrentUser
 * Factory in the openAmrsAuthApp.
 */
angular.module('openAmrsAuthApp')
  .factory('CurUser', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
