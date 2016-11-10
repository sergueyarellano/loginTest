'use strict';

angular.module('mainApp', ['routesApp', 'serviceApp'])
  .controller('mainController', function() {
    // to implement, not necessary
  })
  .controller('dataController', function($q, myFactory) {
    var vm = this;

    // Retrieve data from randomuser.me
    $q.all([myFactory.getRegistry()])
      .then(function(success) {
        vm.queryResults = success[0].data.results;
      });

    // some checkers
    vm.isObject = function (value) {
      return typeof value === 'object';
    }
    vm.matchRegex = function (value) {
      return /\.jpg/.test(value);
    }
  });
