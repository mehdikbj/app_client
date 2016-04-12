angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('agencesCtrl', function($scope, $http) {

  $scope.map = { center: { latitude: 33.5910948, longitude: -7.6137281 }, zoom: 5 };
  $scope.agences=[];

var prefixApi ='';

if(window.cordova){
  prefixApi = 'http://demo.ckan.org';
}

  $http.get( prefixApi + '/api/action/datastore_search?resource_id=9079d1fd-2425-4a31-9557-0b056146ff28').then(function(response){
            
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

});
