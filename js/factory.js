'use strict';

angular.module('serviceApp', [])
  .factory('myFactory', function($http) {

    function getRegistry () {
        return $http.get('https://randomuser.me/api');
    }

    return {
      getRegistry: getRegistry
    }
  });
