'use strict';

/**
 * @ngdoc function
 * @name openAmrsAuthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openAmrsAuthApp
 */
angular.module('openAmrsAuthApp')
  .controller('MainCtrl', function (Patient,PatientModel,$scope,$rootScope) {
    $scope.patients= [];
    $rootScope.$on('event:auth-loginRequired', function() {
			console.log('Please login');
			});
    Patient.query({q:'mika mika mika'}, false, function(data) {
      //console.log(data.results);
      angular.forEach(data.results, function(value, key) {
        var p = new PatientModel.patient(value);
        //console.log('Attedmted'+patientUuid);
        //console.log("New UUUID"+value.person.uuid+"d"+value.person.display);
        $scope.patients.push(p);
    });
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
