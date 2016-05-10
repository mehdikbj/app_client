angular.module('starter.expertController', [])

  .controller('expertCtrl', function($scope, $http, SearchService, $ionicLoading) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allExpert = [];
      $ionicLoading.show();

      SearchService.searchExpert(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var expert = {
            _id: data[i]._id,
            Email: data[i].Email,
            Tel: data[i].Tel,
            Nom: data[i]["Nom et Prénom"],
            specialite: data[i]["Spécialité"],
            ETABL: data[i]["Université et Établissement d’appartenance"]

          };

          allExpert.push(expert);
        }
        $ionicLoading.hide();
        $scope.experts = allExpert;

      });
    };

    $scope.doSearch('');


  })

  .controller('expertDetailCtrl',  function($scope, $http, $stateParams, SearchService){



    SearchService.getExpertById($stateParams.expertId).then(function(response){
      $scope.expert= response.data.result.records[0];
      console.log($scope.expert);
    });



  });
