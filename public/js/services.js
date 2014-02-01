'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('creator.services', [])
  .value('name', 'page creator')
  .value('version', '0.1')
  ;
