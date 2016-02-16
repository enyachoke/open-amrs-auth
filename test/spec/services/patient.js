'use strict';

describe('Service: Patient', function () {

  // load the service's module
  beforeEach(module('openAmrsAuthApp'));

  // instantiate service
  var Patient;
  beforeEach(inject(function (_Patient_) {
    Patient = _Patient_;
  }));

  it('should do something', function () {
    expect(!!Patient).toBe(true);
  });

});
