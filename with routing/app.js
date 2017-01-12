(function() {
    var app = angular.module('githubApp', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "mainController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "userController"
            })
            .when("/repo/:username/:repo", {
                templateUrl: "repo.html",
                controller: "repoController"
            })
            .otherwise({ redirectTo: "/main" });
    });
})();