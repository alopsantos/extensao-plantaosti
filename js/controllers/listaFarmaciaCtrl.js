angular
  .module("plantaoSti")
  .controller("listaFarmaciaCtrl", function ($scope, farmacia) {
    $scope.app = "Lista de Farmácias";
    $scope.farmacia = farmacia.data;
  });
