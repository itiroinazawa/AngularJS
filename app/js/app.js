'use strict';

angular.module('myApp', ['myApp.controllers', 'ngRoute']);

angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'Controller1',
            templateUrl: 'views/partials/view1.html'
        })
        .when('/view2', {
            controller: 'Controller2',
            templateUrl: 'views/partials/view2.html'
        });
});

