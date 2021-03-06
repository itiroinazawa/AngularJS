'use strict'

angular.module(
  'spBlogger',
  [
    'ngCookies',
    'spBlogger.posts',
    'spBlogger.controllers',
    'spBlogger.directives',
    'spBlogger.filters',
    'ui.router',
    'ngResource',
    'spBlogger.services',
    'spBlogger.admin'
  ]
);

angular.module('spBlogger').value('version','V1.0');

angular.module('spBlogger').run(['$state', function($state) {
  $state.go('allPosts');
}]);
