<<<<<<< HEAD
angular.module("groupProject").controller("adminCtrl",["$scope","adminService","getPosts",function(o,t,n){o.modalShown=!1,o.toggleModal=function(){o.modalShown=!o.modalShown},o.posts=n.data,o.approvePost=function(o){t.approvePost(o)},o.discardPost=function(o){t.discardPost(o)},o.editPost=function(o){t.editPost(o)},o.clearIt=function(){console.log(o.show)}}]);
=======
angular.module("groupProject").controller("adminCtrl",["$scope","adminService","getPosts",function(o,t,n){o.modalShown=!1,o.toggleModal=function(){o.modalShown=!o.modalShown},o.modal2Shown=!1,o.toggleModal2=function(){o.modal2Shown=!o.modal2Shown},o.posts=n.data,o.approvePost=function(o){t.approvePost(o)},o.discardPost=function(o){t.discardPost(o)},o.editPost=function(o){t.editPost(o)},o.clearIt=function(){console.log(o.show)},o.postBounty=function(n){t.postBounty(o.bounty)}}]);
>>>>>>> f23c510ec373ab552fad47c506b2ae9b73d87871
