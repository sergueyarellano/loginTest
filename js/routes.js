'use strict';

angular.module('routesApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
    })
    .when('/data', {
      templateUrl: 'views/data.html',
      controller: 'dataController',
      controllerAs: 'data'
    });
  });
