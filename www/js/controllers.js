angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('agencesCtrl', function($scope, $http) {
  $scope.agences=[];
  $scope.mavariable="salut";
  $http.get('/api/action/datastore_search?resource_id=9079d1fd-2425-4a31-9557-0b056146ff28')
          .then(function(response){
            console.log(response);
            $scope.agences = response.data.result.records;
          });
});
