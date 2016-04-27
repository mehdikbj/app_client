angular.module('starter.listItemController', [])

.controller('listItemCtrl', function($scope, $http) {
  $scope.searchTxt='';

  searchSchool('rabat');

  $scope.doSearch= function (searchTxt) {
    console.log(searchTxt);
    searchSchool(searchTxt);

  };

  function searchSchool (search) {

    var allItems = [];

    var prefixApi ='';

    if(window.cordova){
      prefixApi = 'http://ckan-demo.ckan.io';
    }

    $http.get( prefixApi + '/api/action/datastore_search?resource_id=8d3a66f8-1ea4-426d-8ada-ca5c12612ba4&q='+search+'&offset=0&limit=700').then(function(response){

      data= response.data.result.records;
      //console.log(response.data.result.records);

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
          Ville: data[i].Ville
          // mail: data[i].['e-mail']
        };

        allItems.push(item);
      }

      $scope.items = allItems;

    });

  }

})

.controller('EcoleDetailCtrl',  function($scope, $http, $stateParams, SchoolService){
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


  SchoolService.getDataById($stateParams.ecoleId).then(function(response){
    $scope.ecole= response.data.result.records[0];
    console.log($scope.ecole);
  });

  function  initialize () {
    var allMarkerEcole = [];
    map = $scope.mapConfig.control.getGMap();
    var GMapService = new google.maps.places.PlacesService(map);

    var request = {
      location: map.getCenter(),
      radius: '500',
      query: 'Google Sydney'
    };

    GMapService.textSearch(request, function (results, status){
      var marker = {
        id: results[0].id,
        coord: {
          longitude: results[0].geometry.location.lng(),
          latitude: results[0].geometry.location.lat()
        }
      };
      allMarkerEcole.push(marker);
      // console.log(allMarkerEcole);

    })

  }

  google.maps.event.addDomListener(window, 'load', initialize);




});
