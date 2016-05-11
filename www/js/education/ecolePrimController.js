angular.module('starter.ecolePrimController', [])

  .controller('ecolePrimCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allEcolePrims = [];

      SearchService.searchEcolePrim(searchTxt).then(function(response){

        data= response.data.result.records;

        for(var i=0 ;i<data.length ;i++){
          var ecolePrim = {
            _id: data[i]._id,
            ADRESSEFR: data[i].ADRESSEFR,
            ADRESSEAR: data[i].ADRESSEAR,
            NOM_ETABLISSENTFR: data[i].NOM_ETABLISSENTFR,
            NOM_ETABLISSENTAR: data[i].NOM_ETABLISSENTAR,
            PROVINCE: data[i].PROVINCE,
            REGIN: data[i].REGIN,
            TELEPHONE: data[i].TELEPHONE,
          };

          allEcolePrims.push(ecolePrim);
        }
        $scope.allEcolePrims = allEcolePrims;

      });

    };

    $scope.doSearch('rabat');

  })


  .controller('EcolePrimDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerEcolePrim = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getEcolePrimById($stateParams.ecolePrimId).then(function(response){
      $scope.ecolePrim= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {
      SearchService.getEcolePrimById($stateParams.ecolePrimId).then(function(response){
        var findInMap=  response.data.result.records[0].NOM_ETABLISSENTFR + ' '+response.data.result.records[0].PROVINCE;

        var allMarkerEcolePrim = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);


        $scope.allMarkerEcolePrim =  allMarkerEcolePrim;

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
          allMarkerEcolePrim.push(marker);

        })
        });
      }

    });
