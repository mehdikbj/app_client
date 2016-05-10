angular.module('starter.listSchoolController', [])

.controller('listItemCtrl', function($scope, $http, SearchService, $ionicLoading) {
  $scope.searchTxt='';


  $scope.doSearch= function (searchTxt) {
    console.log(searchTxt);
    var allItems = [];
    $ionicLoading.show();
    SearchService.searchSchool(searchTxt).then(function(response){

      data= response.data.result.records;

      for(var i=0 ;i<data.length ;i++){
        var item = {
          _id: data[i]._id,
          Adresse: data[i].Adresse,
          Commune: data[i].Commune,
          FAX_ETAB: data[i].FAX_ETAB,
          NOM_ETABL: data[i].NOM_ETABL,
          NbreAnnexe: data[i].NbreAnnexe,
          Province: data[i].Province,
          Région: data[i].Région,
          TEL_ETAB: data[i].TEL_ETAB,
          Ville: data[i].Ville,
          // mail: data[i]['e-mail']
        };

        allItems.push(item);
      }
      $ionicLoading.hide();
      $scope.items = allItems;

    });

  };

  $scope.doSearch('rabat');

})

.controller('EcoleDetailCtrl',  function($scope, $http, $stateParams, SearchService){
  var map;
  $scope.allMarkerEcole = [];

  $scope.mapConfig = {
    center: {
      latitude: 33.5910948,
      longitude: -7.6137281
    },
    zoom: 5,
    control: {}
  };


  SearchService.getDataById($stateParams.ecoleId).then(function(response){
    $scope.ecole= response.data.result.records[0];
    console.log($scope.ecole);
  });

  $scope.$on("$ionicView.enter", function(event, data){
    initialize();
  });

  function  initialize () {
    SearchService.getDataById($stateParams.ecoleId).then(function(response){
      var findInMap=  response.data.result.records[0].NOM_ETABL + ' '+response.data.result.records[0].Ville;

      var allMarkerEcole = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);


      $scope.allMarkerEcole =  allMarkerEcole;

      var request = {
        location: map.getCenter(),
        radius: '500',
        query: findInMap
      };
      console.log('ici');


      GMapService.textSearch(request, function (results, status){
        var marker = {
          id: results[0].id,
          coord: {
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          }
        };
        allMarkerEcole.push(marker);
        console.log(allMarkerEcole);

      })
      });
    }

  });
