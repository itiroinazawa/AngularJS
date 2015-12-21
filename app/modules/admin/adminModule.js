'use strict';

angular.module(
  'spBlogger.admin',
  [
    'ngCookies',
    'spBlogger.admin.controllers',
    'spBlogger.admin.directives',
    'spBlogger.admin.services',
    'spBlogger.admin.filters',
    'ui.router'
  ]
);

angular.module('spBlogger.admin').config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  
    $stateProvider
        .state('login',{
            url:'/login',
            controller:'LoginController',
            templateUrl:'modules/admin/views/login.html'
        })
        .state('admin', {
            url: '/admin',
            controller: 'AdminController',
            templateUrl: 'app/modules/admin/views/admin-home.html'
        })
        .state('admin.postNew', {
            url: '/posts/new',
            controller: 'PostCreationController',
            templateUrl: 'app/modules/admin/views/admin-new-post.html'
        })
        .state('admin.postUpdate', {
            url: '/posts/:id/edit',
            controller: 'PostUpdateController',
            templateUrl: 'app/modules/admin/views/admin-update-post.html'
        })
        .state('admin.postViewAll', {
            url: '',
            controller: 'PostListController',
            templateUrl: 'app/modules/admin/views/admin-all-posts.html' 
        });
    
    $locationProvider.html5Mode(
    {
      enabled: true,
      requireBase: false
    });
}]);