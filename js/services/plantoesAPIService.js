angular.module("plantaoSti").factory("plantoesAPI", function ($http, config) {
	var _getPlantao = function (id) {
		return $http.get(config.baseUrl + "/plantoes/" + id);
	};

	var _getPlantoes = function () {
		return $http.get(config.baseUrl + "/plantoes");
	};

	return {
		getPlantoes: _getPlantoes,
		getPlantao: _getPlantao
	};
});