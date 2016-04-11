angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})



// .controller('EventsCtrl', function($scope) {
//   $scope.events=[
//    {
//     id: 1,
//     name: "Agence poste du maroc",
//    },

//    {
//     id: 2,
//     name: "Agence de location",
//    }

//   ];
// })



.controller('EventsCtrl', function($scope, $http) {
  $scope.events=[];
  $http.get('/api/action/datastore_search?resource_id=9079d1fd-2425-4a31-9557-0b056146ff28')
          .then(function(response){
            console.log(response);
            $scope.events = response.data.result.records;
          });
})




.controller('EventCtrl', function($scope, $stateParams) {
  $scope.event=
   {
    id: 1,
    name: "mehdi1",

   },

   {
    id: 2,
    name: "Hamza",
   };
});



// .controller('EventCtrl', function($scope, $stateParams) {
//   $scope.event=[];
//   $http.get('/api/action/datastore_search?resource_id=9079d1fd-2425-4a31-9557-0b056146ff28')
//           .then(function(response){
//             console.log(response);
//             });
   

  
// });


