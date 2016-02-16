'use strict';

describe('Service: addbasic', function () {

  // load the service's module
  beforeEach(module('openAmrsAuthApp'));

  // instantiate service
  var addbasic;
  beforeEach(inject(function (_addbasic_) {
    addbasic = _addbasic_;
  }));

  it('should do something', function () {
    expect(!!addbasic).toBe(true);
  });

});
