// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js', 'starter.controllers','starter.geoControllers','starter.geoplacesControllers', 'uiGmapgoogle-maps', 'starter.chartControllers','starter.services', 'starter.listSchoolController','starter.educationController','starter.universityController','starter.institutEcoJurSocController','starter.cpgeController', 'starter.btsController' ])



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

    .state('app.detailInstitutEcoJurSoc', {
      url: '/education/detailInstitutEcoJurSoc/:institutEcoJurSocId',
      views: {
        'menuContent': {
          templateUrl: 'templates/education/detailInstitutEcoJurSoc.html',
          controller: 'institutEcoJurSocDetailCtrl'
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
