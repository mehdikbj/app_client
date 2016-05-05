angular.module('starter.chartFsiController', [])

  .controller("chartFsiCtrl", function ($scope) {

    $scope.labels =["Alam jadid", "DMD lab", "E-commerce", "Eskuila", "Flexible", "Masarat", "Meolink","Netpeas", "Oritech"];

    $scope.data = [
      [1061500, 1109356, 1000000, 1095000, 945762, 1091772, 1040020, 1091680, 1016500],
      [955350, 998420, 900000, 985500, 851185, 982594, 936018, 982512, 914850]
    ];

    $scope.labelsA =["Atals génomics", "Mobiblanc", "E-Greendizer", "Aysa FMCG", "ERDK", "Quelmenu", "Puzzelige","VBS", "Safedimat"];

    $scope.dataA = [
      [1060714, 1094200, 1111000, 1110910, 1081000, 1072985, 1077500, 1108700, 1109500],
      [954642, 984780, 999900, 1110910, 1081000, 965686, 969750, 997830, 998550]
    ];


    $scope.labelsB =["Foood Up", "Ecolink", "Data-Sonar","CEM-Artcall" ];

    $scope.dataB = [
      [1101800, 1110400, 1100000,999000],
      [991620, 999360, 990000, 899100]
    ];


  })

