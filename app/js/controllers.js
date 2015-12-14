'use strict';
angular.module('myApp.controllers', []).controller('Controller1', function($scope, $location, $state) {
    $scope.loadView2 = function() {        
        $state.go('view2', {
            firstname: $scope.firstname,
            lastname: $scope.lastname
        });
    }
});
angular.module('myApp.controllers').controller('Controller2', function ($scope, $stateParams, names) {
    $scope.firstname=$stateParams.firstname;
    $scope.lastname=$stateParams.lastname;
    $scope.names=names;
});