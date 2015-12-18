angular.module('spBlogger.admin.controllers',[]).controller('PostCreationController',['$scope','$state','Post',function($scope,$state,Post){
    $scope.post=new Post(); 
    $scope.buttonText="Create"; // Set initial label for button
    $scope.savePost=function(){
        $scope.buttonText="Saving. . .";                            
        $scope.post.permalink=angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
        $scope.post.$save(function(){
            $state.go('admin.postViewAll'); 
        });
    }
}]);

angular.module('spBlogger.admin.controllers').controller('PostUpdateController'['$scope','Post','$stateParams','$state',function($scope,Post,$stateParams,$state){
    $scope.post=Post.get({id:$stateParams.id}); //Obtain the Post
    $scope.buttonText="Update"; //Set initial label for button
    $scope.updatePost=function(){
        $scope.buttonText="Updating. . ."; //Once clicked change
        $scope.post.$update(function(){
            $state.go('admin.postViewAll');                                                                             
        });
    }
}]);

angular.module('spBlogger.admin.controllers').controller('PostListController',['$scope','Post','popupService','$state',function($scope,Post,popupService,$state){
    $scope.posts=Post.query(); // Obtain all the posts from backend
    $scope.deletePost=function(post){
        if (popupService.showPopup('Really delete this?')) {             
            post.$delete(function() {
                $state.go('admin.postViewAll',undefined,{ 
                    reload:true
                });
            });
        }
    }
}]);

