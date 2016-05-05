// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js', 'starter.controllers','starter.geoControllers','starter.geoplacesControllers', 'uiGmapgoogle-maps', 'starter.chartControllers','starter.services', 'starter.listSchoolController','starter.educationController','starter.universityController','starter.institutEcoJurSocController','starter.cpgeController', 'starter.btsController','starter.institutTechSciController', 'starter.ecolePrimController', 'starter.ecoleCollegController','starter.ecoleLycController', 'starter.tourismeController', 'starter.agenceVoyController', 'starter.guideTourController', 'starter.hotelController', 'starter.hopitalController' , 'starter.santeController', 'starter.agenceCnssController', 'starter.centreSanteController', 'starter.medicamentController', 'starter.dispMedController', 'starter.rdController', 'starter.expertController', 'starter.chartFsiController', 'starter.chartTatwirController'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.agences', {
      url: '/agences',
      views: {
        'menuContent': {
          templateUrl: 'templates/agences.html',
          controller: 'agencesCtrl'
        }
      }
    })

     .state('app.hopital', {
      url: '/hopital',
      views: {
        'menuContent': {
          templateUrl: 'templates/hopital.html',
          controller: 'hopiCtrl'
        }
      }
    })

    .state('app.educationElement', {
      url: '/education/educationElement',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/educationElement.html',
          controller: 'educListCtrl'
        }
      }
    })

    .state('app.listEcole', {
      url: '/education/listEcole',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/listEcole.html',
          controller: 'listItemCtrl'
        }
      }
    })

    .state('app.listEcoleDetail', {
      url: '/education/detailEcole/:ecoleId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailEcole.html',
          controller: 'EcoleDetailCtrl'
        }
      }
    })
    .state('app.detailUniversity', {
      url: '/education/detailUniversity/:universityId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailUniversity.html',
          controller: 'universityDetailCtrl'
        }
      }
    })

    .state('app.university', {
      url: '/education/university',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/university.html',
          controller: 'listUniversityCtrl'
        }
      }
    })

    .state('app.cpge', {
      url: '/education/cpge',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/cpge.html',
          controller: 'cpgeCtrl'
        }
      }
    })

    .state('app.detailCpge', {
      url: '/education/detailCpge/:cpgeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailCpge.html',
          controller: 'cpgeDetailCtrl'
        }
      }
    })

    .state('app.bts', {
      url: '/education/bts',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/bts.html',
          controller: 'btsCtrl'
        }
      }
    })

    .state('app.detailBts', {
      url: '/education/detailBts/:btsId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailBts.html',
          controller: 'btsDetailCtrl'
        }
      }
    })

    .state('app.institutEcoJurSoc', {
      url: '/education/institutEcoJurSoc',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/institutEcoJurSoc.html',
          controller: 'institutEcoJurSocCtrl'
        }
      }
    })

    .state('app.detailInstitutTechSci', {
      url: '/education/detailInstitutTechSci/:institutTechSciId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailInstitutTechSci.html',
          controller: 'institutTechSciDetailCtrl'
        }
      }
    })

    .state('app.institutTechSci', {
      url: '/education/institutTechSci',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/institutTechSci.html',
          controller: 'institutTechSciCtrl'
        }
      }
    })

    .state('app.detailInstitutEcoJurSoc', {
      url: '/education/detailInstitutEcoJurSoc/:institutEcoJurSocId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailInstitutEcoJurSoc.html',
          controller: 'institutEcoJurSocDetailCtrl'
        }
      }
    })

    .state('app.ecolePrim', {
      url: '/education/ecolePrim',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/ecolePrim.html',
          controller: 'ecolePrimCtrl'
        }
      }
    })

    .state('app.detailEcolePrim', {
      url: '/education/detailEcolePrim/:ecolePrimId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailEcolePrim.html',
          controller: 'EcolePrimDetailCtrl'
        }
      }
    })

    .state('app.ecoleColleg', {
      url: '/education/ecoleColleg',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/ecoleColleg.html',
          controller: 'ecoleCollegCtrl'
        }
      }
    })

    .state('app.detailEcoleColleg', {
      url: '/education/detailEcoleColleg/:ecoleCollegId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailEcoleColleg.html',
          controller: 'EcoleCollegDetailCtrl'
        }
      }
    })

    .state('app.ecoleLyc', {
      url: '/education/ecoleLyc',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/ecoleLyc.html',
          controller: 'ecoleLycCtrl'
        }
      }
    })

    .state('app.detailEcoleLyc', {
      url: '/education/detailEcoleLyc/:ecoleLycId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailEcoleLyc.html',
          controller: 'EcoleLycDetailCtrl'
        }
      }
    })

    .state('app.tourismeElement', {
      url: '/tourisme/tourismeElement',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/tourismeElement.html',
          controller: 'tourismeListeCtrl'
        }
      }
    })

    .state('app.agenceVoy', {
      url: '/tourisme/agenceVoy',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/agenceVoy.html',
          controller: 'agenceVoyCtrl'
        }
      }
    })

    .state('app.detailAgenceVoy', {
      url: '/tourisme/detailAgenceVoy/:agenceVoyId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/detailAgenceVoy.html',
          controller: 'agenceVoyDetailCtrl'
        }
      }
    })

    .state('app.guideTour', {
      url: '/tourisme/guideTour',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/guideTour.html',
          controller: 'guideTourCtrl'
        }
      }
    })

    .state('app.detailGuideTour', {
      url: '/tourisme/detailGuideTour/:guideTourId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/detailGuideTour.html',
          controller: 'guideTourDetailCtrl'
        }
      }
    })

    .state('app.hotel', {
      url: '/tourisme/hotel',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/hotel.html',
          controller: 'hotelCtrl'
        }
      }
    })

    .state('app.detailHotel', {
      url: '/tourisme/detailHotel/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/tourisme/detailHotel.html',
          controller: 'hotelDetailCtrl'
        }
      }
    })

    .state('app.santeElement', {
      url: '/sante/santeElement',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/santeElement.html',
          controller: 'santeListeCtrl'
        }
      }
    })

    .state('app.hopitals', {
      url: '/sante/hopital',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/hopital.html',
          controller: 'hopitalCtrl'
        }
      }
    })

    .state('app.detailHopital', {
      url: '/sante/detailHopital/:hopitalId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/detailHopital.html',
          controller: 'hopitalDetailCtrl'
        }
      }
    })

    .state('app.cnss', {
      url: '/sante/cnss',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/cnss.html',
          controller: 'agenceCnssCtrl'
        }
      }
    })

    .state('app.detailCnss', {
      url: '/sante/detailCnss/:cnssId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/detailCnss.html',
          controller: 'agenceCnssDetailCtrl'
        }
      }
    })

    .state('app.centreSante', {
      url: '/sante/centreSante',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/centreSante.html',
          controller: 'centreSanteCtrl'
        }
      }
    })

    .state('app.detailCentreSante', {
      url: '/sante/detailCentreSante/:centreSanteId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/detailCentreSante.html',
          controller: 'centreSanteDetailCtrl'
        }
      }
    })

    .state('app.medicament', {
      url: '/sante/medicament',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/medicament.html',
          controller: 'medicamentCtrl'
        }
      }
    })

    .state('app.detailMedicament', {
      url: '/sante/detailMedicament/:medicamentId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/detailMedicament.html',
          controller: 'medicamentDetailCtrl'
        }
      }
    })

    .state('app.dispMed', {
      url: '/sante/dispMed',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/dispMed.html',
          controller: 'dispMedCtrl'
        }
      }
    })

    .state('app.detailDispMed', {
      url: '/sante/detailDispMed/:dispMedId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sante/detailDispMed.html',
          controller: 'dispMedDetailCtrl'
        }
      }
    })

    .state('app.rdElement', {
      url: '/RD/rdElement',
      views: {
        'menuContent': {
          templateUrl: 'templates/RD/rdElement.html',
          controller: 'rdListCtrl'
        }
      }
    })

    .state('app.expert', {
      url: '/RD/expert',
      views: {
        'menuContent': {
          templateUrl: 'templates/RD/expert.html',
          controller: 'expertCtrl'
        }
      }
    })

    .state('app.detailExpert', {
      url: '/RD/detailExpert/:expertId',
      views: {
        'menuContent': {
          templateUrl: 'templates/RD/detailExpert.html',
          controller: 'expertDetailCtrl'
        }
      }
    })

    .state('app.chartFsi', {
      url: '/RD/chartFsi',
      views: {
        'menuContent': {
          templateUrl: 'templates/RD/chartFsi.html',
          controller: 'chartFsiCtrl'
        }
      }
    })

    .state('app.tatwir', {
      url: '/RD/tatwir',
      views: {
        'menuContent': {
          templateUrl: 'templates/RD/tatwir.html',
          controller: 'chartTatwirCtrl'
        }
      }
    })

    .state('app.chart', {
      url: '/chart',
      views: {
        'menuContent': {
          templateUrl: 'templates/chart.html',
          controller: 'chartCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/agences');
});
