(function() {
    var app = angular.module('githubApp', ['ngRoute']);
    app.config(function($routeProvider) {
        $routerProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "mainController"
            })
            .otherwise({ redirectTo: "/main" });
    });
})();