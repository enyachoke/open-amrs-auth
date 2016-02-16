'use strict';

/**
 * @ngdoc service
 * @name openAmrsAuthApp.Patient
 * @description
 * # Patient
 * Factory in the openAmrsAuthApp.
 */
angular.module('openAmrsAuthApp')
  .factory('Patient', function($resource) {
    function getResource() {
      var v = 'custom:(uuid,identifiers:(identifier,uuid,identifierType:(uuid,name)),person:(uuid,gender,birthdate,dead,age,deathDate,preferredName:(givenName,middleName,familyName),';
      v = v + 'attributes,preferredAddress:(preferred,address1,address2,cityVillage,stateProvince,country,postalCode,countyDistrict,address3,address4,address5,address6)))';
      var r = $resource('https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/patient/:uuid', {
        uuid: '@uuid',
        v: v
      }, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
      return r;

    }

    return getResource();

  });
