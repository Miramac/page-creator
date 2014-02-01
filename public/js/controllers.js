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
  $scope.change = function(name) {
    switch(name){
      case 'page.name':
        $scope.page.url = getUrl($scope.page);
        break;
    }
  };
}
AppCtrlNewPage.$inject = ['$scope', '$http'];

function getUrl(page) {
  //console.log( encodeURIComponent(page.name));
  var url = page.url;
  if(page.path || page.path !== '') {
    url = encodeURIComponent(page.path); 
  } else if (page.name) {
    url = encodeURIComponent(page.name); 
  }
  return url;
}
