'use strict';

describe('Service: Registerservice', function () {

  // load the service's module
  beforeEach(module('agletWebclientApp'));

  // instantiate service
  var Registerservice;
  beforeEach(inject(function (_Registerservice_) {
    Registerservice = _Registerservice_;
  }));

  it('should do something', function () {
    expect(!!Registerservice).toBe(true);
  });

});
