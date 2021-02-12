angular.module("plantaoSti").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {

	$scope.contato = contato.data;
});