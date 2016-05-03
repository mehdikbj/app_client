angular.module('starter.institutTechSciController', [])

  .controller('institutTechSciCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';

    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allInstitutTechSci = [];


      SearchService.searchInstitutTechSci(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var institutTechSci = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            Fax: data[i].Fax,
            Nom: data[i].Nom,
            Siteweb: data[i]["site web"],
            Téléphone: data[i]['Téléphone'],
            Ville: data[i].Ville

          };

          allInstitutTechSci.push(institutTechSci);
        }
        $scope.institutTechScis = allInstitutTechSci;


      });
    };
    $scope.doSearch('');


  })


  .controller('institutTechSciDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerInstitutTechSci = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getInstitutTechSciById($stateParams.institutTechSciId).then(function(response){
      $scope.institutTechSci= response.data.result.records[0];
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      var allMarkerInstitutTechSci = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);

      // console.log($scope.university.Nom);
      $scope.allMarkerInstitutTechSci =  allMarkerInstitutTechSci;

      var request = {
        location: map.getCenter(),
        radius: '500',
        query: 'al bachir marrakech'
      };

      GMapService.textSearch(request, function (results, status){
        var marker = {
          id: results[0].id,
          coord: {
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          }
        };
        allMarkerInstitutTechSci.push(marker);
        // console.log(allMarkerUniversity);
        // console.log(request);

      })

    }

  });

