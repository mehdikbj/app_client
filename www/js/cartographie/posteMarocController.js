angular.module('starter.posteMarocController', [])

  .controller('posteMarocCtrl', function($scope, $http, SearchService, $ionicLoading) {

    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allposteMaroc = [];
      $ionicLoading.show();
      
      SearchService.searchPosteMaroc(searchTxt).then(function (response) {
        data = response.data.result.records;
        // console.log(data);

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
        $ionicLoading.hide();
        $scope.posteMarocs = allposteMaroc;

      });
    };
    $scope.doSearch('');


  })


  .controller('posteMarocDetailCtrl',  function($scope, $http, $stateParams, SearchService, $ionicLoading){

    $scope.maps = { center: { latitude: 33.5910948, longitude: -7.6137281 }, zoom: 5 };

    SearchService.getPosteMarocById($stateParams.posteMarocId).then(function(response){
      $ionicLoading.show();
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
      $ionicLoading.hide();
      allMarker.push(marker);
    });



  });

