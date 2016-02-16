'use strict';

/**
 * @ngdoc service
 * @name openAmrsAuthApp.AuthService
 * @description
 * # AuthService
 * Factory in the openAmrsAuthApp.
 */
angular.module('openAmrsAuthApp')
  .factory('AuthService', function (Session,$http,$base64,$q, $timeout,$location, $rootScope) {
    var authService = {};

  authService.login = function (credentials) {
    $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(credentials.username + ':' + credentials.password);
    return $http
      .get('https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/session')
      .then(function (res) {
         delete $http.defaults.headers.common.Authorization;
        Session.create(res.data);
        return res.data.user;
      });
  };
  authService.logout = function () {
    return $http
      .delete('https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/session')
      .then(function (res) {
        return res.data.user;
      });
  };
  authService.isAuthenticated =function() {
    var deferred;
    deferred = $q.defer();
    if ($rootScope.user) {
      deferred.resolve();
    } else {
      $http.get('https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/session').success(function(res) {
        if (res.authenticated) {
          return $timeout(deferred.resolve);
        } else {
          $timeout(deferred.reject);
          return $location.url('/login');
        }
      }).error(function() {
        $timeout(deferred.reject);
        return $location.url('/login');
      });
    }
    return deferred.promise;
  };

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  return authService;
  });
