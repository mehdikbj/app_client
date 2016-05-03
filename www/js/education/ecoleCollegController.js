angular.module('starter.ecoleCollegController', [])

  .controller('ecoleCollegCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allEcoleCollegs = [];
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
      zoom: 5,
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

      var allMarkerEcoleColleg = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);


      $scope.allMarkerEcoleColleg =  allMarkerEcoleColleg;

      var request = {
        location: map.getCenter(),
        radius: '500',
        query: 'ecole al bachir marrakech'
      };

      GMapService.textSearch(request, function (results, status){
        var marker = {
          id: results[0].id,
          coord: {
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          }
        };
        allMarkerEcoleColleg.push(marker);
        console.log(allMarkerEcoleColleg);

      })

    }

  });