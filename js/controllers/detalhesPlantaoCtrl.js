angular
  .module("plantaoSti")
  .controller("detalhePlantaoCtrl", function ($scope, $routeParams, plantao) {
    console.log($routeParams);
    $scope.plantao = plantao.data;
  });
