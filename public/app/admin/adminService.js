angular.module('groupProject')

.service('adminService', ['$http', 'LoginService', function($http, LoginService){

	var user = LoginService.currentUser();

	this.getPosts = function(newPost) {
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/posts/pending'
    });
  };

  this.approvePost = function(id){
	  userId = user;
  	return $http({
  		method: 'PUT',
  		url: 'http://localhost:8080/api/posts/' + id,
  		data: {
			isApproved: true,
			user: user._id
		}
  	});
  };

  this.approveBountyPost = function(id) {
	  bountyId = bounty;
	  return $http({
		  method: 'GET',
		  url: 'http://localhost:8080/api/users/' + userId._id + '/bounties/' + bountyId._id
	  });
  };

  this.discardPost = function(id){
  	return $http({
  		method: 'DELETE',
  		url: 'http://localhost:8080/api/posts/' + id
  	});
  };

  this.editPost = function(post){
  	return $http({
  		method: 'PUT',
  		url: 'http://localhost:8080/api/posts/' + post._id,
  		data: post
  	});
  };

  this.postBounty = function(bounty){
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/api/bounties',
      data: bounty
    });
  };
}]);
