angular.module('starter.ecoleCollegController', [])

  .controller('ecoleCollegCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allEcoleCollegs = [];
      $ionicLoading.show();

      SearchService.searchEcoleColleg(searchTxt).then(function(response){

        data= response.data.result.records;

        for(var i=0 ;i<data.length ;i++){
          var ecoleColleg = {
            _id: data[i]._id,
            ADRESSEFR: data[i].ADRESSEFR,
            ADRESSEAR: data[i].ADRESSEAR,
            NOM_ETABLISSENTFR: data[i].NOM_ETABLISSENTFR,
            NOM_ETABLISSENTAR: data[i].NOM_ETABLISSENTAR,
            PROVINCE: data[i].PROVINCE,
            REGION: data[i].REGION,
            TELEPHONE: data[i].TELEPHONE,
          };

          allEcoleCollegs.push(ecoleColleg);
        }
        $ionicLoading.hide();
        $scope.allEcoleCollegs = allEcoleCollegs;

      });

    };

    $scope.doSearch('rabat');

  })


  .controller('EcoleCollegDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerEcoleColleg = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getEcoleCollegById($stateParams.ecoleCollegId).then(function(response){
      $scope.ecoleColleg= response.data.result.records[0];
      console.log($scope.ecoleColleg);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {
      SearchService.getEcoleCollegById($stateParams.ecoleCollegId).then(function(response){
        var findInMap=  response.data.result.records[0].NOM_ETABLISSENTFR +' ' + response.data.result.records[0].PROVINCE;
        var allMarkerEcoleColleg = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);


        $scope.allMarkerEcoleColleg =  allMarkerEcoleColleg;

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
          allMarkerEcoleColleg.push(marker);
          console.log(allMarkerEcoleColleg);

        })
        });
      }

    });
