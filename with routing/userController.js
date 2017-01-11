(function() {
    var githubController = function($scope, $github, $interval, $log, $anchorScroll, $location) {
        var decrementCounter = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) $scope.search($scope.searchUser);
        };
        var timer = function() {
            $interval(decrementCounter, 1000, $scope.countdown);
        };
        var repoSuccess = function(repos) {
            $scope.repos = repos;
            $location.hash("userDetails");
            $anchorScroll();
        }
        var repoFail = function(error) {
            $scope.error = "no repos found";
        }
        var userSuccess = function(data) {
            $scope.user = data;
            $github.getRepos($scope.user)
                .then(repoSuccess, repoFail);
        }
        var userFail = function(error) {
            $scope.error = "no user found";
        }
        $scope.search = function(username) {
            $log.info(username);
            $github.getUser(username)
                .then(userSuccess, userFail);
        };
        $scope.reorder = function(elem) {
            $scope.ascending = !$scope.ascending;
            $scope.orderByField = elem;
        };
        $scope.orderByField = "name"
        $scope.searchUser = "angular";
        $scope.ascending = false;
        $scope.countdown = 5;
        timer();
    };
    angular.module("githubApp").controller("githubController", githubController);


}());