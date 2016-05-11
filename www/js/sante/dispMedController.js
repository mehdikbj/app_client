angular.module('starter.dispMedController', [])

  .controller('dispMedCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allDispMed = [];

      SearchService.searchDispMed(searchTxt).then(function (response) {

        data = response.data.result.records;

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
        $scope.dispMeds = allDispMed;

      });
    };

    $scope.doSearch('');


  })


  .controller('dispMedDetailCtrl',  function($scope, $http, $stateParams, SearchService){

    SearchService.getDispMedById($stateParams.dispMedId).then(function(response){
      $scope.dispMed= response.data.result.records[0];
    });

  });

