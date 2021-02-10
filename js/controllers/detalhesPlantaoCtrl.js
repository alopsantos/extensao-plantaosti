angular
  .module("plantaoSti")
  .controller("detalhesPlantaoCtrl", function ($scope, $routeParams, plantao) {
    $scope.plantao = plantao.data;
  });
