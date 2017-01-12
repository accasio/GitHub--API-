(function() {
    var userController = function($scope, github, $routeParams, $location) {
        var repoSuccess = function(repos) {
            $scope.repos = repos;
        }
        var repoFail = function(error) {
            $scope.error = "no repos found";
        }
        var userSuccess = function(data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(repoSuccess, repoFail);
        }
        var userFail = function(error) {
            $scope.error = "no user found";
        }
        $scope.reorder = function(elem) {
            $scope.ascending = !$scope.ascending;
            $scope.orderByField = elem;
        };
        $scope.contributor = function(repo) {
            $location.path("/repo/" + $scope.username + "/" + repo.name);
        };
        $scope.orderByField = "name"
        $scope.username = $routeParams.username;
        $scope.ascending = false;
        github.getUser($scope.username).then(userSuccess, userFail);
    };
    angular.module("githubApp").controller("userController", userController);
}());