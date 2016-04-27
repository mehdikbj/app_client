angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('agencesCtrl', function($scope, $http, SchoolService) {

    $scope.map = { center: { latitude: 33.5910948, longitude: -7.6137281 }, zoom: 5 };
    $scope.agences=[];

    SchoolService.getDataByUrl('/api/action/datastore_search?resource_id=3615a911-1915-45fc-a501-ede483e4b0c7').then(function(response){

    $scope.agences = response.data.result.records;
    $scope.myMarkers = extractMarkersFromData(response.data.result.records);
    });


  function extractMarkersFromData(data){
    var allMarkers = [];

    var marker = {
      id:"2",
      coord:{
        longitude: "",
        latitude:""
      }
    }

    for(var i=0 ;i<data.length ;i++){
      var marker = {
        id: data[i]._id,
        coord: {
                  longitude: data[i].fLongitude,
                  latitude: data[i].fLatitude
                }
         };

      allMarkers.push(marker);
    }
    return allMarkers;
  }
  
})




.controller('geocodingCtrl', function($scope, $http) {

    $scope.maptest = { center: { latitude: 33.5910948, longitude: -7.6137281 }, zoom: 5 };


    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=hopital+sidi+lahcen&key=AIzaSyBMdX7l4r4JLMR0HSxfW3xfAUBt_pWoMUc')
      .then(function(response){

            $scope.geocode = response.data.results;
            $scope.geometry = response.data.results[0].geometry.location;
            // console.log($scope.geometry);
            $scope.myGeoMarkers = extractMyGeoMarkersFromData($scope.geometry);

    });

})
