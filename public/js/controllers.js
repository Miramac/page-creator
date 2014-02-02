'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/app'}).
  success(function(data, status, headers, config) {
    $scope.data = data;
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.state = 'Error!'
  });
}

function AppCtrlStart($scope) {}
AppCtrlStart.$inject = ['$scope'];


function AppCtrlNewPage($scope, $http) {
  $scope.page = $scope.data.page;
  $scope.page.url = getUrl($scope.page);
  
  //Control Change
  $scope.change = function(name) {
    switch(name){
      case 'page.name':
        $scope.page.name = $.trim($scope.page.name)
        $scope.page.url = getUrl($scope.page);
        break;
      case 'page.path':
        $scope.page.path = $.trim($scope.page.path)
        $scope.page.url = getUrl($scope.page);
        break;
      }
  };
  
  $scope.create = function() {
    $http({method: 'GET', url: '/api/app?action=create'}).
    success(function(data, status, headers, config) {
      $scope.data = data;
    }).
    error(function(data, status, headers, config) {
      $scope.state = 'Error!'
    });
  };
  
}
AppCtrlNewPage.$inject = ['$scope', '$http'];


/**
 * Helpers
 **/
function getUrl(page) {
  //console.log( encodeURIComponent(page.name));
  var url = page.url;
  if(page.path || page.path !== '') {
    url = encodeURIComponent(page.path.replace(/ /g, '-').toLowerCase()); 
  } else if (page.name) {
    url = encodeURIComponent(page.name.replace(/ /g, '-').toLowerCase()); 
  }
  return url;
}
