'use strict';


// Declare app level module which depends on filters, and services
angular.module('creator', ['creator.filters', 'creator.services', 'creator.directives','ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/start', {templateUrl: 'partial/start', controller: AppCtrlStart});
    $routeProvider.when('/new', {templateUrl: 'partial/newpage', controller: AppCtrlNewPage});
    $routeProvider.otherwise({redirectTo: '/start'});
    $locationProvider.html5Mode(true);
  }]);