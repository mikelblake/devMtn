angular.module('groupProject')
.controller('userProfileCtrl', ['$scope', 'userProfileService', 'getPosts', 'getUser', function($scope, userProfileService, getPosts, getUser) {


        $scope.user = getUser.data;


    $scope.updateUserInfo = function(userId, newInfo) {
        userProfileService.updateUserInfo(userId, newInfo);
    };

    $scope.deleteAccount = function(userId) {
        userProfileService.deleteAccount(userId);
    };

    // $scope.getFavorites = function() {
    //     userProfileService.getFavorites().then(function(resp) {
    //         $scope.favorites = resp.data;
    //     });
    // };

    $scope.posts = getPosts.data;

    $scope.getBounties = function(userId) {
        userProfileService.getBounties(userId).then(function(resp) {
            $scope.bounties = resp.data;
        });
    };


}]);
