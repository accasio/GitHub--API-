"use strict";
(function() {
    var githubController = function($scope, $interval, $location) {
        var decrementCounter = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) $scope.search($scope.searchUser);
        };
        var timer = function() {
            $interval(decrementCounter, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            $log.info(username);

            //re route here
        };
        $scope.reorder = function(elem) {
            $scope.ascending = !$scope.ascending;
            $scope.orderByField = elem;
        };
        $scope.searchUser = "angular";
        $scope.countdown = 5;
        timer();
    };
    angular.module("githubApp").controller("githubController", githubController);
}());