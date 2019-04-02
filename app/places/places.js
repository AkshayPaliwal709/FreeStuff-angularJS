'use strict';
angular.module('myApp.places', ['ngRoute', 'placeService'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'placesCtrl'
  });
}])
.controller('placesCtrl', function($scope, locationService) {
   $scope.findLocation = function() {
       locationService.searchLocation($scope.searchText);
   };
   $scope.findMyLocation = function() {
       locationService.searchLocation($scope.searchText);
   };
});
