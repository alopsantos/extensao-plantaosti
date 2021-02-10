angular
  .module("plantaoSti")
  .controller(
    "detalhesFarmaciaCtrl",
    function ($scope, $routeParams, farmacia) {
      $scope.farmacia = farmacia.data;
    }
  );
