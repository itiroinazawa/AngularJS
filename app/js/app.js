'use strict';
angular.module('myApp', ['myApp.controllers', 'ui.router' ]);

angular.module('myApp').config(function($stateProvider,$urlRouterProvider,$locationProvider){ 
    $stateProvider
        .state('/', {
            url: '/',
            controller:'Controller0',
            templateUrl:'/app/index.html'
        })
        .state('view1',{
            url: '/view1',
            controller:'Controller1',
            templateUrl:'/app/views/partials/view1.html'
        })
        .state('view2',{
            url: '/view2/:firstname/:lastname',
            controller:'Controller2',
            resolve:{
                names: function(){
                    return ['Misko','Vojta','Brad'];
                }
            },
            templateUrl: '/app/views/partials/view2.html'
        });
        
    $locationProvider.html5Mode(true);
    /*$urlRouterProvider.otherwise('/view1'); */
        
});