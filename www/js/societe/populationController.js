angular.module('starter.populationController', [])


  .controller("populationCtrl", function ($scope) {

    $scope.labels = ['1995', '1998', '2000', '2002', '2004', '2006', '2008', '2011'];
    $scope.series = ['Masculin', 'Féminin'];

    $scope.data = [
      [13127, 13588, 14049, 14512, 14972, 14960, 15246,16011 ],
      [13259, 13722, 14189, 14658, 15116, 15212, 15595, 16234 ]
    ];

    $scope.labelsA = ['1995', '1998', '2000', '2002', '2004', '2006', '2008', '2011'];
    $scope.seriesA = ['Total','Total'];

    $scope.dataA = [
      [26386, 27310, 27775, 28705, 29631, 29892, 31177,32245],
      [26386, 27310, 27775, 28705, 29631, 29892, 31177,32245]

    ];


  })
