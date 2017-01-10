"use strict";
(function (){
    var app = angular.module("githubApp", []);
    
    var githubController = function ($scope, $http){
        var userSuccess = function (response){
            $scope.user = response;
        }
        var userFail = function (error){
            $scope.error = "no user found";
        }
        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" +username)
            .then(userSuccess,userFail);
        };

        $scope.searchUser = "angular";
    };

    app.controller("githubController", ["$scope","$http", githubController]);
}());