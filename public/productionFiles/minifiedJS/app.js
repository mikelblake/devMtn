angular.module("groupProject",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){var n=function(t,e){t.getSessionUser().then(function(){t.currentUser()||e.go("login")})};e.otherwise("/login"),t.state("login",{url:"/login",templateUrl:"app/Login/LoginTmpl.html",controller:"LoginCtrl",resolve:{sessionLogin:function(t,e){t.getSessionUser().then(function(n){return t.currentUser()&&e.go("home"),n})}}}).state("home",{url:"/home",templateUrl:"app/home/homeTmpl.html",controller:"homeCtrl",resolve:{isLoggedIn:n,getPosts:function(t){return t.getPosts().then(function(t){return console.log(t),t})}}}).state("cat",{url:"/home/:cat",templateUrl:"app/home/homeTmpl.html",controller:"contentCategoriesCtrl",resolve:{isLoggedIn:n,getCategoryPosts:function(t,e){return t.getCategoryPosts(e.cat).then(function(t){return t})}}}).state("profile",{url:"/profile",templateUrl:"app/userProfile/userProfileTmpl.html",controller:"userProfileCtrl",resolve:{isLoggedIn:n,getUser:function(t){return t.getSessionUser().then(function(t){return t})}}}).state("admin",{url:"/admin",templateUrl:"app/admin/adminTmpl.html",controller:"adminCtrl",resolve:{isLoggedIn:function(t,e){t.getSessionUser().then(function(){var n=t.currentUser();n?n.isAdmin||e.go("home"):e.go("login")})},getPosts:function(t){return t.getPosts().then(function(t){return t})}}}).state("bounty",{url:"/bounties",templateUrl:"app/bounty/bountyTmpl.html",controller:"bountyCtrl",resolve:{isLoggedIn:n,bounties:function(t){return t.getBounties().then(function(t){return t})}}}).state("bountyId",{url:"/bounties/:_id",templateUrl:"app/bounty/bountyIdTmpl.html",controller:"bountyIdCtrl",resolve:{isLoggedIn:n,getBountyId:function(t,e){return t.getBountyId(e._id).then(function(t){return t})}}})}]);