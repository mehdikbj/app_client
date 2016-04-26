angular.module('starter.chartControllers', [])


  .controller("chartCtrl", function ($scope, $http, CityService) {

    CityService.getTotalsForCities(["Marrakech", "Rabat", "Casablanca", "Fès", "tanger"], function (allTotals) {
      var listCities = [];
      var listNbrSchools = [];
      for (var i = 0; i < allTotals.length; i++) {
        listCities.push(allTotals[i].name);
        listNbrSchools.push(allTotals[i].total);
      }
      //console.error('Extract data and set to show chart from', allTotals);
      $scope.labels = listCities;
      $scope.data = listNbrSchools;
    });

  })
