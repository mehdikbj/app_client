angular.module('starter.btsController', [])

  .controller('btsCtrl', function($scope, $http, SearchService) {

    $scope.doSearch= function (searchTxt) {
      var allbts = [];

      SearchService.searchBts(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var bts = {
            _id: data[i]._id,
            Adresse: data[i].ADRESSE,
            Nom: data[i]["NOM ETABLISSEMENT"],
            EMAIL: data[i].EMAIL,
            TEL: data[i].TEL,
            Ville: data[i].VILLE,
            CYCLE: data[i].CYCLE,
            REGION: data[i].REGION,
            PROVINCE: data[i].PROVINCE,
            COMMUNE: data[i].COMMUNE

          };

          allbts.push(bts);
        }
        $scope.btss = allbts;


      });
    };
    $scope.doSearch('');


  })


  .controller('btsDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerbts = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getBtsById($stateParams.btsId).then(function(response){
      $scope.bts= response.data.result.records[0];

    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getBtsById($stateParams.btsId).then(function(response){
        var findInMap=  response.data.result.records[0]["NOM ETABLISSEMENT"] + ' '+response.data.result.records[0].VILLE;

        var allMarkerbts = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        $scope.allMarkerbts =  allMarkerbts;

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

          allMarkerbts.push(marker);


        })
        });
      }

    });
