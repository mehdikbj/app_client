angular.module('starter.universityController', [])

  .controller('listUniversityCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allUniversity = [];
      $ionicLoading.show();

      SearchService.searchUniversity(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var university = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            Fax: data[i].Fax,
            Nom: data[i].Nom,
            Siteweb: data[i]['site web'],
            Téléphone: data[i]['Téléphone'],
            Ville: data[i].Ville

          };

          allUniversity.push(university);
        }
        $ionicLoading.hide();
        $scope.universities = allUniversity;

      });
    };
    $scope.doSearch('');


  })


  .controller('universityDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerEcole = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getUniversityById($stateParams.universityId).then(function(response){
      $scope.university= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getUniversityById($stateParams.universityId).then(function(response){
        var findInMap=  response.data.result.records[0].Nom +' ' + response.data.result.records[0].Ville;
        var allMarkerUniversity = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        $scope.allMarkerUniversity =  allMarkerUniversity;

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
          $scope.mapConfig.center.latitude = results[0].geometry.location.lat();
          $scope.mapConfig.center.longitude = results[0].geometry.location.lng();
          allMarkerUniversity.push(marker);

        })
        });
      }

    });


