angular.module("groupProject").service("userProfileService",["$http",function(t){this.getUser=function(e){return t({method:"GET",url:"http://localhost:8080/api/users/"+e})},this.updateUserInfo=function(e,o){return t({method:"PUT",url:"http://localhost:8080/api/users/"+e,data:o})},this.deleteAccount=function(e){return t({method:"DELETE",url:"http://localhost:8080/api/users/"+e})},this.getPosts=function(){return t({method:"GET",url:"http://localhost:8080/api/posts/approved"})},this.getBounties=function(e){return t({method:"GET",url:"http://localhost:8080/api/users/"+e+"/bounties"})},this.removeFavorite=function(e,o){return t({method:"DELETE",url:"http://localhost:8080/api/users/"+e,data:{favorites:o}})},this.removeWatchLater=function(e,o){return t({method:"DELETE",url:"http://localhost:8080/api/users/"+e,data:{watchLater:o}})}}]);