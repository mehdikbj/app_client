angular.module('starter.hotelController', [])

  .controller('hotelCtrl', function($scope, $http, SearchService) {
    $scope.searchTxt='';


    $scope.doSearch= function (searchTxt) {
      console.log(searchTxt);
      var allHotel = [];
      SearchService.searchHotel(searchTxt).then(function (response) {

        data = response.data.result.records;
        // console.log(data);

        for (var i = 0; i < data.length; i++) {
          var hotel = {
            _id: data[i]._id,
            Adresse: data[i].Adresse,
            CAT: data[i]['Catégorie/classement'],
            Province: data[i].Province,
            mail: data[i]['e-mail'],
            TEL: data[i]['Tél'],
            Nom: data[i]['Hébergement'],
            Ville: data[i].Ville,
            Fax: data[i].Fax

          };

          allHotel.push(hotel);
        }
        $scope.hotels = allHotel;

      });
    };

    $scope.doSearch('');


  })


  .controller('hotelDetailCtrl',  function($scope, $http, $stateParams, SearchService){
    var map;
    $scope.allMarkerHotel = [];

    $scope.mapConfig = {
      center: {
        latitude: 33.5910948,
        longitude: -7.6137281
      },
      zoom: 5,
      control: {}
    };


    SearchService.getHotelById($stateParams.hotelId).then(function(response){
      $scope.hotel= response.data.result.records[0];
      console.log($scope.hotel);
    });

    $scope.$on("$ionicView.enter", function(event, data){
      initialize();
    });

    function  initialize () {

      SearchService.getHotelById($stateParams.hotelId).then(function(response){
        var findInMap=  response.data.result.records[0]['Hébergement']+' ' + response.data.result.records[0].Province;

        var allMarkerHotel = [];
        map = $scope.mapConfig.control.getGMap();
        var GMapService = new google.maps.places.PlacesService(map);

        // console.log($scope.university.Nom);
        $scope.allMarkerHotel =  allMarkerHotel;

        var request = {
          location: map.getCenter(),
          radius: '500',
          query: findInMap
        };

        GMapService.textSearch(request, function (results, status){
          var marker = {
            id: results[0].id,
            coord: {
              longitude: results[0].geometry.location.lng(),
              latitude: results[0].geometry.location.lat()
            }
        };
          console.log(marker);
          allMarkerHotel.push(marker);
          // console.log(allMarkerUniversity);
          // console.log(request);

        })
        });

    }

  });

