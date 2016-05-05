angular.module('starter.rdController', [])


  .controller('rdListCtrl', function($scope) {

    $scope.rdListe = [

      {
        name: "La liste des experts scientifiques du CNRST",
        goTo:  "expert"
      },

      {
        name: "Statistiques du FSI - Intilak",
        goTo:  "chartFsi"
      },

      {
        name: "Statistiques du FSI - Tatwir",
        goTo:  "tatwir"
      }

    ];

  });
