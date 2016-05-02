angular.module('starter.services')
  .factory('SearchService', function ($http, CkanHttp) {


    var service = {
      getDataById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"8d3a66f8-1ea4-426d-8ada-ca5c12612ba4"%20WHERE%20_id%20=%20'+Id);
      },

      getUniversityById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"39c1431c-6d50-4831-bfeb-b1efb72220ef"%20WHERE%20_id%20=%20'+Id);
      },

      getInstitutEcoJurSocById: function (Id) {
        return CkanHttp.get('/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"c790fd84-1dee-432e-b7f2-b3017dbb25a4"%20WHERE%20_id%20=%20'+Id);
      },

      getCpgeById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b1546e9f-9282-4fd4-be16-06243f1dbd08"%20WHERE%20_id%20=%20'+Id);
      },

      getBtsById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"20316b00-3580-4714-8888-a765e18e23ee"%20WHERE%20_id%20=%20'+Id);
      },

      searchSchool: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8d3a66f8-1ea4-426d-8ada-ca5c12612ba4&q='+search+'&offset=0&limit=700');
      },

      searchAgencies: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=3615a911-1915-45fc-a501-ede483e4b0c7');

      },

      searchHospitals: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&limit=380');

      },

      searchInstitutEcoJurSoc: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=c790fd84-1dee-432e-b7f2-b3017dbb25a4&limit=14');

      },

      searchCpge: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b1546e9f-9282-4fd4-be16-06243f1dbd08&limit=22');

      },

      searchBts: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=20316b00-3580-4714-8888-a765e18e23ee&limit=30');

      },

      searchUniversity: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=39c1431c-6d50-4831-bfeb-b1efb72220ef&limit=16');

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
