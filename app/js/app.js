'use strict';

angular.module('myApp', ['myApp.controllers', 'ngRoute']);

angular.module('myApp').config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'Controller1',
            templateUrl: 'views/partials/view1.html'
        })
        .when('/view2/:firstname/:lastname', {
            controller: 'Controller2',
            templateUrl: 'views/partials/view2.html',
            resolve: {
                names: function () {
                    //typically you will use a service to retrieve values from the server here
                    return ['Misko', 'Vojta', 'Brad']; //this is used as dependency value
                }
            }
        }).otherwise({
            redirectTo: '/view1'
        });
    $locationProvider.html5Mode(true);
});