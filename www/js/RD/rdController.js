angular.module('starter.rdController', [])


  .controller('rdListCtrl', function($scope) {

    $scope.rdListe = [

      {
        name: "La liste des experts scientifiques du CNRST",
        goTo:  "expert"
      }



    ];

  });
