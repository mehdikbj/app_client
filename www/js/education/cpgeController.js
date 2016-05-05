angular.module('starter.cpgeController', [])

  .controller('cpgeCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';

    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allcpge = [];

      SearchService.searchCpge(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var cpge = {
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

          allcpge.push(cpge);
        }
        $scope.cpges = allcpge;


      });
    };
    $scope.doSearch('');


  })


  .controller('cpgeDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkercpge = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getCpgeById($stateParams.cpgeId).then(function(response){
      $scope.cpge= response.data.result.records[0];
      // console.log($scope.university.Nom);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getCpgeById($stateParams.cpgeId).then(function(response){
        var findInMap=  response.data.result.records[0]["NOM ETABLISSEMENT"] + ' '+ response.data.result.records[0].VILLE ;
        console.log(findInMap);

      var allMarkercpge = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);

      $scope.allMarkercpge =  allMarkercpge;

      var request = {
        location: map.getCenter(),
        radius: '500',
        query: findInMap
      };

        console.log(request);

      GMapService.textSearch(request, function (results, status){
        var marker = {
          id: results[0].id,
          coord: {
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          }
        };
        allMarkercpge.push(marker);
        console.log(allMarkercpge);

        // console.log(allMarkerUniversity);
        // console.log(request);

      })
      });
    }

  });
