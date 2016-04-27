angular.module('starter.services')
  .factory('SchoolService', function ($http, CkanHttp) {


    var service = {
      getDataById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"8d3a66f8-1ea4-426d-8ada-ca5c12612ba4"%20WHERE%20_id%20=%20'+Id);
      },

      searchSchool: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8d3a66f8-1ea4-426d-8ada-ca5c12612ba4&q='+search+'&offset=0&limit=700');
      },

      searchAgencies: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=3615a911-1915-45fc-a501-ede483e4b0c7');

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
