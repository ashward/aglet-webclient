'use strict';

describe('Service: Authservice', function () {

  // load the service's module
  beforeEach(module('agletWebclientApp'));

  // instantiate service
  var Authservice;
  beforeEach(inject(function (_Authservice_) {
    Authservice = _Authservice_;
  }));

  it('should do something', function () {
    expect(!!Authservice).toBe(true);
  });

});
