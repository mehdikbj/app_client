angular.module('starter.geoplacesControllers', [])

  .controller('hopiCtrl', function ($scope, $http, SearchService) {
    var map;
    $scope.allMarker = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    function initialize() {

      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);

      var hopitalNom = '';

      SearchService.searchHospitals().then(function(response){
        var extractedData = extractHospitalAndTownFromResult(response.data.result.records);
        var from = 0, to = 10;
        $scope.allMarker = getPositionsForData(from, to, extractedData);

      });

      function extractHospitalAndTownFromResult(records){
        var extractedData = [];
        for(var i = 0, max = records.length; i < max ; i++){
          // push the hospital and town for this item

          var item = records[i];

          extractedData.push({
            hospital: item["Nom de l'hôpital"],
            town: item["ville /commue d'implantation de l'hôpital"]
          });

        }

        return extractedData;
      }

      function getPositionsForData(from, to, extractedData){
        var allMarker = [];
        for (var i= from ; i <to ; i++) {

          var item = extractedData[i];
          var request = {
            location: map.getCenter(),
            radius: '500',
            query: 'hopital' + item.hospital + ' ' + item.town
          };
          //*/

          GMapService.textSearch(request, function (results, status) {
            console.log(results);
            var marker = {
              id: results[0].id,
              coord: {
                longitude: results[0].geometry.location.lng(),
                latitude: results[0].geometry.location.lat()
              }
            };
            allMarker.push(marker);
            //console.log(allMarker);
          });


        }
        return  allMarker;
      }

    }

    google.maps.event.addDomListener(window, 'load', initialize);

  })
