angular.module('starter.educationController', [])


  .controller('educListCtrl', function($scope) {

    $scope.educationListe = [

      {
        name: "Etablissements de formation des cadres-Formation économique juridique administrative et sociale 2014",
        goTo:  "institutEcoJurSoc"
      },
      {
        name: "Etablissements de formation des cadres-Formation scientifique et technique 2014",
        goTo: "institutTechSci"
      },
      {
        name: "Liste des établissements privés",
        goTo: "listEcole"
      },
      {
        name: "BTS publics",
        goTo: "bts"
      },
      {
        name: "CPGE publics",
        goTo: "cpge"
      },
      {
        name: "Ecoles Primaires pubiques",
        goTo: "ecolePrim"
      },
      {
        name: "Les Colleges publics",
        goTo: "ecoleColleg"
      },
      {
        name: "Les Lycées publics",
        goTo: "ecoleLyc"
      },
      {
        name: "Les Universités Marocaines",
        goTo: "university"
      }

    ];

  });
