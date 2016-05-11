angular.module('starter.centreSanteController', [])

  .controller('centreSanteCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allCentreSante = [];

      SearchService.searchCentreSante(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var centreSante = {
            _id: data[i]._id,
            Province: data[i].Province,
            Nom: data[i]["Nom Etab"],
            Commune: data[i].Commune


          };

          allCentreSante.push(centreSante);
        }
        $scope.centreSantes = allCentreSante;

      });
    };

    $scope.doSearch('');


  })


  .controller('centreSanteDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerCentreSante = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getCentreSanteById($stateParams.centreSanteId).then(function(response){
      $scope.centreSante= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getCentreSanteById($stateParams.centreSanteId).then(function(response){
        var findInMap= response.data.result.records[0]["Nom Etab"] +' ' + response.data.result.records[0].Province;

        var allMarkerCentreSante = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        $scope.allMarkerCentreSante =  allMarkerCentreSante;

        var request = {
          location: map.getCenter(),
          radius: '500',
          query: findInMap
        };

        GMapService.textSearch(request, function (results, status){
          var marker = {
            id: results[0].id,
            coord: {
              longitude: results[0].geometry.location.lng(),
              latitude: results[0].geometry.location.lat()
            }
          };
          $scope.mapConfig.center.latitude = results[0].geometry.location.lat();
          $scope.mapConfig.center.longitude = results[0].geometry.location.lng();
          allMarkerCentreSante.push(marker);
          

        })
        });
      }

  });

