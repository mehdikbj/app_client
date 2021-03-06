angular.module('starter.ecoleLycController', [])

  .controller('ecoleLycCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allEcoleLycs = [];

      SearchService.searchEcoleLyc(searchTxt).then(function(response){

        data= response.data.result.records;

        for(var i=0 ;i<data.length ;i++){
          var ecoleLyc = {
            _id: data[i]._id,
            ADRESSEFR: data[i].ADRESSEFR,
            ADRESSEAR: data[i].ADRESSEAR,
            NOM_ETABLISSENTFR: data[i].NOM_ETABLISSENTFR,
            NOM_ETABLISSENTAR: data[i].NOM_ETABLISSENTAR,
            PROVINCE: data[i].PROVINCE,
            REGION: data[i].REGION,
            TELEPHONE: data[i].TELEPHONE,
          };

          allEcoleLycs.push(ecoleLyc);
        }
        $scope.allEcoleLycs = allEcoleLycs;

      });

    };

    $scope.doSearch('rabat');

  })


  .controller('EcoleLycDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerEcoleLyc = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getEcoleLycById($stateParams.ecoleLycId).then(function(response){
      $scope.ecoleLyc= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {
      SearchService.getEcoleLycById($stateParams.ecoleLycId).then(function(response){
        var findInMap =  response.data.result.records[0].NOM_ETABLISSENTFR + ' '+response.data.result.records[0].PROVINCE;
        var allMarkerEcoleLyc = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);


        $scope.allMarkerEcoleLyc =  allMarkerEcoleLyc;

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

          allMarkerEcoleLyc.push(marker);

        })
        });
      }

    });
