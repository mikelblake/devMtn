angular.module("groupProject").service("addContentService",["$http","LoginService",function(t,e){var r=e.currentUser();this.addPost=function(e){return e.user=r._id,t({method:"POST",url:"http://localhost:8080/api/posts",data:e}).then(function(r){return t({method:"PUT",url:"http://localhost:8080/api/users/"+e.user+"/posts/"+r.data._id})})}}]);