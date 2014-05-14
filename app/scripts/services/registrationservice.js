'use strict';

angular.module('agletWebclientApp')
    .factory('RegistrationService', ['$resource',
        function ($resource) {
            return {
                usernameExists: $resource('http://localhost:8080/rest/register/usernameExists'),
                register: $resource('http://localhost:8080/rest/register/register')
            }
}]);