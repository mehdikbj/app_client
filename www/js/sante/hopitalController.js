angular.module('starter.hopitalController', [])

  .controller('hopitalCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allHopital = [];
      $ionicLoading.show();

      SearchService.searchHopital(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var hopital = {
            _id: data[i]._id,
            province: data[i]['Provinces et Préfectures'],
            Nom: data[i]["Nom de l'hôpital"],
            region: data[i]['Régions'],
            categorie: data[i]['Catégorie'],
            Ville: data[i]["ville /commue d'implantation de l'hôpital"]


          };

          allHopital.push(hopital);
        }
        $ionicLoading.hide();
        $scope.hopitals = allHopital;

      });
    };

    $scope.doSearch('');


  })


  .controller('hopitalDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerHopital = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getHopitalById($stateParams.hopitalId).then(function(response){
      $scope.hopital= response.data.result.records[0];
      console.log($scope.hopital);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getHopitalById($stateParams.hopitalId).then(function(response){
        var findInMap=  'hopital' +' '+ response.data.result.records[0]["Nom de l'hôpital"]+' ' + response.data.result.records[0]["ville /commue d'implantation de l'hôpital"];
        console.log(findInMap);

        var allMarkerHopital = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        // console.log($scope.university.Nom);
        $scope.allMarkerHopital =  allMarkerHopital;

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
          allMarkerHopital.push(marker);
          // console.log(allMarkerUniversity);
          // console.log(request);

        })
        });
      }

  });

