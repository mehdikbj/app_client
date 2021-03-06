angular.module('starter.institutEcoJurSocController', [])

  .controller('institutEcoJurSocCtrl', function($scope, $http, SearchService) {

    $scope.doSearch= function (searchTxt) {
      var allInstitutEcoJurSoc = [];

      SearchService.searchInstitutEcoJurSoc(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var institutEcoJurSoc = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            Fax: data[i].Fax,
            Nom: data[i].Nom,
            Siteweb: data[i]["site web"],
            Téléphone: data[i]['Téléphone'],
            Ville: data[i].Ville

          };

          allInstitutEcoJurSoc.push(institutEcoJurSoc);
        }
        $scope.institutEcoJurSocs = allInstitutEcoJurSoc;


      });
    };
    $scope.doSearch('');


  })


  .controller('institutEcoJurSocDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerInstitutEcoJurSoc = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 15,
      control: {}
    };


    SearchService.getInstitutEcoJurSocById($stateParams.institutEcoJurSocId).then(function(response){
      $scope.institutEcoJurSoc= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {
      SearchService.getInstitutEcoJurSocById($stateParams.institutEcoJurSocId).then(function(response){
        var findInMap=  response.data.result.records[0].Nom + ' '+response.data.result.records[0].Ville;

        var allMarkerInstitutEcoJurSoc = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        $scope.allMarkerInstitutEcoJurSoc =  allMarkerInstitutEcoJurSoc;

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
          allMarkerInstitutEcoJurSoc.push(marker);
          

        })
        });
      }

    });

