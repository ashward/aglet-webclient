'use strict';

angular.module('agletWebclientApp')
  .controller('RegisterCtrl', ["$scope", 'RegistrationService', function ($scope, registrationService) {
    $scope.registration = {
        username: null
    };
      
      $scope.usernameExists = {};
      
      $scope.$watch("user.username", function(newValue) {
          $scope.usernameExists.result = registrationService.usernameExists.get({username: newValue});
      });
      
      $scope.onSubmit = function(user, account) {
          var data = {
              'user': user,
              'account': account
          };
          
          registrationService.register.save(data, function() {
              alert("Registered");
          })
      }
  }]);
