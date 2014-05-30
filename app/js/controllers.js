'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
  	$http.get('json/people.json').success(function(data) {
  		$scope.people = data;
  	})
  }])
  .controller('MyCtrl2', ['$scope', '$http', function($scope, $http) {
  	$http.get('json/met.json').success(function(data) {
  		$scope.metrics = data;
  	})
  }]);
