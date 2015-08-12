angular.module('groupProject')
.service('homeService', ['$http', 'LoginService', function($http, LoginService) {

    var user = LoginService.currentUser();
    var lastCount = 0;
    this.lastCount = function(){return lastCount;};
    this.setCount = function(count){lastCount = count;};

    this.getPosts = function(count) {
        pageCount = count;
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved?count=' + count
        });
    };

    this.getCategoryPosts = function(cat) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/cats/' + cat + '/approved'
        });
    };

    this.getCategoryPostsByTag = function(cat, tag) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/cats/' + cat + '/tag/' + tag
        });
    };

    this.addToFavorites = function(postId, userId) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId + '/favorites/' + postId
        });
    };

    this.addToviewLater = function(postId, userId) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId + '/viewLater/' + postId
        });
    };

    this.upVoteDownVote = function(postId, updatedVote){
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/posts/' + postId,
            data: {votes: updatedVote}
        });
    };

    this.deletePost = function(postId) {
        console.log(postId);
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/posts/' + postId
        });
    };

}]);
