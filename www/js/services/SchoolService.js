angular.module('starter.services')
  .factory('SchoolService', function ($http, CkanHttp) {


    var service = {
      getDataById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"8d3a66f8-1ea4-426d-8ada-ca5c12612ba4"%20WHERE%20_id%20=%20'+Id);
      },

      getDataByUrl: function (url) {
        return CkanHttp.get( url);
      }


    };

    return service;
  });



angular.module('starter.services')
  .factory('CkanHttp', function ($http) {


    var service = {
      get: function (url) {

        var prefixApi ='';

        if(window.cordova){
          prefixApi = 'http://ckan-demo.ckan.io';
        }

        return $http.get( prefixApi + url);
      }

    };

    return service;
  });
