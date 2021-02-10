angular
  .module("plantaoSti")
  .controller("farmaciasAPI", function ($http, config) {
    var _getFarmacias = function () {
      return $http.get(config.baseUrl + "/farmacias");
    };

    var _getFarmacia = function (id) {
      return $http.get(config.baseUrl + "/farmacias/" + id);
    };

    return {
      getFarmacias: _getFarmacias,
      getFarmacia: _getFarmacia,
    };
  });