angular.module('starter.tourismeController', [])


  .controller('tourismeListeCtrl', function($scope) {

    $scope.tourismeListe = [

      {
        name: "Annuaire des agences de voyages",
        goTo:  "agenceVoy"
      },
      {
        name: "Annuaire des guides touristiques",
        goTo: "institutTechSci"
      },
      {
        name: "Liste des établissements d'hébergement touristique",
        goTo: "listEcole"
      }

    ];

  });
