angular.module('starter.medicamentController', [])

  .controller('medicamentCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allMedicament = [];

      SearchService.searchMedicament(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var medicament = {
            _id: data[i]._id,
            CODE: data[i].CODE,
            NOM: data[i].NOM,
            DCI1: data[i].DCI1,
            DOSAGE1: data[i].DOSAGE1,
            UNITE_DOSAGE1: data[i].UNITE_DOSAGE1,
            FORME: data[i].FORME,
            PRESENTATION: data[i].PRESENTATION,
            PPV: data[i].PPV,
            PH: data[i].PH,
            PRIX_BR: data[i].PRIX_BR,
            PRINCEPS_GENERIQUE: data[i].PRINCEPS_GENERIQUE,
            TAUX_REMBOURSEMENT: data[i].TAUX_REMBOURSEMENT


          };

          allMedicament.push(medicament);
        }
        $scope.medicaments = allMedicament;

      });
    };

    $scope.doSearch('');


  })


  .controller('medicamentDetailCtrl',  function($scope, $http, $stateParams, SearchService){

    SearchService.getMedicamentById($stateParams.medicamentId).then(function(response){
      $scope.medicament= response.data.result.records[0];
    });

  });

