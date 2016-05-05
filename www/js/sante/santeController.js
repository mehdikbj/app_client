angular.module('starter.santeController', [])


  .controller('santeListeCtrl', function($scope) {

    $scope.santeListe = [

      {
        name: "La liste des hôpitaux",
        goTo:  "hopital"
      },
      {
        name: "La listes des agences CNSS",
        goTo: "cnss"
      },
      {
        name: "La liste des centres de santé",
        goTo: "centreSante"
      },
      {
        name: "La liste des medicaments",
        goTo: "medicament"
      },

      {
        name: "Dispositifs médicaux admis au rembourssement",
        goTo: "dispMed"
      }

    ];

  });
