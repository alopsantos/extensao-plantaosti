angular
  .module("plantaoSti")
  .controller("listaPlantoesCtrl", function ($scope, plantoes) {
    $scope.app = "Lista de Plantoes";
    $scope.plantoes = plantoes.data;
  });
