'use strict';

/* Directives */


angular.module('creator.directives', [])
  .directive('appName', ['name', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  ;
