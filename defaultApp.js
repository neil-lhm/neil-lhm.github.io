var defaultApp = angular.module("defaultApp", ['ngRoute']);
defaultApp.controller('TabsController', function($scope){
  $scope.tabs=['Home', 'Resume', 'SampleWorks'];

});
defaultApp.config(function($routeProvider){

  $routeProvider
    .when('/Home', {
     /* controller: "TabsController",*/
      templateUrl: '/Home.html'
    })
    .when('/Resume', {
      //controller: "TabsController",
      templateUrl: 'Resume.html'
    })
    .when('/SampleWorks', {
      //controller: "TabsController",
      templateUrl: 'SampleWorks.html'
    })
    .otherwise({redirectTo: '/Home'});
});