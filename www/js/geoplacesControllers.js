angular.module('starter.geoplacesControllers', [])

  .controller('hopiCtrl', function ($scope, $http) {
    var map;

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    function initialize() {

      //*
      // Create a map centered in Pyrmont, Sydney (Australia).
      map = $scope.mapConfig.control.getGMap();

      var prefixApi = '';
      var hopitalNom = '';

      if (window.cordova) {
        prefixApi = 'http://ckan-demo.ckan.io';
      }

      $http.get(prefixApi + '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&limit=380').then(function (response) {
        for (i = 0; i < 360; i++) {
          $scope.agences = response.data.result.records;
          $scope.hopital_nom = response.data.result.records[i]["Nom de l'hôpital"];
          $scope.hopital_ville = response.data.result.records[i]["ville /commue d'implantation de l'hôpital"];
          // console.log($scope.hopital_nom);
          hopitalNom = $scope.hopital_nom;
          hopitalVille = $scope.hopital_ville;
          //console.log(hopitalVille);
          // $scope.myMarkers = extractMarkersFromData(response.data.result.records);


          // Search for Google's office in Australia.
          var request = {
            location: map.getCenter(),
            radius: '10000',
            query: 'hopital' + hopitalNom + hopitalVille,
          };

          var service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);


        }

      });
// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
      function callback(results, status) {
        // console.log(results);
        // console.log(results[0].geometry.location.lat());
        // console.log(results[0].geometry.location.lng());
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var marker = new google.maps.Marker({
            map: map,
            place: {
              placeId: results[0].place_id,
              location: results[0].geometry.location
            }
          });
        }
      }

      //*/


    }

    google.maps.event.addDomListener(window, 'load', initialize);

  })
