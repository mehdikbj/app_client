angular.module('starter.teleServiceController', [])

  .controller('teleServiceCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allTeleService = [];

      SearchService.searchTeleService(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var teleService = {
            _id: data[i]._id,
            Nom: data[i]["Nom de l'entité"],
            Groupe: data[i].Groupe,
            NomTel: data[i]["Nom du Télé-Service"],
            Description: data[i]["Description du Télé-Service"],
            Adresse: data[i]["Adresse d’accès"],
            Menu: data[i]["Menu ou rubrique sur le site"],
            Niveau: data[i]["Niveau de dématérialisation"],
            Nature: data[i]["Nature du Télé-Service"],
            Secteur: data[i].Secteur
          };

          allTeleService.push(teleService);
        }
        $scope.teleServices = allTeleService;

      });
    };

    $scope.doSearch('');


  })

  .controller('teleServiceDetailCtrl',  function($scope, $http, $stateParams, SearchService){



    SearchService.getTeleServiceById($stateParams.teleServiceId).then(function(response){
      $scope.teleService= response.data.result.records[0];
    });

  });

