angular.module('starter.guideTourController', [])

  .controller('guideTourCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      var allGuideTour = [];

      SearchService.searchGuideTour(searchTxt).then(function (response) {

        data = response.data.result.records;

        for (var i = 0; i < data.length; i++) {
          var guideTour = {
            _id: data[i]._id,
            Ville: data[i].Ville,
            Nom: data[i].Nom,
            Prénom: data[i]['Prénom'],
            langue: data[i]['Langue de travail'],
            Catégorie: data[i]['Catégorie']

          };

          allGuideTour.push(guideTour);
        }
        $scope.guideTours = allGuideTour;

      });
    };

    $scope.doSearch('');


  })

  .controller('guideTourDetailCtrl',  function($scope, $http, $stateParams, SearchService){



    SearchService.getGuideTourById($stateParams.guideTourId).then(function(response){
      $scope.guideTour= response.data.result.records[0];
    });



  });

