angular.module("groupProject").service("userProfileService",["$http","LoginService",function(t,e){this.user={},this.getUser=function(e){return t({method:"GET",url:"http://localhost:8080/api/users/"+e})},this.updateUserInfo=function(e,r){return t({method:"PUT",url:"http://localhost:8080/api/users/"+e,data:r})},this.deleteAccount=function(e){return t({method:"DELETE",url:"http://localhost:8080/api/users/"+e})},this.getBounties=function(e){return t({method:"GET",url:"http://localhost:8080/api/users/"+e+"/bounties"})},this.removeFavorite=function(e,r){return e=user,t({method:"DELETE",url:"http://localhost:8080/api/users/"+e+"/favorites/"+r})},this.removeWatchLater=function(e,r){return e=user,t({method:"DELETE",url:"http://localhost:8080/api/users/"+e+"/watchLater/"+r})}}]);