angular.module('starter.societeController', [])


  .controller('societListeCtrl', function($scope) {

    $scope.societeListe = [

      {
        name: "Liens vers les services eGov",
        goTo:  "lienGov"
      },


      {
        name: "Centres d'appels des administrations",
        goTo: "centreAppel"
      },

      {
        name: "Tele-Service",
        goTo: "teleService"
      },

      {
        name: "Population du Maroc par année",
        goTo: "population"
      }

    ];

  });
