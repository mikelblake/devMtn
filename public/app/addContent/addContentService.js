angular.module('groupProject')

.service('addContentService', ['$http', 'LoginService', function($http, LoginService){



	var currentUser = LoginService.currentUser();

	this.addPost = function(newPost) {
		newPost.thumbnail = "assets/" + newPost.cat + ".png";

		newPost.user = currentUser._id;
		//newPost.bounty = bounty._id;
	    return $http({
	      method: 'POST',
	      url: 'http://localhost:8080/api/posts',
	      data: newPost
  		}).then(function(resp) {
			return $http({
				method: 'PUT',
				url: 'http://localhost:8080/api/users/' + newPost.user + '/posts/' + resp.data._id
	  		});
  		});
	};

}]);
