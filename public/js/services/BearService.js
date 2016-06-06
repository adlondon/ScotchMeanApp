angular.module('BearService', [])
  .factory('Bear', ['$http', function($http) {
    return {
      // call to get all bears
      get: function() {
        return $http.get('api/bears');
      },
      // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new bear
      create: function(data) {
        return $http.post('api/bears', data);
      },

      // call to detele a bear
      delete: function(id) {
        return $http.delete('api/bears' + id);
      }
    }
  }])
