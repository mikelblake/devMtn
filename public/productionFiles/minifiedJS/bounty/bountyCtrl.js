angular.module("groupProject").controller("bountyCtrl",["$scope","bountyService","bounties","currentUser","adminService",function(o,n,t,u,e){o.bounties=t.data,o.postBounty=function(n){e.postBounty(n),o.bounties.push(n)},o.modal2Shown=!1,o.toggleModal2=function(){o.modal2Shown=!o.modal2Shown}}]);