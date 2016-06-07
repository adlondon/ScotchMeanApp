angular.module('BearCtrl', ['BearService'])
  .controller('BearController', function($scope, Bear) {
    Bear.get()
      .then(function(data) {
        $scope.bears = data.data;
      })
  })
