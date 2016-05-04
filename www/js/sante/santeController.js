angular.module('starter.santeController', [])


  .controller('santeListeCtrl', function($scope) {

    $scope.santeListe = [

      {
        name: "La liste des hôpitaux",
        goTo:  "hopital"
      },
      {
        name: "Les listes des agences CNSS",
        goTo: "cnss"
      },
      {
        name: "Liste des centres de santé",
        goTo: "centreSante"
      },
      {
        name: "liste des medicaments",
        goTo: "medicament"
      }

    ];

  });
