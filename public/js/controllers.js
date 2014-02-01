'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/app'}).
  success(function(data, status, headers, config) {
    $scope.data = data;
  }).
  error(function(data, status, headers, config) {
    $scope.state = 'Error!'
  });
}

function AppCtrlStart() {}
AppCtrlStart.$inject = [];


function AppCtrlNewPage($scope, $http) {
  $scope.page = $scope.data.page;
}
AppCtrlNewPage.$inject = ['$scope', '$http'];