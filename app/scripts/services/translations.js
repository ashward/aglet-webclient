'use strict';

angular.module('agletWebclientApp')
    .config(['$translateProvider',
        function ($translateProvider) {
            // add translation table
            $translateProvider
                .translations('en', {
                    'registration': {
                        'title': 'Register an account',
                        'fields': {
                            'username': 'Choose a username',
                            'name' : 'What\'s your name?',
                            'password' : 'Choose yourself a password',
                            'submit' : 'Register'
                        },
                        'errors': {
                            'username-exists': 'Unfortunately someone\'s already nabbed that username',
                            'username-suggestions-header': 'Why not try one of these'
                        }
                    },
                    'user': {
                        'fields': {
                            'username': 'username'
                        }
                    }
                })
                .preferredLanguage('en');
}]);