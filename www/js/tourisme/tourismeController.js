angular.module('starter.tourismeController', [])


  .controller('tourismeListeCtrl', function($scope) {

    $scope.tourismeListe = [

      {
        name: "Annuaire des agences de voyages",
        goTo:  "agenceVoy"
      },
      {
        name: "Annuaire des guides touristiques",
        goTo: "guideTour"
      },
      {
        name: "Etablissements d'hébergement touristique",
        goTo: "hotel"
      }

    ];

  });
