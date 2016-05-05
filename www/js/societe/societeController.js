angular.module('starter.societeController', [])


  .controller('societListeCtrl', function($scope) {

    $scope.societeListe = [

      {
        name: "Liens vers les services eGov",
        goTo:  "lienGov"
      },


      {
        name: "Dispositifs médicaux admis au rembourssement",
        goTo: "dispMed"
      }

    ];

  });
