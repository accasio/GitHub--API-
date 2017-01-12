(function() {
    var repoController = function($scope, github, $routeParams) {
        var contributeSuccess = function(data) {
            console.log(data);
            $scope.contributors = data;
        };
        var contributeFail = function(err) {
            $scope.error = err;
        };
        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;
        github.getContributors($scope.username, $scope.repo).then(contributeSuccess, contributeFail);
    };

    angular.module("githubApp").controller("repoController", repoController);
}());