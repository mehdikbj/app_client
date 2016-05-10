angular.module('starter.dispMedController', [])

  .controller('dispMedCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allDispMed = [];
      $ionicLoading.show();

      SearchService.searchDispMed(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var dispMed = {
            _id: data[i]._id,
            CODE: data[i]["Code CNOPS"],
            ANAM: data[i]["code ANAM"],
            DCI1: data[i]["libellé complet"],
            DOSAGE1: data[i]["Tarif National de Référence"]
          };

          allDispMed.push(dispMed);
        }
        $ionicLoading.hide();
        $scope.dispMeds = allDispMed;

      });
    };

    $scope.doSearch('');


  })


  .controller('dispMedDetailCtrl',  function($scope, $http, $stateParams, SearchService){

    SearchService.getDispMedById($stateParams.dispMedId).then(function(response){
      $scope.dispMed= response.data.result.records[0];
      console.log($scope.dispMed);
    });

  });

