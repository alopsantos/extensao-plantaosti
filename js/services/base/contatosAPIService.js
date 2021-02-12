angular.module("plantaoSti").factory("contatosAPI", function ($http, config) {
	var _getPlantoes = function () {
		return $http.get(config.baseUrl + "/farmacias");
	};

	var _getPlantao = function (id) {
		// PHP: $http.get(config.baseUrl + "/contatosBackend.php?id=" + id)
		return $http.get(config.baseUrl + "/farmacias/" + id);
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "/farmacias", contato);
	};

	return {
		getContatos: _getPlantoes,
		getContato: _getPlantao
	};
});