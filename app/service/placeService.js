
var placeService = angular.module('placeService', []);

placeService.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://maps.googleapis.com/**'
  ]);
});

placeService.factory('locationService', function ($http) {

  var latlng = new google.maps.LatLng(39.305, -76.617);
     infowindow = new google.maps.InfoWindow();

  var map;
       map = new google.maps.Map(document.getElementById('map'), {center: latlng, zoom: 15});

  var myLocationService = function (x) {
   return x.toString(16);
 };

 var searchLocationService = function (searchValue) {
  var request = {
    query: searchValue,//'India Gate',
    fields: ['name', 'geometry'],
 };

var service = new google.maps.places.PlacesService(map);

service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
};

function createMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      };

 return {
       myLocation: myLocationService,
       searchLocation: searchLocationService
     };

});
