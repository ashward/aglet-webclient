'use strict';

angular.module('agletWebclientApp')
    .factory('RegistrationService', ['$resource',
        function ($resource) {
            this.usernameExists = function () {
                return $resource('http://localhost:8080/rest/register/usernameExists', {}, {
                    query: {
                        method: 'GET'
                    }
                });
            }
        }
]);