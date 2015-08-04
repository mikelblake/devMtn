angular.module('groupProject', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    var isLoggedIn = function(LoginService, $state){
      LoginService.getSessionUser().then(function(){
        if (!LoginService.currentUser()) $state.go('login');
      })
    };

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'app/Login/LoginTmpl.html',
        controller: 'LoginCtrl',
        resolve: {
          sessionLogin: function(LoginService, $state){
            LoginService.getSessionUser().then(function(user){
              if (LoginService.currentUser()) $state.go('home');
              return user;
            });
          }
        }
    })
    .state('home', {
        url: '/home',
        templateUrl: 'app/contentLanding/contentLandingTmpl.html',
        controller: 'contentLandingCtrl',
        resolve: {
          isLoggedIn: isLoggedIn,
          // isLoggedIn: function(LoginService){
          //   if (!LoginService.currentUser()) $state.go('login');
          // },
          getPosts: function(contentLandingService) {
              return contentLandingService.getPosts().then(function(postData) {
              return postData;
 		       });
          }
        }
    })
    .state('cat', {
        url: '/home/:cat',
        templateUrl: 'app/contentLanding/contentLandingTmpl.html',
        controller: 'contentCategoriesCtrl',
        resolve: {
          isLoggedIn: isLoggedIn,
          getCategoryPosts: function(contentLandingService, $stateParams) {
          return contentLandingService.getCategoryPosts($stateParams.cat).then(function(resp) {
          return resp;
              });
          }
        }
    })
    .state('profile',  {
        url: '/profile',
        templateUrl: 'app/userProfile/userProfileTmpl.html',
        controller: 'userProfileCtrl',
        resolve: {
          isLoggedIn: isLoggedIn,
            getUser: function(LoginService) {
                return LoginService.getSessionUser().then(function(resp) {
                    return resp;
                });
            }

        }
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/adminTmpl.html',
        controller: 'adminCtrl',
        resolve: {
          isLoggedIn: function(LoginService, $state){
            LoginService.getSessionUser().then(function(){
              var currentUser = LoginService.currentUser();
              if (!currentUser) {state.go('login');}
              else if (!currentUser.isAdmin) {$state.go('home');}
            });
          },
          getPosts: function(adminService){
              return adminService.getPosts().then(function(postData){
                  return postData;
              });
          }
        }
    })
    .state('bounty', {
        url: '/bounties',
        templateUrl: 'app/bounty/bountyTmpl.html',
        controller: 'bountyCtrl',
     resolve: {
       isLoggedIn: isLoggedIn,
           bounties: function(bountyService) {
               return bountyService.getBounties().then(function(resp) {
                   return resp;
               });
           }
        }
    })
    .state('bountyTitle', {
        url: '/bounties/:_id',
        templateUrl: 'app/bounty/bountyTmpl.html',
        controller: 'bountyIdCtrl',
        resolve: {
          isLoggedIn: isLoggedIn,
            getBountyTitle: function(bountyService, $stateParams) {
                return bountyService.getBountyTitle($stateParams._id).then(function(resp) {
                    return resp;
                });
            }
        }
    });
}]);
