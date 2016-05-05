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

      getInstitutTechSciById: function (Id) {
        return CkanHttp.get('/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"063ce060-053f-47c9-b162-20f1e98da504"%20WHERE%20_id%20=%20'+Id);
      },


      getCpgeById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b1546e9f-9282-4fd4-be16-06243f1dbd08"%20WHERE%20_id%20=%20'+Id);
      },

      getBtsById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"20316b00-3580-4714-8888-a765e18e23ee"%20WHERE%20_id%20=%20'+Id);
      },

      getEcolePrimById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"73edf0a3-1b09-422c-a580-35b3d145e4db"%20WHERE%20_id%20=%20'+Id);
      },

      getEcoleCollegById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"73edf0a3-1b09-422c-a580-35b3d145e4db"%20WHERE%20_id%20=%20'+Id);
      },

      getEcoleLycById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"8d19050a-bce3-4684-8f8e-b4f9c17a3272"%20WHERE%20_id%20=%20'+Id);
      },

      getAgenceVoyById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b3a6f721-ecd1-41c7-8ac8-462e00714172"%20WHERE%20_id%20=%20'+Id);
      },

      getGuideTourById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"bb1c9581-e1d3-459d-b114-49311dcfe640"%20WHERE%20_id%20=%20'+Id);
      },

      getHotelById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b5b98b4f-0870-40b4-875d-f20b437d3b91"%20WHERE%20_id%20=%20'+Id);
      },

      getHopitalById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"8efb414e-e06b-4279-88ad-952a4ea02d5d"%20WHERE%20_id%20=%20'+Id);
      },

      getAgenceCnssById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b55fabec-952c-4ac8-b65d-95306558a2fa"%20WHERE%20_id%20=%20'+Id);
      },

      getCentreSanteById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"1753adc7-d601-4637-b69a-32f1e7640fd4"%20WHERE%20_id%20=%20'+Id);
      },

      getMedicamentById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"b518e135-c95a-4b72-8134-c706506212cd"%20WHERE%20_id%20=%20'+Id);
      },

      getDispMedById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"f0668e90-f690-4115-b563-e7dbc2b2a8e7"%20WHERE%20_id%20=%20'+Id);
      },

      getExpertById: function (Id) {
        return CkanHttp.get( '/api/action/datastore_search_sql?sql=SELECT%20*%20from%20"54a44500-4a30-4b11-bfaa-cd1f23a7424c"%20WHERE%20_id%20=%20'+Id);
      },


      searchSchool: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8d3a66f8-1ea4-426d-8ada-ca5c12612ba4&q='+search+'&offset=0&limit=700');
      },

      searchEcolePrim: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=73edf0a3-1b09-422c-a580-35b3d145e4db&q='+search+'&offset=0&limit=700');
      },

      searchEcoleColleg: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=eb66a7fd-2cca-4bc4-8408-d0d282b53a41&q='+search+'&offset=0&limit=700');
      },

      searchEcoleLyc: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8d19050a-bce3-4684-8f8e-b4f9c17a3272&q='+search+'&offset=0&limit=700');
      },

      searchAgencies: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=3615a911-1915-45fc-a501-ede483e4b0c7');

      },

      searchHospitals: function () {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&limit=380');

      },

      searchInstitutEcoJurSoc: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=c790fd84-1dee-432e-b7f2-b3017dbb25a4&q='+search+'&limit=14');

      },

      searchInstitutTechSci: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=063ce060-053f-47c9-b162-20f1e98da504&q='+search+'&limit=24');

      },

      searchCpge: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b1546e9f-9282-4fd4-be16-06243f1dbd08&q='+search+'&limit=22');

      },

      searchBts: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=20316b00-3580-4714-8888-a765e18e23ee&q='+search+'&limit=30');

      },

      searchUniversity: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=39c1431c-6d50-4831-bfeb-b1efb72220ef&q='+search+'&limit=16');

      },

      searchAgenceVoy: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b3a6f721-ecd1-41c7-8ac8-462e00714172&q='+search+'&offset=0&limit=700');

      },

      searchGuideTour: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=bb1c9581-e1d3-459d-b114-49311dcfe640&q='+search+'&offset=0&limit=700');

      },

      searchHotel: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b5b98b4f-0870-40b4-875d-f20b437d3b91&q='+search+'&offset=0&limit=700');

      },

      searchHopital: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=8efb414e-e06b-4279-88ad-952a4ea02d5d&q='+search+'&offset=0&limit=142');

      },

      searchAgenceCnss: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b55fabec-952c-4ac8-b65d-95306558a2fa&q='+search+'&offset=0&limit=142');

      },

      searchCentreSante: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=1753adc7-d601-4637-b69a-32f1e7640fd4&q='+search+'&offset=0&limit=142');

      },

      searchMedicament: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=b518e135-c95a-4b72-8134-c706506212cd&q='+search+'&offset=0&limit=142');

      },

      searchDispMed: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=f0668e90-f690-4115-b563-e7dbc2b2a8e7&q='+search+'&offset=0&limit=142');

      },

      searchExpert: function (search) {
        return CkanHttp.get( '/api/action/datastore_search?resource_id=54a44500-4a30-4b11-bfaa-cd1f23a7424c&q='+search+'&offset=0&limit=142');

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
