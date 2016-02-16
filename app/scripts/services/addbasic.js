'use strict';

/**
 * @ngdoc service
 * @name openAmrsAuthApp.addbasic
 * @description
 * # addbasic
 * Factory in the openAmrsAuthApp.
 */
angular.module('openAmrsAuthApp')
  .factory('addbasic', function ($rootScope,$base64,$http) {
    return {
     request: function (config)
     {
       config.headers = config.headers || {};
       delete $http.defaults.headers.common.Authorization;
       return config;
     },
     responseError:function(response) {
        if (response.status === 401) {
          console.log('unauthorized');
            $rootScope.$broadcast('unauthorized');
        }
        return response;
    }
    };
  });
