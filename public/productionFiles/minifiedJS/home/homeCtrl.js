angular.module("groupProject").controller("homeCtrl",["$scope","homeService","getPosts","currentUser","$stateParams",function(o,e,t,n,a){o.modalShown=!1,o.admin=n.isAdmin,o.posts=t.data,o.upVoteDownVote=function(t,n){e.upVoteDownVote(t,n).success(function(e){var t;o.posts.map(function(o,n){o._id===e._id&&(t=n)}),o.posts[t]=e})},o.addToFavorites=function(o){e.addToFavorites(o)},o.addToviewLater=function(o){e.addToviewLater(o)},o.modalShown=!1,o.toggleModal=function(){o.modalShown=!o.modalShown,o.newPost=""},o.deletePost=function(t,n){e.deletePost(t).then(function(){o.posts.splice(n,1)})};var s=parseInt(a.count,10);s>10?(o.prevPage="home({count:"+(s-10)+"})",o.nextPage="home({count:"+(s+10)+"})"):(o.prevPage="home({count: 0})",o.nextPage="home({count:"+(s+10)+"})")}]);