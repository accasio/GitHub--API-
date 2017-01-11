"use strict";
(function (){
    var app = angular.module("githubApp", []);
    
    var githubController = function ($scope, $http, $interval, $log, $anchorScroll, $location){
        var decrementCounter = function (){
            $scope.countdown -= 1;
            if($scope.countdown < 1 ) $scope.search($scope.searchUser);
        };
        var timer = function (){
            $interval(decrementCounter, 1000, $scope.countdown);
        };
        var repoSuccess = function (response){
            $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        }
        var repoFail = function (error){
            $scope.error = "no repos found";
        }
        var userSuccess = function (response){
            console.log(response);
            $scope.user = response.data;
            $http.get(response.data.repos_url)
            .then(repoSuccess,repoFail);
        }
        var userFail = function (error){
            $scope.error = "no user found";
        }
        $scope.search = function (username) {
            $log.info(username);
            $http.get("https://api.github.com/users/" +username)
            .then(userSuccess,userFail);
        };
        $scope.reorder = function (elem){
            $scope.ascending=! $scope.ascending;
            $scope.orderByField = elem ; 
        };
        $scope.orderByField = "name"
        $scope.searchUser = "angular";
        $scope.ascending = false;
        $scope.countdown = 5;
        timer();
    };

    app.controller("githubController", ["$scope","$http", "$interval", "$log", "$anchorScroll", "$location", githubController]);
}());