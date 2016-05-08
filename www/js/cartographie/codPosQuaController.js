angular.module('starter.codPosQuaController', [])

  .controller('codPosQuaCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allLcodPosQua = [];
      SearchService.searchCodPosQua(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var codPosQua = {
            _id: data[i]._id,
            Ville: data[i].Ville,
            Quartiers: data[i].Quartiers,
            code: data[i]["Nouveau Code Postal"]

          };

          allLcodPosQua.push(codPosQua);
        }
        $scope.codPosQuas = allLcodPosQua;
      });
    };

    $scope.doSearch('');


  })
