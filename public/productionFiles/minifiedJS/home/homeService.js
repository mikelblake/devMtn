angular.module("groupProject").service("homeService",["$http","LoginService",function(t,o){var e=o.currentUser();this.getPosts=function(){return t({method:"GET",url:"http://localhost:8080/api/posts/approved"})},this.getCategoryPosts=function(o){return t({method:"GET",url:"http://localhost:8080/api/posts/cats/"+o+"/approved"})},this.addToFavorites=function(o){return userId=e,t({method:"PUT",url:"http://localhost:8080/api/users/"+userId._id+"/favorites/"+o})},this.addToWatchLater=function(o){return userId=e,t({method:"PUT",url:"http://localhost:8080/api/users/"+e._id+"/watchLater/"+o})},this.upVoteDownVote=function(o,e){return t({method:"PUT",url:"http://localhost:8080/api/posts/"+o,data:{votes:e}})}}]);