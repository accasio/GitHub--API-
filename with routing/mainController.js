"use strict";
(function() {
    var mainController = function($scope, $interval, $location) {
        var decrementCounter = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) $scope.search($scope.username);
        };
        var timer = function() {
            $interval(decrementCounter, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            $location.path("/user/" + username);
        };
        $scope.username = "angular";
        $scope.countdown = 5;
        timer();
    };
    angular.module("githubApp").controller("mainController", mainController);
}());