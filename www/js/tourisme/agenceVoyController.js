angular.module('starter.agenceVoyController', [])

  .controller('agenceVoyCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allAgenceVoy = [];
      SearchService.searchAgenceVoy(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var agenceVoy = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            Nom: data[i]['Raison Sociale'],
            Année: data[i]['Année'],
            Coordonnées: data[i]['Coordonnées'],
            Ville: data[i].Ville

          };

          allAgenceVoy.push(agenceVoy);
        }
        $scope.agenceVoys = allAgenceVoy;

      });
    };

    $scope.doSearch('');


  })

  .controller('agenceVoyDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerAgenceVoy = [];

    $scope.getCoordAgence = function (agenceVoy) {
      if(!agenceVoy) return "";
      var str = agenceVoy["Coordonnées"];
      var res = str.split(" ");

      return res;
    };

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getAgenceVoyById($stateParams.agenceVoyId).then(function(response){
      $scope.agenceVoy= response.data.result.records[0];
      // console.log($scope.university.Nom);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getAgenceVoyById($stateParams.agenceVoyId).then(function(response){
        var findInMap=  response.data.result.records[0]['Raison Sociale'] + ' '+response.data.result.records[0].Ville
        console.log(findInMap);
        var allMarkerAgenceVoy = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        // console.log($scope.university.Nom);
        $scope.allMarkerAgenceVoy =  allMarkerAgenceVoy;

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
          allMarkerAgenceVoy.push(marker);
          // console.log(allMarkerUniversity);
          // console.log(request);

        })
        });
      }

    });
