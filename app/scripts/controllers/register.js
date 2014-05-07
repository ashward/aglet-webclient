'use strict';

angular.module('agletWebclientApp')
  .controller('RegisterCtrl', ["$scope", 'RegistrationService', function ($scope, registrationService) {
    $scope.registration = {
        username: null
    };
      
      $scope.usernameExists = {};
      
      $scope.$watch("registration.username", function(newValue) {
          registrationService.usernameExists.get({username: newValue}, function(data) {
              $scope.usernameExists.result = data;
          });
      });
      
      $scope.onSubmit = function(registration) {
          
      }
  }]);
