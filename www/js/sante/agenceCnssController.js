angular.module('starter.agenceCnssController', [])

  .controller('agenceCnssCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allAgenceCnss = [];
      SearchService.searchAgenceCnss(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var agenceCnss = {
            _id: data[i]._id,
            ADRESSE: data[i].ADRESSE,
            AGENCE: data[i].AGENCE,
            VILLE: data[i].VILLE
          };

          allAgenceCnss.push(agenceCnss);
        }
        $scope.agenceCnsss = allAgenceCnss;

      });
    };

    $scope.doSearch('');


  })


  .controller('agenceCnssDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerCnss = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getAgenceCnssById($stateParams.cnssId).then(function(response){
      $scope.cnss= response.data.result.records[0];
      console.log($scope.cnss);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      var allMarkerCnss = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);

      // console.log($scope.university.Nom);
      $scope.allMarkerCnss =  allMarkerCnss;

      var request = {
        location: map.getCenter(),
        radius: '500',
        query: 'al bachir marrakech'
      };

      GMapService.textSearch(request, function (results, status){
        var marker = {
          id: results[0].id,
          coord: {
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          }
        };
        allMarkerCnss.push(marker);
        // console.log(allMarkerUniversity);
        // console.log(request);

      })

    }

  });
