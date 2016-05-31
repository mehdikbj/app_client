angular.module('starter.carteController', [])


  .controller('carteCtrl', function($scope, $http, SearchService) {

    $scope.doSearch= function (searchTxt) {

      SearchService.searchPosteMaroc(searchTxt).then(function (response) {
        var allMarker = [];
        data = response.data.result.records;
        console.log(data);
        $scope.maps = { center: { latitude: response.data.result.records[0].XY, longitude: response.data.result.records[0].XX }, zoom: 10};
        $scope.myMarkers = allMarker;
        for(var i=0 ;i<data.length ;i++){
          var marker = {
            id: data[i]._id,
            coord: {
              longitude: data[i].XX,
              latitude: data[i].XY
            }
          };

          allMarker.push(marker);
        }

      });
    };
    $scope.doSearch('rabat');


  })
