angular.module('starter.lienGovController', [])

  .controller('lienGovCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allLienGov = [];
      SearchService.searchLienGov(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var lienGov = {
            _id: data[i]._id,
            lien: data[i].lien,
            Type: data[i].Type,
            Statut: data[i].Statut,
            Cible: data[i].Cible,
            intitule: data[i]["Intitulé"],
            Porteur: data[i].Porteur,
            propriete: data[i]["Priorité"]

          };

          allLienGov.push(lienGov);
        }
        $scope.lienGovs = allLienGov;

      });
    };

    $scope.doSearch('');


  })

  .controller('lienGovDetailCtrl',  function($scope, $http, $stateParams, SearchService){



    SearchService.getLienGovById($stateParams.lienGovId).then(function(response){
      $scope.lienGov= response.data.result.records[0];
      console.log($scope.lienGov);
    });
    
  });
