'use strict';

angular.module('mainApp', ['routesApp'])
  .controller('mainController', function() {
    var vm = this;

    vm.message = 'main app!';
  })
  .controller('dataController', function() {

  })
