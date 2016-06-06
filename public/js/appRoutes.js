angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        // homepage
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })

        //bears page that will use the BearController
        .when('/bears', {
          templateUrl: 'views/bear.html',
          controller: 'BearController'
        });

      $locationProvider.html5Mode(true);

  }])
