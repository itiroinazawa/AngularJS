'use strict'

angular.module('spBlogger.posts.directives',[]).directive('spbComments',function(Post){
    return {
        restrict:'AEC',
        scope:{
            postInstance:'='
        },
        replace:true,
        link:function(scope,elem,attrs){
            scope.saveComment=function(){
                var postID=scope.postInstance._id,
                    savedPostInstance={};
                scope.comment.datePublished=new Date(); 
                angular.copy(scope.postInstance,savedPostInstance); 
                savedPostInstance.comments.unshift(scope.comment); 
                scope.postInstance.comments.unshift(scope.comment);
                scope.comment={}; // clear the comment
                savedPostInstance.$update(); //Now update `savedPostInstance`
            }
        },
        templateUrl:'app/modules/posts/views/comments.html'
    }
});