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
        name: "Liste des établissements publics BTS (2013 - 2014)",
        goTo: "bts"
      },
      {
        name: "Liste des établissements publics CPGE (2013 - 2014)",
        goTo: "cpge"
      },
      {
        name: "primaire publi",
        goTo: "ecolePrim"
      },
      {
        name: "college publi",
        goTo: "ecoleColleg"
      },
      {
        name: "lycées publics",
        goTo: "listEcole"
      },
      {
        name: "Universités Marocaines 2014",
        goTo: "university"
      }

    ];

  });
