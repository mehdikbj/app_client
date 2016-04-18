angular.module('starter.geoControllers', [])


  .controller('hopitalCtrl', function ($scope, $http) {

    var prefixApi = '';

    if (window.cordova) {
      prefixApi = 'http://ckan-demo.ckan.io';
    }
    var replaced2 = '';

    $http.get(prefixApi + '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&limit=380').then(function (response) {

      // $scope.hopital = response.data.result.records[0];
      $scope.hopital = response.data.result.records[61]["Nom de l'hôpital"];
      $scope.hopital1 = response.data.result.records[61]["ville /commue d'implantation de l'hôpital"];
      var replaced = $scope.hopital.replace(/ /g, '+');
      var replaced1 = $scope.hopital1.replace(/ /g, '+');
      console.log(replaced);
      // console.log(replaced1);
      replaced2 = replaced + '+' + replaced1;
      // console.log(replaced2);

      $scope.maptest1 = {center: {latitude: 33.5910948, longitude: -7.6137281}, zoom: 5};


      $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=53,+Assif,+Marrakech,+Maroc&key=AIzaSyBMdX7l4r4JLMR0HSxfW3xfAUBt_pWoMUc')
        .then(function (response) {

          $scope.geocode = response.data.results;
          $scope.geometry = response.data.results[0].geometry.location;
          console.log($scope.geocode);
          $scope.myGeoMarkers = extractMyGeoMarkersFromData($scope.geometry);

        });

      function extractMyGeoMarkersFromData(data) {
        var allMyGeoMarkers = [];

        var marker = {
          id: "2",
          coord: {
            longitude: $scope.geometry.lng,
            latitude: $scope.geometry.lat
          }
        };
        allMyGeoMarkers.push(marker);
        return allMyGeoMarkers;
      }


    });


  })
