angular.module("plantaoSti").service("plantoesAPI", function ($http, config) {
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/plantoes");
	};
});