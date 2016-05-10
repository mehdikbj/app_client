angular.module('starter.codPosLocController', [])

  .controller('codPosLocCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allLienGov = [];
      $ionicLoading.show();

      SearchService.searchCodPostLoc(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var codPosLoc = {
            _id: data[i]._id,
            REGION_POSTALE: data[i].REGION_POSTALE,
            PROVINCE: data[i].PROVINCE,
            LOCALITE: data[i].LOCALITE,
            code: data[i]["NOUVEAU CODE POSTAL"]

          };

          allLienGov.push(codPosLoc);
        }
        $ionicLoading.hide();
        $scope.codPosLocs = allLienGov;
      });
    };

    $scope.doSearch('');


  })
