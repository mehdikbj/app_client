angular.module('starter.centreAppelController', [])

  .controller('centreAppelCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allCentreAppel = [];
      SearchService.searchCentreAppel(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var centreAppel = {
            _id: data[i]._id,
            Nom: data[i]["Nom de l'entité"],
            Groupe: data[i].Groupe,
            NomCentre: data[i]["Nom du centre d'appels"],
            TEL: data[i]["Numéro du centre d'appels"],
            Secteur: data[i].Secteur
          };

          allCentreAppel.push(centreAppel);
        }
        $scope.centreAppels = allCentreAppel;

      });
    };

    $scope.doSearch('');


  })


  .controller('CentreAppelDetailCtrl',  function($scope, $http, $stateParams, SearchService){



    SearchService.getCentreAppelById($stateParams.centreAppelId).then(function(response){
      $scope.centreAppel= response.data.result.records[0];
      console.log($stateParams.centreAppelId);
    });

  });


