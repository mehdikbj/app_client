angular.module('starter.cartographieController', [])


  .controller('cartographieListCtrl', function($scope) {

    $scope.cartographieListe = [

      {
        name: "Codes postaux des localités",
        goTo:  "codPosLoc"
      },
      {
        name: "Codes postaux des quartiers",
        goTo: "institutTechSci"
      },

      {
        name: "Les Universités Marocaines",
        goTo: "university"
      }

    ];

  });
