'use strict';

angular.module('agletWebclientApp')
    .controller('LoginCtrl', function ($scope, $window, AuthService) {
        $scope.auth = {
            username: null,
            password: null
        };
        $scope.submit = function (auth) {
            var data = {
                'username': auth.username,
                'password': auth.password
            };

            AuthService.login.login(data, function (json) {
                $window.sessionStorage.token = json.token;
                alert("Logged in! Yay!");
            }, function (httpResponse) {
                alert("Login failed");
            });
        };
    });