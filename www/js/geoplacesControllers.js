angular.module('starter.geoplacesControllers', [])

  .controller('hopiCtrl', function ($scope, $http) {
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

      //*
      // Create a map centered in Pyrmont, Sydney (Australia).
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);


      var prefixApi = '';
      var hopitalNom = '';

      if (window.cordova) {
        prefixApi = 'http://ckan-demo.ckan.io';
      }

      $http.get(prefixApi + '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&limit=380').then(function (response) {
        // search for hospital and town position by Name
        var extractedData = extractHospitalAndTownFromResult(response.data.result.records);
        //console.log(extractedData);
        var from = 0, to = 10;
        var pagePositions = getPositionsForData(from, to, extractedData);


        //showMarkersForPage(pagePositions);


        // show the result in gmap



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
        var marker = {
          id:"",
          coord:{
            longitude: "",
            latitude:""
          }
        }
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
            $scope.allMarker.push(marker);
            //console.log($scope.allMarker);
          });


        }
      }



      //*/


    }

    google.maps.event.addDomListener(window, 'load', initialize);

  })
