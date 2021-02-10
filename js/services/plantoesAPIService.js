angular
  .module("plantaoSti")
  .controller("plantoesAPI", function ($http, config) {
    var _getPlantoes = function () {
      return $http.get(config.baseUrl + "/plantoes");
    };

    var _getPlantao = function (id) {
      return $http.get(config.baseUrl + "/plantoes/" + id);
    };

    return {
      getPlantoes: _getPlantoes,
      getPlantao: _getPlantao,
    };
  });
