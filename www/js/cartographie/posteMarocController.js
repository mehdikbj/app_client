angular.module('starter.posteMarocController', [])

  .controller('posteMarocCtrl', function($scope, $http, SearchService) {

    $scope.doSearch= function (searchTxt) {
      var allposteMaroc = [];

      SearchService.searchPosteMaroc(searchTxt).then(function (response) {
        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var posteMaroc = {
            _id: data[i]._id,
            CODE_MECANO: data[i].CODE_MECANO,
            RESEAU: data[i].RESEAU,
            COMMUNE: data[i].COMMUNE,
            PROVINCE: data[i].PROVINCE,
            NOM_REGION: data[i].NOM_REGION,
            ADRESSE: data[i].ADRESSE,
            XX: data[i].XX,
            XY: data[i].XY
          };

          allposteMaroc.push(posteMaroc);
        }
        $scope.posteMarocs = allposteMaroc;

      });
    };
    $scope.doSearch('');


  })


  .controller('posteMarocDetailCtrl',  function($scope, $http, $stateParams, SearchService){


    // $scope.maps = { center: { latitude: 33.5910948, longitude: -7.6137281 }, zoom: 10 };

    SearchService.getPosteMarocById($stateParams.posteMarocId).then(function(response){
      $scope.maps = { center: { latitude: response.data.result.records[0].XY, longitude: response.data.result.records[0].XX }, zoom: 15 };
      var allMarker=[];
      $scope.posteMaroc= response.data.result.records[0];
      $scope.myMarkers = allMarker;
      var marker = {
        id: response.data.result.records[0]._id,
        coord: {
          longitude: response.data.result.records[0].XX,
          latitude: response.data.result.records[0].XY
        }
      };
      allMarker.push(marker);
    });



  });

