angular.module('starter.institutEcoJurSocController', [])

  .controller('institutEcoJurSocCtrl', function($scope, $http, SearchService) {

    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allInstitutEcoJurSoc = [];


      SearchService.searchInstitutEcoJurSoc(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var institutEcoJurSoc = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            Fax: data[i].Fax,
            Nom: data[i].Nom,
            Siteweb: data[i]["site web"],
            Téléphone: data[i]['Téléphone'],
            Ville: data[i].Ville

          };

          allInstitutEcoJurSoc.push(institutEcoJurSoc);
          // console.log(allInstitutEcoJurSoc);
        }
        $scope.institutEcoJurSocs = allInstitutEcoJurSoc;


      });
    };
    $scope.doSearch('');


  })


  .controller('institutEcoJurSocDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerInstitutEcoJurSoc = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getInstitutEcoJurSocById($stateParams.institutEcoJurSocId).then(function(response){
      $scope.institutEcoJurSoc= response.data.result.records[0];
      console.log($stateParams.institutEcoJurSocId);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      var allMarkerInstitutEcoJurSoc = [];
      map = $scope.mapConfig.control.getGMap();
      var GMapService = new google.maps.places.PlacesService(map);

      // console.log($scope.university.Nom);
      $scope.allMarkerInstitutEcoJurSoc =  allMarkerInstitutEcoJurSoc;

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
        allMarkerInstitutEcoJurSoc.push(marker);
        // console.log(allMarkerUniversity);
        // console.log(request);

      })

    }

  });

