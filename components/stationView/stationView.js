(function(angular) {
    'use strict';
var app = angular.module('myApp');

      app.controller('StationController', function($scope, $rootScope, $stateParams, $state, LoginService) {

        $scope.list1 = [{id:"123" , name : "Player1"},{id:"456" , name : "Player2"},{id:"789" , name : "Player3"},{id:"101" , name : "Player4"},{id:"112" , name : "Player5"}];
        $scope.list2 = [];

        $scope.sortableOptions = {
            connectWith: '.connectedList',
            placeholder: 'placeholder',
            dropOnEmpty: true
        };

        $scope.obj = {
            'available': '',
            'selected': '',
        };
        $scope.statName = "Enter Station Name Here";
        $scope.cancelAdd = function(){
           $scope.statName = "";
        }
        $scope.addStation = function(){
           $scope.temp = {};
           $scope.temp.name = $scope.statName;
           $scope.list1.push($scope.temp);
           $scope.cancelAdd();
        }

        $scope.save1 = function() {
            $scope.obj.available = $scope.list1;
            $scope.obj.selected = $scope.list2;
            alert(JSON.stringify($scope.obj));

        };
        $scope.restore1 = function restore() {
            $scope.list1 = [{id:"123" , name : "Player1"},{id:"456" , name : "Player2"},{id:"789" , name : "Player3"},{id:"101" , name : "Player4"},{id:"112" , name : "Player5"}];
            $scope.list2 = [];
            $scope.obj.available = $scope.list1;
            $scope.obj.selected = $scope.list2;
            alert(JSON.stringify($scope.obj));

        };
    });
})(angular);
