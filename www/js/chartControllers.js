angular.module('starter.chartControllers', [])


  .controller("chartCtrl", function ($scope, $http) {

    var allTotals = [];

    function requestFromServer(city, onResultFound) {

      var prefixApi = '';
      if (window.cordova) {
        prefixApi = 'http://ckan-demo.ckan.io';
      }
      $http.get(prefixApi + '/api/action/datastore_search?resource_id=8d3a66f8-1ea4-426d-8ada-ca5c12612ba4&q=' + city + '&limit=3000').then(function (response) {
        onResultFound(response.data.result.records.length);
      });
    }

    function getAndStoreTotalForCity(city, onCityInfoStored) {
      var result = {
        name: city,
        total: 0
      };

      requestFromServer(city, function (totalSchools) {
        result.total = totalSchools;
        allTotals.push(result);

        onCityInfoStored(allTotals);
      });

    }

    function getTotalsForCities(cities, onAllResultsFound) {
      // load totals for each city from ckan
      for (var i = 0, max = cities.length; i < max; i++) {
        getAndStoreTotalForCity(cities[i], function (allTotals) {
          if (allTotals.length == cities.length) {
            onAllResultsFound(allTotals);
          }
        });
      }

      // on end: add it to the view
    }

    function setDataForPieChart(allTotals) {
      var listCities = [];
      var listNbrSchools = [];
      for (var i = 0; i < allTotals.length; i++) {
        listCities.push(allTotals[i].name);
        listNbrSchools.push(allTotals[i].total);
      }
      //console.error('Extract data and set to show chart from', allTotals);
      $scope.labels = listCities;
      $scope.data = listNbrSchools;
    }

    getTotalsForCities(["Marrakech", "Rabat", "Casablanca", "Fès", "tanger"], function (allTotals) {
      setDataForPieChart(allTotals);
    });


  });
